const BACKEND_URL = process.env.NEXT_PUBLIC_URL_BACK_END?.trim();
const BACKEND_PROXY_PATH = '/api/backend'

export function hasBackendUrl() {
  return Boolean(BACKEND_URL)
}

export function getBackendUrl(path: string) {
  if (!BACKEND_URL) {
    throw new Error('A API do servidor nao esta configurada.')
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (typeof window !== 'undefined') {
    return `${BACKEND_PROXY_PATH}${normalizedPath}`
  }

  const normalizedBase = BACKEND_URL.endsWith('/') ? BACKEND_URL.slice(0, -1) : BACKEND_URL

  return `${normalizedBase}${normalizedPath}`
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  const rawBody = await response.text()
  const responseDescription = `${response.status} ${response.statusText} (${response.url})`
  let data: T

  try {
    data = JSON.parse(rawBody) as T
  } catch {
    if (rawBody.trim().startsWith('<')) {
      throw new Error(
        `A API do servidor retornou HTML em vez de JSON: ${responseDescription}. Verifique se a URL da API esta correta e se o servidor esta ativo.`
      )
    }

    throw new Error(`A resposta da API nao esta em JSON valido: ${responseDescription}.`)
  }

  if (!response.ok) {
    const apiError = data as {
      error?: string
      detail?: string
      backendUrl?: string
    }
    const details = [apiError.error, apiError.detail, apiError.backendUrl].filter(Boolean).join(' ')

    throw new Error(`A API retornou erro ${responseDescription}.${details ? ` ${details}` : ''}`)
  }

  return data
}
