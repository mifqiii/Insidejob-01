class halamanIventory {
  // POM Navigasi Menu & Header
  iconSwagLab = '.app_logo';
  iconShoppingCart = '.shopping_cart_link';
  btnMenu = '#react-burger-menu-btn';
  sidebarAllItem = '[data-test="inventory-sidebar-link"]';
  sidebarLogout = '[data-test="logout-sidebar-link"]';
  sidebarAboute = '[data-test="about-sidebar-link"]';
  sidebarResetAppState = '[data-test="reset-sidebar-link"]';
  iconCloseMenu = 'react-burger-cross-btn';

  // Pom Inventory
  filterIventory = '[data-test="product-sort-container"]';
  cardInventory = ':nth-child(1) > [data-test="inventory-item-description"]';
  textPriceIventory = ':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]';
  IconAddCard = '.btn.btn_primary.btn_small.btn_inventory';

  // POM Footer
  textFooter = '[data-test="footer-copy"]';
  iconTwitter = '[data-test="social-twitter"]';
  iconFacebook = '[data-test="social-facebook"]';
  IconLinkedin = '[data-test="social-linkedin"]';

  // Action Navigasi Menu
  klikMenu() {
    cy.get(this.btnMenu).click();
  }

  klikSidebarAllItem() {
    cy.get(this.sidebarAllItem).click();
  }

  klikSidebarAboute() {
    cy.get(this.sidebarAboute).click();
  }

  klikSidebarLogout() {
    cy.get(this.sidebarLogout).click();
  }

  klikSidebarResetAppState() {
    cy.get(this.sidebarResetAppState).click();
  }

  filterIventoryByNameAZ(name) {
    cy.get(this.filterIventory).select('Name (A to Z)');
    cy.get(this.cardInventory).should('be.visible').contain(name);
  }

  filterIventoryByNameZA() {
    cy.get(this.filterIventory).select('Name (Z to A)');
  }

  filterIventoryByPriceLowHigh() {
    cy.get(this.filterIventory).select('Price (low to high)');
  }

  filterInventoryByPriceHighLow() {
    cy.get(this.filterIventory).select('Price (high to low)');
  }

  klickShoppingCart(){
    cy.get(this.IconAddCard).eq(0).click();
    cy.get(this.IconAddCard).eq(1).click();
    cy.get(this.iconShoppingCart).should('be.visible').and('contain.text', '2');
    cy.get(this.iconShoppingCart).click();
  }
}

export default new halamanIventory();
