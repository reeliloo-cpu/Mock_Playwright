import { expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'

test('Sign in flow with mock', async ({ page }) => {
  const jwt =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5paWx2IiwiZXhwIjoxNzY1MjI4ODY2LCJpYXQiOjE3NjUyMTA4NjZ9.mMTClk-De79o5iwvoVP-zOv1BZkgEKJZybER53FsBZVcNn5JCHi8h95wz_-3 f45WXWhDgyKaP34ypUUC5BGCTA'

  await page.route('**/login/student', async (route) => {
    await route.fulfill({
      // body not a json but a plain text
      body: jwt,
      status: 200,
    })
  })

  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('12345678')
  const passwordField = page.getByTestId('password-input')
  await passwordField.fill('qwertyui')
  const signInButton = page.getByTestId('signIn-button')
  await signInButton.click()
  await expect(page.getByTestId('openStatusPopup-button')).toBeVisible()
})
