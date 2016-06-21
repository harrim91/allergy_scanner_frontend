describe('UserController', function() {
beforeEach(module('happyBellyApp'));
  var userController, scope;


  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    userController = $controller('UserController', {
      $scope: scope
    });
  }));

  describe('user_ingredients', function() {
    it('it formats ingredients correctly', function() {
      var ingredients = ['cheesE', 'GlUtEn', 'ScramBlEd EggS'];
      var correctIngredients = ['Cheese', 'Gluten', 'Scrambled Eggs'];
      expect(userController.formatIngredients(ingredients)).toEqual(correctIngredients);
    });
  });
});
