describe('FoodProductController', function() {
  var controller;

  beforeEach(module('happyBellyApp'));

  beforeEach(inject(function($controller) {
    controller = $controller('FoodProductController');
  }));

  it('is initialized with no food product', function() {
    expect(controller.foodProduct).not.toBeDefined();
  })

  // describe('#getProductInfo', function() {
  //   it('sets the foodProduct attribute' function() {

  //   });
  // });
});