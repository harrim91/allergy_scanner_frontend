describe('DietProfileController', function() {

  var array = [1, 2, 3, 4]

  var dietProfileController, scope;
  var mockDietProfileService = { create: null, getDietProfiles: null };


  beforeEach(function() {
    module('happyBellyApp', function($provide) {
      $provide.value('DietProfileService', mockDietProfileService);
    });
  });

  beforeEach(inject(function($controller, $rootScope) {
    spyOn(mockDietProfileService, 'create')
      .and.returnValue({
        then: function(resolve) {
          resolve(array);
        }

    });
    spyOn(mockDietProfileService, 'getDietProfiles')
      .and.returnValue({
        then: function(resolve) {
          resolve(array);
        }

    });

    scope = $rootScope.$new();
    dietProfileController = $controller('DietProfileController', {
      '$scope': scope
    });
  }));


  it('return an array of ids from the form data', function() {
    var formData = {"Nut Allergy":[{ "id":1, "name":"Peanut"},{ "id":2, "name":"Cashew"}],"Lactose Allergy":[{ "id":3, "name":"Milk"},{ "id":4, "name":"Cheese"}]}
    dietProfileController.cleanFalse(formData);
    expect(mockDietProfileService.create).toHaveBeenCalled();
  });
});