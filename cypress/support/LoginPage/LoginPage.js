class halamanLogin {
    fldUsername = '[data-test="username"]'
    fldPassword = '[data-test="password"]'
    btnLogin = '[data-test="login-button"]'
    textErrorLogin = '[data-test="error"]'

    inputUsernameManual(username) {
        const field = cy.get(this.fldUsername)
        if (!username) {
            field.clear()
        } else {
            field.clear().type(username)
        }
    }

    inputPasswordManual(password) {
        const field = cy.get(this.fldPassword)
        if (!password) {
            field.clear()
        } else {
            field.clear().type(password)
        }
    }

    klikLogin() {
        cy.get(this.btnLogin).click()
    }

    getErrorMessage() {
        return cy.get(this.textErrorLogin)
    }
}

export default new halamanLogin()
