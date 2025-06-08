import LoginPage from "../support/LoginPage/LoginPage";
import inventoryPage from "../support/inventoryPage/inventoryPage";

describe('Verifikasi Fitur Inventory', () => {
  beforeEach(() => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[0];
      cy.visit('https://www.saucedemo.com');
      LoginPage.inputUsernameManual(datauser.username);
      LoginPage.inputPasswordManual(datauser.password);
      LoginPage.klikLogin();
    })
  })

  // it('Verifikasi Fitur Sort Data', () => {
  //   cy.fixture('products.json').then((products) => {
  //     const dataproducts = products[0];
  //     inventoryPage.filterIventoryByNameAZ(dataproducts.name);
  //   })
  // })

  it('Verifikasi Vitur Tambah Keranjang', () => {
    inventoryPage.klickShoppingCart();
  })

});
