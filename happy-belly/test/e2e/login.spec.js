describe ('Landing page', function() {

  it('it should have a title', function() {
    browser.get('/');
    expect($('#header').getText()).toEqual('Happy Belly');
  });
});
