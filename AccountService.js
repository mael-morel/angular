angular.module('FirstApp').factory('AccountService', function() {

    var serverCallCount = 0;

    var getServerCount = function() {
        return serverCallCount;
    };

    var getAccountById = function(accountId) {

        serverCallCount++;
    };

    var getAccountsByOwnerId = function(ownerId) {
      serverCallCount++;
      privateFunction();
    };

    var privateFunction = function(){
      console.log('call to private function');
    };

    return {};
});
