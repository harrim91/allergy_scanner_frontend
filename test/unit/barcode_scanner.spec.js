describe('Test', function () {
  beforeEach(module('app'));

  var controller;

  beforeEach(inject(function($controller) {
   controller = $controller("MainController");
  }));



  it('returns 5', function(){
    expect(5).toEqual(5);
  });

});
