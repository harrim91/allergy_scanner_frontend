describe ('User', function() {

describe('#sign_up', function(){
  it('redirects the user to diet_profiles after sign up', function() {
    browser.get('/');
    $('#sign-up-btn').click();
    $('#email').sendKeys("mara@gmail.com");
    $('#password').sendKeys("12345678");
    $('#password-conf').sendKeys("12345678");
    $('#register').click();
    expect(browser.currentUrl).toEqual('/diet_profiles');
  });
});

describe('#user_profile', function() {
  it('shows the user\'s email address', function() {

  });

  it('lists the user\'s avoided ingredients', function() {

  });
});

});
