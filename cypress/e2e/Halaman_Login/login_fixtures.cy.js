import LoginPage from "../../support/LoginPage/LoginPage"

describe('Verifikasi Fitur Login Akun', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('User Berhasil Login dengan data akun yang terdaftar dan berhasil Logout', () => {
    cy.fixture('user.json').then((user) => {
    const datauser = user[0]
    LoginPage.inputUsernameManual(datauser.username)
    LoginPage.inputPasswordManual(datauser.password)
    LoginPage.klikLogin()
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
    })
  })
})