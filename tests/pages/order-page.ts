import { Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton
  readonly searchOrderInput
  readonly searchOrderSubmitButton
  readonly orderNotFoundContainer
  readonly statusItem0
  readonly statusItem1
  readonly statusItem2
  readonly orderItem0
  readonly orderItem1
  readonly orderItem2
  readonly orderItem3

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.searchOrderInput = page.getByTestId('searchOrder-input')
    this.searchOrderSubmitButton = page.getByTestId('searchOrder-submitButton')
    this.orderNotFoundContainer = page.getByTestId('orderNotFound-container')
    this.statusItem0 = page.getByTestId('status-item-0')
    this.statusItem1 = page.getByTestId('status-item-1')
    this.statusItem2 = page.getByTestId('status-item-2')
    this.orderItem0 = page.getByTestId('order-item-0')
    this.orderItem1 = page.getByTestId('order-item-1')
    this.orderItem2 = page.getByTestId('order-item-2')
    this.orderItem3 = page.getByTestId('order-item-3')
  }
}
