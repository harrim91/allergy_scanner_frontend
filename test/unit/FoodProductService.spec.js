describe('FoodProductService', function(){
  beforeEach(module("happyBellyApp"));

  var FoodProductService, FoodProductFactory, httpBackend;

  var apiUrl = 'http://www.test.com/';
  var barcode = '737628064502';

  var apiResponse = {product:
      {
        brand: 'Thai Kitchen',
        product: 'Stir-Fry Rice Noodles',
        ingredients: [ { text: 'Rice Noodles' }, { text: 'Seasoning' } ]
      }
    };



  beforeEach(inject(function($httpBackend, _FoodProductService_, _FoodProductFactory_){
    httpBackend = $httpBackend;
    FoodProductService = _FoodProductService_;
    FoodProductFactory = _FoodProductFactory_;
  }));

  it('receives food product data from the API', function(){
    var foodProduct = new FoodProductFactory(
                                            'Thai Kitchen',
                                            'Stir-Fry Rice Noodles',
                                            ['Rice Noodles', 'Seasoning']
                                            );
    httpBackend.expectGET(apiUrl + barcode + '.json').respond(apiResponse);

    FoodProductService.getProductInfo(apiUrl, barcode).then(function(response){
      expect(response).toEqual(foodProduct);
    });
  });

});
