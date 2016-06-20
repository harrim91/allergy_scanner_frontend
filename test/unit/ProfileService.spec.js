describe('ProfileService', function(){
  beforeEach(module("happyBellyApp"));

  var ProfileService, ProfileFactory, httpBackend;
  var ingredients = [ { id: 1, name: 'Cheese' }, { id: 2, name: 'milk' } ];



  beforeEach(inject(function($httpBackend, _ProfileService_, _ProfileFactory_){
    httpBackend = $httpBackend;
    ProfileService = _ProfileService_;
    ProfileFactory = _ProfileFactory_;
  }));

  it('sends a post request to backend with a factory object', function(){
    ProfileService.create(1, ingredients);
    expect(httpBackend.post).toHaveBeenCalled();
  });

});
