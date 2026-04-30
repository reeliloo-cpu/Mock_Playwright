import { Page } from '@playwright/test'
import { SERVICE_URL } from '../../config/env-data'
import { OrderPage } from './order-page'

export class LoginPage {
  readonly page: Page
  readonly url: string = SERVICE_URL
  readonly usernameField
  readonly passwordField
  readonly signIn

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.getByTestId('username-input')
    this.passwordField = page.getByTestId('password-input')
    this.signIn = page.getByTestId('signIn-button')
  }

  async open() {
    await this.page.goto(this.url)
  }

  async authorize() {
    // TODO
    return new OrderPage(this.page)
  }
}
