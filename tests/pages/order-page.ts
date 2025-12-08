import { Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
  }
}
