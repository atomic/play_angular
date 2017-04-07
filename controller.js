/**
 * Created by atomic on 4/6/17.
 */

const demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'Partials/View1.html',
            controller: 'SimpleController'
        })
        .when('/view2', {
            templateUrl: 'Partials/View2.html',
            controller: 'SimpleController'
        })
        .otherwise({ redirectTo: '/view1' });
}]);

var controller = {};
controller.SimpleController = function($scope) {
    $scope.customers=[
        {name: 'John Smith', city:'Phoenix'} ,
        {name: 'John Doe', city:'New York'} ,
        {name: 'Jane Doe', city:'San Francisco'},
        {name:'Chuck Norris', city:'Los Angeles'},
        {name:'Chuck Tesla', city:'Los Alamos'}
    ];
    $scope.addCustomer = function () {
        $scope.customers.push( { name: $scope.newCustomer.name, city: $scope.newCustomer.city });
    }
};

demoApp.controller(controller);
