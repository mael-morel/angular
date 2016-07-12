firstApp.controller('CreateAccountController' , function ($state){

    var vm = this;

    vm.createAccount = function() {
        if (vm.accountForm.$invalid) {
            return;
        }
        console.log(vm.account);
    };

    vm.goToListAccounts = function() {
        $state.go('root.listAccounts');
    }
});
