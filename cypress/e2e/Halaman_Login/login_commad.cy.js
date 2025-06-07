import LoginPage from "../../support/LoginPage/LoginPage"

describe('Verifikasi Fitur Login Akun', () => {
  it('User Berhasil Login dengan data akun yang terdaftar', () => {
      cy.visit('https://www.saucedemo.com')
      cy.login('standard_user', 'secret_sauce')
  })
})