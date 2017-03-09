app.directive('datafromlocaljson', ['$http', function($http) {
    return {
            restrict: 'E',
            scope:{
                src:"="
            },
            link: function($scope) {
                $http.get($scope.src)
                    .then(function(res){
                        $scope.data = res.data;
                        if ($scope.data!=null){        
                            console.log("Data loaded from json.");
                            console.log("data ="+$scope.data);
                        }
                    });
            }
        };
}]);