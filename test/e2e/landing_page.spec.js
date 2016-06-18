describe ('Landing page', function() {

  it('it should have a title', function() {
    browser.get('/');
    expect($('.title').getText()).toEqual('Happy Belly');
  });

  it ('has a barcode scan button', function() {
    browser.get('/');
    expect($('#scan-button').getText()).toMatch('Scan Barcode');
  });
});
