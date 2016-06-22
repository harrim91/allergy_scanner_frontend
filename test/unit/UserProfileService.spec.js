describe('UserService', function() {
  beforeEach(module('happyBellyApp'));

  var UserProfileService;

  beforeEach(inject(function(_UserProfileService_) {
    UserProfileService = _UserProfileService_;
  }));

  it('it initialized with CurrentUserID as null', function() {
    expect(UserProfileService.currentUserID).toBe(null);
  })

  describe('setCurrentUserID', function() {
    it('sets the current user id to the given integer', function() {
      UserProfileService.setCurrentUserID(1);
      expect(UserProfileService.currentUserID).toEqual(1);
    })
  });
})