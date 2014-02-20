angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('HighscoreService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

    var users = [
    { id: 0, name: 'Jaeger Shots', score: 15 },
    { id: 1, name: 'Vodka', score: 30 },
    { id: 2, name: 'Whisky', score: 25 },
    { id: 3, name: 'Heihei', score: 20 }
  ];

  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      // Simple index lookup
      return users[userId];
    }
  }
});

