import LoginPage from "../../support/LoginPage/LoginPage"
import inventoryPage from "../../support/inventoryPage/inventoryPage"

describe('Verifikasi Fitur Login Akun', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('User Berhasil Login dengan data akun yang terdaftar dan berhasil Logout', () => {
    LoginPage.inputUsernameManual(Cypress.env('USERNAME'))
    LoginPage.inputPasswordManual(Cypress.env('PASSWORD'))
    LoginPage.klikLogin()
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
    inventoryPage.klikMenu()
    inventoryPage.klikSidebarLogout()
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('User gagal login jika username kosong', () => {
    LoginPage.inputUsernameManual('')
    LoginPage.inputPasswordManual(Cypress.env('PASSWORD'))
    LoginPage.klikLogin()
    LoginPage.getErrorMessage().should('contain', 'Username is required')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('User gagal login jika password kosong', () => {
    LoginPage.inputUsernameManual(Cypress.env('USERNAME'))
    LoginPage.inputPasswordManual('')
    LoginPage.klikLogin()
    LoginPage.getErrorMessage().should('contain', 'Password is required')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('User gagal login dengan username dan password tidak terdaftar', () => {
    LoginPage.inputUsernameManual('user_salah')
    LoginPage.inputPasswordManual('password_salah')
    LoginPage.klikLogin()
    LoginPage.getErrorMessage().should('contain', 'Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('User gagal login jika akun terkunci', () => {
    LoginPage.inputUsernameManual('locked_out_user')
    LoginPage.inputPasswordManual('secret_sauce')
    LoginPage.klikLogin()
    LoginPage.getErrorMessage().should('contain', 'Sorry, this user has been locked out.')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('User Berhasil Login dengan data akun yang terdaftar', () => {
    LoginPage.inputUsernameManual(Cypress.env('USERNAME'))
    LoginPage.inputPasswordManual(Cypress.env('PASSWORD'))
    LoginPage.klikLogin()
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })
})
