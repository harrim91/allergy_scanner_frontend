describe ('Landing page', function() {

  it('it should have a title', function() {
    browser.get('/');
    expect($('.title').getText()).toEqual('Happy Belly');
  });
});
