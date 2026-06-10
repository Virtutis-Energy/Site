type FontVariable = {
  variable: string
}

// Avoid network fetches from Google Fonts during `next dev` and `next build`.
// The project CSS already defines robust font-family fallbacks.
export const roboto: FontVariable = {
  variable: '',
}

export const openSans: FontVariable = {
  variable: '',
}

export const poppins: FontVariable = {
  variable: '',
}
