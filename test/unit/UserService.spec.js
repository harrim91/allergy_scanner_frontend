describe('UserService', function() {
  beforeEach(module('happyBellyApp'));

  var UserService;

  beforeEach(inject(function(_UserService_) {
    UserService = _UserService_;
  }));

  it('it initialized with CurrentUserID as null', function() {
    expect(UserService.currentUserID).toBe(null);
  })

  describe('setCurrentUserID', function() {
    it('sets the current user id to the given integer', function() {
      UserService.setCurrentUserID(1);
      expect(UserService.currentUserID).toEqual(1);
    })
  });
})