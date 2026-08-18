const appDownloadWhatsappUrl = 'https://wa.me/5585984831512'

export const getAppDownloadHref = (message: string) => `${appDownloadWhatsappUrl}?text=${encodeURIComponent(message)}`
