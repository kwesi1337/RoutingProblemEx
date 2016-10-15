var myApp = angular.module('RoutingDemo', ['ngRoute']);

myApp.controller("HomeController", function($scope){
    
    
});

myApp.controller("DetailsController", function ($scope, $routeParams){
    
    $scope.detailId = $routeParams.requestId;
});

myApp.controller("NewController", function($scope){
    
    
});
myApp.controller('PersonController', ['$scope', function ($scope){
        var self = this;
        
        self.persons = [
            {id: 1, name: "Mand", age: 18},
            {id: 2, name: "Dame", age: 23},
            {id: 3, name: "Dyr", age: 50}
        ];
        
        
        self.nextId = 4;
        
        self.title = "Routing Demo App";
        
        
        self.getPerson = function (id){
            
           for (var i = 0; i < self.persons.length; i++){
               
               if (self.persons[i].id === id){
                   
                   self.detailPerson = angular.copy(self.persons[i]);
                   return;
               }
               
               
           }
        };
        
        self.createPerson = function() {
            
            self.newPerson.id = self.nextId++;
            self.persons.pus(self.newPerson);
            self.newPerson = {};
            
        };
}]);

myApp.config(function ($routeProvider){
    
    $routeProvider
            .when("/all", {
                
                templateUrl: "all.html",
                controller: "HomeController"
                
    })
            .when("/details/:requestId", {
                
                templateUrl: "details.html",
                controller: "DetailsController"
                
    })
    
            .when("/new/", {
                
                templateUrl: "new.html",
                controller: "NewController"
    })
            .otherwise({
                
                redirectTo: "/all"
    });
});

