import { Locator } from 'playwright-core'

export async function getBackgroundColor(locator: Locator): Promise<string> {
  return locator.evaluate((el) => getComputedStyle(el).backgroundColor)
}

export const STATUS_COLORS = {
  YELLOW: 'rgb(253, 204, 0)',
  TRANSPARENT: 'rgba(0, 0, 0, 0)',
}
