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

firstApp.controller('ListAccountsController', function (AccountService) {

    var vm = this;
    vm.serverCallCount = AccountService.getServerCount();

    AccountService.getAccountsByOwnerId(12).then(function (response) {
        vm.accounts = response.data;
    }, function (response, status) {
        console.log(status);
    });
});

firstApp.controller('AccountDetailController', function ($stateParams, AccountService){

    var vm = this;
    vm.serverCallCount = AccountService.getServerCount();
    vm.accountNumber = $stateParams.accountNumber;

    function getAccountId () {
        AccountService.getAccountById(vm.accountNumber).then(function (response) {
            vm.account = response.data;
        }, function (response, status) {
            console.log(status);
        });
    }

    getAccountId();
});

firstApp.controller('HeaderController' , function (){

});
