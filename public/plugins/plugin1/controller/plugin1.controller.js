
angular.module('mcube/plugin')
.controller("plugin1Controller",function($scope, crudService){
 
    $scope.userList=[];
    $scope.user = {};
    $scope.getAllUsers = function(){
        
        crudService.getUsers().then(function(result,err){
            $scope.userList = result.data.rows;
        });

    };

    $scope.addUser = function(){
        
        crudService.addUser($scope.user).then(function(result,err){
            $scope.getAllUsers();
        });

    };

    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
          console.log($scope.user);
          $scope.addUser();
          $scope.user={};
        }
    
      };


      $scope.getAllUsers(); 
    
});