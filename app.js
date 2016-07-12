var firstApp = angular.module('FirstApp', [
    'ui.router'
]);

firstApp.config(function ($stateProvider) {
        $stateProvider
            .state('root', {
                abstract: true,
                url:'/home',
                templateUrl: 'header.html',
                controller: 'HeaderController',
                controllerAs: 'header'
            }).state('root.listAccounts', {
                url: '/listAccounts',
                templateUrl: 'listAccounts.html',
                controller: 'ListAccountsController',
                controllerAs: 'listAccounts'
            }).state('root.accountDetail', {
                url: '/account/{accountNumber}',
                templateUrl: 'accountDetail.html',
                controller: 'AccountDetailController',
                controllerAs: 'accountDetail'
            }).state('root.createAccount', {
                url: '/createAccount',
                templateUrl: 'createAccount.html',
                controller: 'CreateAccountController',
                controllerAs: 'createAccount'
            });
    }
);

firstApp.controller('CreateAccountController' , function ($state){

    var vm = this;

    vm.goToListAccounts = function() {
        $state.go('root.listAccounts');
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

firstApp.controller('AccountDetailController' , function ($stateParams){

    var vm = this;
    vm.accountNumber = $stateParams.accountNumber;
});

firstApp.controller('HeaderController' , function (){

});
