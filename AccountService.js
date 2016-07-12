angular.module('FirstApp').factory('AccountService', function($http) {

    var serverCallCount = 0;

    var getServerCount = function() {
        return serverCallCount;
    };

    var getAccountById = function(accountId) {

        serverCallCount++;
        return $http.get('http://localhost:4000/accounts/' + accountId);
    };

    var getAccountsByOwnerId = function(ownerId) {
      serverCallCount++;
      privateFunction();
      return $http.get('http://localhost:4000/accounts/owner/' + ownerId);
    };

    var privateFunction = function(){
      console.log('call to private function');
    };

    return {
        getAccountById : getAccountById,
        getAccountsByOwnerId : getAccountsByOwnerId,
        getServerCount : getServerCount
    };
});
