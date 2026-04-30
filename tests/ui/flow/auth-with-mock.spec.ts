import { expect, test } from '@playwright/test'
import { authMock } from '../../mocks/mocks'
import { LoginPage } from '../../pages/login-page'
import { OrderPage } from '../../pages/order-page'

test.beforeEach(async ({ page }) => {
  await authMock(page)

  const loginPage = new LoginPage(page)
  await loginPage.open()
  await loginPage.usernameField.fill('12345678')
  await loginPage.passwordField.fill('password123')
  await loginPage.signIn.click()
})

test('Sign in flow with mocked flow', async ({ page }) => {
  const orderPage = new OrderPage(page)

  await expect(orderPage.statusButton).toBeVisible()
})

test.skip('Sign in and search for non-existing order', async ({ page }) => {
  // TODO: mock

  // TODO: login is done in beforeEach
  const orderPage = new OrderPage(page)
  await orderPage.statusButton.click()
  await orderPage.searchOrderInput.fill('987')
  await orderPage.searchOrderSubmitButton.click()

  // TODO: assert
})

test.skip('Sign in and search for existing order', async ({ page }) => {
  // TODO: mock

  // TODO: login is done in beforeEach
  const orderPage = new OrderPage(page)
  await orderPage.statusButton.click()
  await orderPage.searchOrderInput.fill('789')
  await orderPage.searchOrderSubmitButton.click()

  // TODO: assert
})
