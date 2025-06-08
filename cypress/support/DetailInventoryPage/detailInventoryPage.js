class halamanDetailIventory{
    //POM 
    iconSwagLab = '.app_logo'
    iconShoppingCart = '.shopping_cart_link'
    btnMenu = '#react-burger-menu-btn'
    sidebarAllItem = '[data-test="inventory-sidebar-link"]'
    sidebarLogout = '[data-test="logout-sidebar-link"]'
    sidebarAboute = '[data-test="about-sidebar-link"]'
    sidebarResetAppState = '[data-test="reset-sidebar-link"]'
    iconCloseMenu = 'react-burger-cross-btn'

    //Pom Iventory
    filterIventory = '[data-test="product-sort-container"]'
    cardInventory = ':nth-child(1) > [data-test="inventory-item-description"]'
    textPriceIventory = ':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'

    //POM Footer
    textFooter = '[data-test="footer-copy"]'
    iconTwitter = '[data-test="social-twitter"]'
    iconFacebook = '[data-test="social-facebook"]'
    IconLinkedin = '[data-test="social-linkedin"]'

    //Action Navigasi Menu
    klikMenu(){
        cy.get(this.btnMenu).click()
    }

    klikSidebarAllItem(){
        cy.get(this.sidebarAllItem).click()
    }

    klikSidebarAboute(){
        cy.get(this.sidebarAboute).click()
    }

    klikSidebarLogout(){
        cy.get(this.sidebarLogout).click()
    }

    klikSidebarResetAppState(){
        cy.get(this.sidebarResetAppState).click()
    }

    filterIventoryByNameAZ(){
        cy.get(this.filterIventory).select('Name (A to Z)')
    }

    filterIventoryByNameZA(){
        cy.get(this.filterIventory).select('Name (Z to A)')
    }

    filterIventoryByPriceLowHigh(){
        cy.get(this.filterIventory).select('Price (low to high)')
    }

    filterInventoryByPriceHighLow() {
    cy.get(this.filterIventory).select('Price (low to high)')
    }
}
export default new halamanDetailIventory()

