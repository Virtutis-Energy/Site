//const BACKEND_URL = process.env.NEXT_PUBLIC_URL_BACK_END?.trim()
const BACKEND_URL = "https://virtutis-website-backend-412f7c9b0ac2.herokuapp.com"
export function getBackendUrl(path: string) {
  if (!BACKEND_URL) {
    throw new Error('NEXT_PUBLIC_URL_BACK_END nao esta configurada.')
  }

  const normalizedBase = BACKEND_URL.endsWith('/') ? BACKEND_URL.slice(0, -1) : BACKEND_URL
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${normalizedBase}${normalizedPath}`
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  const rawBody = await response.text()

  try {
    return JSON.parse(rawBody) as T
  } catch {
    if (rawBody.trim().startsWith('<')) {
      throw new Error(
        'A API retornou HTML em vez de JSON. Verifique a NEXT_PUBLIC_URL_BACK_END e se o backend esta rodando.'
      )
    }

    throw new Error('A resposta da API nao esta em JSON valido.')
  }
}
