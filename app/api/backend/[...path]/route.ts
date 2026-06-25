import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.NEXT_PUBLIC_URL_BACK_END?.trim()

type RouteContext = {
  params: Promise<{
    path?: string[]
  }>
}

const HOP_BY_HOP_HEADERS = new Set([
  'connection',
  'content-length',
  'host',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
])

function shouldAppendTrailingSlash(pathSegments: string[], requestPathname: string) {
  if (requestPathname.endsWith('/')) {
    return true
  }

  const lastSegment = pathSegments[pathSegments.length - 1] || ''

  return Boolean(lastSegment) && !lastSegment.includes('.')
}

function buildBackendUrl(pathSegments: string[], search: string, requestPathname: string) {
  if (!BACKEND_URL) {
    throw new Error('A API do servidor nao esta configurada.')
  }

  const normalizedBase = BACKEND_URL.endsWith('/') ? BACKEND_URL.slice(0, -1) : BACKEND_URL
  const normalizedPath = pathSegments.map((segment) => encodeURIComponent(segment)).join('/')
  const trailingSlash = shouldAppendTrailingSlash(pathSegments, requestPathname) ? '/' : ''

  return `${normalizedBase}/${normalizedPath}${trailingSlash}${search}`
}

function copyRequestHeaders(request: NextRequest) {
  const headers = new Headers(request.headers)

  for (const header of HOP_BY_HOP_HEADERS) {
    headers.delete(header)
  }

  headers.delete('origin')
  headers.delete('referer')

  return headers
}

async function proxyBackendRequest(request: NextRequest, context: RouteContext) {
  if (!BACKEND_URL) {
    return NextResponse.json({ error: 'A API do servidor nao esta configurada.' }, { status: 500 })
  }

  const { path = [] } = await context.params
  const backendUrl = buildBackendUrl(path, request.nextUrl.search, request.nextUrl.pathname)
  const method = request.method.toUpperCase()
  const body = method === 'GET' || method === 'HEAD' ? undefined : await request.arrayBuffer()
  let response: Response

  try {
    response = await fetch(backendUrl, {
      method,
      headers: copyRequestHeaders(request),
      body,
      cache: 'no-store',
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro de conexao com a API.'

    return NextResponse.json(
      {
        error: 'Nao foi possivel conectar com a API do servidor.',
        detail: message,
        backendUrl,
      },
      { status: 502 }
    )
  }

  const responseHeaders = new Headers(response.headers)
  responseHeaders.delete('content-encoding')
  responseHeaders.delete('content-length')
  responseHeaders.delete('transfer-encoding')

  return new NextResponse(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  })
}

export async function GET(request: NextRequest, context: RouteContext) {
  return proxyBackendRequest(request, context)
}

export async function POST(request: NextRequest, context: RouteContext) {
  return proxyBackendRequest(request, context)
}

export async function PUT(request: NextRequest, context: RouteContext) {
  return proxyBackendRequest(request, context)
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  return proxyBackendRequest(request, context)
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  return proxyBackendRequest(request, context)
}
