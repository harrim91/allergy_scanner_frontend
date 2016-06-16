describe ('User', function() {

  it('it should allow a user to sign up', function() {
    browser.get('/');
    $('#sign-up-btn').click();
    $('#email').sendKeys("mara@gmail.com")
    $('#password').sendKeys("12345678")
    $('#password-conf').sendKeys("12345678")
    $('#register').click()
    expect($('#message').getText()).toEqual('Thanks for registering');
  });
});