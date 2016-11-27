'use strict';

angular.module('yourStlCourts').factory('Municipalities', function ($resource, $q) {
  var MuniResource = $resource('municipalities/:id');
  var municipalities;

  function findById(id){
    return MuniResource.get({id: id}).$promise;
  }

  function findAll() {
    if(municipalities) {
      return $q.when(municipalities);
    }

    return MuniResource.get().$promise.then(function(data){
      municipalities = data.municipalities;
      return data.municipalities;
    });
  }

  var svc = {
    findById: findById,
    findAll: findAll
  };

  return svc;
});
