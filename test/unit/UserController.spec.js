describe('UserProfileController', function() {
beforeEach(module('happyBellyApp'));
  var userController, scope;


  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    userProfileController = $controller('UserProfileController', {
      $scope: scope
    });
  }));

  describe('user_ingredients', function() {
    it('it formats ingredients correctly', function() {
      var ingredients = ['cheesE', 'GlUtEn', 'ScramBlEd EggS'];
      var correctIngredients = ['Cheese', 'Gluten', 'Scrambled Eggs'];
      expect(userProfileController.formatIngredients(ingredients)).toEqual(correctIngredients);
    });
  });
});
