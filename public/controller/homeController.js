myApp.controller("homeCtrl", function ($scope) {
    $scope.items = [];
    $scope.addItem = function (item) {
        $scope.items.push(item);
        $scope.item = {};
        $scope.registrationinfo.$setPristine();
        $scope.registrationinfo.$setUntouched();
    },
        $scope.removeItem = function (index) {
            console.log(index);
            $scope.items.splice(index, 1)
        },
        $scope.editItemDetails = function (item, index) {
            //$scope.editing = $scope.items.indexOf(index);            
            $('#myModal').modal(open);
            $scope.editItem = {};
            $scope.editItem = angular.copy(item);
            //$scope.editItem = item;
            $scope.index = index;
        }

    $scope.close = function () {
        $('#myModal').modal('hide');
    }

    $scope.updateDetails = function (editItem) {
        $scope.items[$scope.index] = editItem;
        $('#myModal').modal('hide');
    }

});
