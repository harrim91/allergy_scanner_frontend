describe('finding product info', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('can be given a barcode and return product information', function() {

    $('#barcode-input').sendKeys('737628064502');
    $('#barcode-submit').click();
    expect(browser.getCurrentUrl()).toMatch('/product-info')
    expect($('#product-name').getText()).toMatch('Thai Kitchen Stir-Fry Rice Noodles');
  });
});
