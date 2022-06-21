export const CAPTIVATE_VERSION = `0.9.6`
export const MAC_X86_FILENAME = `Captivate-${CAPTIVATE_VERSION}.dmg`
export const MAC_ARM_FILENAME = `Captivate-${CAPTIVATE_VERSION}-arm64.dmg`
export function download_url(filename) {
  return `https://github.com/spensbot/captivate/releases/download/v${CAPTIVATE_VERSION}/${filename}`
}
