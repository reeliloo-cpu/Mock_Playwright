import { fakeJwt } from '../utils/jwt-generator'
import { Page } from '@playwright/test'

export async function authMock(page: Page) {
  const jwt = fakeJwt()

  await page.route('**/login/student', async (route) => {
    await route.fulfill({
      body: jwt, // plain text token
      status: 200,
    })
  })
}

export async function orderNotFoundMock(page: Page) {
  // TODO : implement solution
}

export async function orderFoundMock(page: Page) {
  // TODO : implement solution
  // Note: use 'json' to represent response body
}
