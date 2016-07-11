angular.module('fruit', []);

angular.module('fruit').controller('FruitsController', fruitsController);

function fruitsController() {
    var vm = this;
    vm.firstFruit = 'fraise';

    vm.displayFruit = function() {
        console.log(vm.firstFruit);
        vm.firstFruit += ' ça vient du controller';
    }
}
