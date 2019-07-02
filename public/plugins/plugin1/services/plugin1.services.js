
angular.module('mcube/plugin')
.service('crudService',function($http){

this.getUsers = function(){

    return $http.get("../api/getUsers").then() ;

};


this.addUser = function(user){

    return $http.post("../api/addUser",{"data":user}).then();

}


});