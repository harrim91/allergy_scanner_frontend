describe('ProfileService', function(){
  beforeEach(module("happyBellyApp"));

  var ProfileService, ProfileFactory, httpBackend;

  var apiUrl = 'http://www.test.com/';
  var ingredients = [ { id: 1, name: 'Cheese' }, { id: 2, name: 'milk' } ];

  var apiResponse = [
    {
      "id":1,
      "name":"Nut Allergy",
      "ingredients":[{"id":1,"name":"Peanut"}]
    }
  ];


  beforeEach(inject(function($httpBackend, _ProfileService_, _ProfileFactory_){
    httpBackend = $httpBackend;
    ProfileService = _ProfileService_;
    ProfileFactory = _ProfileFactory_;
  }));

  it('receives diet profile information from the API', function(){
    var dietProfile = new ProfileFactory(1, ['Rice Noodles', 'Seasoning']);
    httpBackend.expectGET(apiUrl).respond(apiResponse);
    httpBackend.whenGET(/views.*/).respond(200, '');
    ProfileService.getDietProfiles(apiUrl)
      .then(function(response){
        expect(response).toEqual(apiResponse);

    });
    httpBackend.flush();
  });

  it('sends diet profile information to the API', function(){
    ProfileService.create(1, ingredients).then(function(){
      expect(httpBackend.post).toHaveBeenCalled();
    });
  });

});
