import { expect, test } from '@playwright/test'
import { LoginPage } from '../../pages/login-page'
import { mockLogin } from '../../mocks/mock-login'

test('auth flow with mock', async ({ page }) => {
  await mockLogin(page)
  const authPage = new LoginPage(page)
  await authPage.open()
  await authPage.usernameField.fill('hello')
  await authPage.passwordField.fill('12345678')
  await authPage.signIn.click()
  // improve me
  await expect(page.getByTestId('openStatusPopup-button')).toBeVisible()
})
