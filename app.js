var firstApp = angular.module('FirstApp', [

]);

firstApp.config(function ($stateProvider) {
        $stateProvider
            .state('root.listAccounts', {
                url: '/listAccounts',
                templateUrl: 'listAccounts.html',
                controller: 'ListAccountsController',
                controllerAs: 'listAccounts'
            });
    }
);

firstApp.controller('CreateAccountController' , function (){

    var vm = this;

    vm.goToListAccounts = function() {

    };
});

firstApp.controller('ListAccountsController' , function () {

    var vm = this;
    vm.accounts = [
        {'number' : 1234567891, 'owner': 'Didier Jeanchard'},
        {'number' : 1098765432, 'owner': 'Didier Jeanchard'},
        {'number' : 1112131415, 'owner': 'Mélanie Jeanchard'}
    ];
});

firstApp.controller('AccountDetailController' , function (){

    var vm = this;
});

firstApp.controller('HeaderController' , function (){

});
