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
  await page.route('**/orders/*', async (route) => {
    await route.fulfill({
      body: '', // empty body
      status: 200,
    })
  })
}

export async function orderFoundMock(page: Page) {
  await page.route('**/orders/*', async (route) => {
    await route.fulfill({
      json: {
        status: 'OPEN',
        courierId: null,
        customerName: 'Laura',
        customerPhone: '44444444',
        comment: 'This is only for testing purpose',
        id: 160489,
      },
      status: 200,
    })
  })
}
export async function orderCreatedMock(page: Page) {
  await page.route('**/orders/', async (route) => {
    await route.fulfill({
      json: {
        status: 'OPEN',
        courierId: null,
        customerName: 'Reeli',
        customerPhone: '55555555',
        comment: '',
        id: 270183,
        trackingCode: '270183',
      },
      status: 200,
    })
  })
}
