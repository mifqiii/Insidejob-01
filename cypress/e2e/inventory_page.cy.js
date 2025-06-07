import LoginPage from "../support/LoginPage/LoginPage"
import inventoryPage from "../support/inventoryPage/inventoryPage"

describe('Verifikasi Fitur Iventory', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    LoginPage.inputUsername('standard_user')
    LoginPage.inputPassword('secret_sauce')
    LoginPage.klikLogin()
  })

  it('Memverifikasi filter harga dari tinggi ke rendah bekerja dan urutannya benar', () => {
    // Pilih filter harga dari harga tertinggi ke rendah
    inventoryPage.filterInventoryByPriceHighLow();

    // Tunggu halaman update
    cy.wait(500);

    // Ambil semua harga yang tampil di halaman
    cy.get(inventoryPage.textPriceInventory).then(($prices) => {
      const pricesOnPage = $prices.toArray().map(el =>
        parseFloat(el.innerText.replace('$', ''))
      );

      // Buat array sorted harga dari besar ke kecil
      const sortedPrices = [...pricesOnPage].sort((a, b) => b - a);

      // Pastikan data halaman sesuai dengan urutan harga terbalik
      expect(pricesOnPage).to.deep.equal(sortedPrices);
    });
  });
  
  it('Membandingkan harga produk di halaman dengan data fixture setelah filter high to low', () => {
    cy.fixture('products').then((products) => {
      const pricesFixture = products.map(p => parseFloat(p.price.replace('$', '')));
      const sortedPricesFixture = [...pricesFixture].sort((a, b) => b - a);

      inventoryPage.filterInventoryByPriceHighLow();

      cy.wait(500);

      cy.get(inventoryPage.textPriceInventory).then(($prices) => {
        const pricesOnPage = $prices.toArray().map(el =>
          parseFloat(el.innerText.replace('$', ''))
        );

        expect(pricesOnPage).to.deep.equal(sortedPricesFixture);
      });
    });
  });
});