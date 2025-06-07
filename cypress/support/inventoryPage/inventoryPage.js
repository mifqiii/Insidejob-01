class halamanIventory{
    btnMenu = '#react-burger-menu-btn'
    sidebarLogout = '[data-test="logout-sidebar-link"]'
    filterIventory = '[data-test="product-sort-container"]'
    textPriceIventory = ':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'

    klikMenu(){
        cy.get(this.btnMenu).click()
    }

    klikSidebarLogout(){
        cy.get(this.sidebarLogout).click()
    }

    filterIventoryByNameAZ(){
        cy.get(this.filterIventory).select('az')
    }

    filterIventoryByNameZA(){
        cy.get(this.filterIventory).select('za')
    }

    filterIventoryByPriceLowHigh(){
        cy.get(this.filterIventory).select('lohi')
    }

    filterInventoryByPriceHighLow() {
    cy.get(this.filterInventory).select('hilo">Price (high to low)').should('have.value', 'hilo">Price (high to low)');
    }

}
export default new halamanIventory()

