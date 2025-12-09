import { expect, test } from '@playwright/test'
import { LoginPage } from '../../pages/login-page'
import { mockLogin } from '../../mocks/mock-login'
import { getBackgroundColor, STATUS_COLORS } from '../../utils/color-validator'

test('auth flow with mock', async ({ page }) => {
  await mockLogin(page)
  const authPage = new LoginPage(page)
  await authPage.open()
  await authPage.usernameField.fill('hello')
  await authPage.passwordField.fill('12345678')
  await authPage.signIn.click()
  // improve me by using page object model
  await expect(page.getByTestId('openStatusPopup-button')).toBeVisible()
  // advanced check of element color
  expect(await getBackgroundColor(page.getByTestId('openStatusPopup-button'))).toBe(
    STATUS_COLORS.YELLOW,
  )
})
