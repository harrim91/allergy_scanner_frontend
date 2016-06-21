describe('DietProfileService', function(){
  beforeEach(module("happyBellyApp"));

  var DietProfileService, DietProfileFactory, httpBackend;

  var apiUrl = 'http://www.test.com/';
  var ingredients = [ { id: 1, name: 'Cheese' }, { id: 2, name: 'milk' } ];

  var apiResponse = [
    {
      "name":"Nut Allergy",
      "ingredients":[{"id":1,"name":"Peanut"}]
    }
  ];


  beforeEach(inject(function($httpBackend, _DietProfileService_, _DietProfileFactory_){
    httpBackend = $httpBackend;
    DietProfileService = _DietProfileService_;
    DietProfileFactory = _DietProfileFactory_;
  }));

  it('receives diet profile information from the API', function(){
    var dietProfile = new DietProfileFactory(['Rice Noodles', 'Seasoning']);
    httpBackend.expectGET(apiUrl).respond(apiResponse);
    httpBackend.whenGET(/views.*/).respond(200, '');
    DietProfileService.getDietProfiles(apiUrl)
      .then(function(response){
        expect(response).toEqual(apiResponse);

    });
    httpBackend.flush();
  });

  it('sends diet profile information to the API', function(){
    httpBackend.expectPOST(apiUrl).respond('success');
    httpBackend.whenGET(/views.*/).respond(200, '');
    DietProfileService.create(apiUrl, ingredients).then(function(response){
      expect(response).toEqual('success');
    });
    httpBackend.flush();
  });

});
