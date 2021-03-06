angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, HighscoreService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.drinks = HighscoreService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})

.controller('HighscoreCtrl', function($scope, HighscoreService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.users = HighscoreService.all();
});