'use strict';

angular.module('yourStlCourts').controller('HomeCtrl', function (TicketFinder,Municipalities,$state) {
  var ctrl = this;
  ctrl.municipalities = Municipalities.municipalitiesMapNames();
  ctrl.selectedMunicipality = null;
  ctrl.finderSelected = TicketFinder.TicketFinderToSelect.NONE;
  ctrl.updateFinderSelected = function(TicketFinderToSelect){
    ctrl.finderSelected = TicketFinderToSelect;
  };

  ctrl.clearTicketFinder = function(){
    ctrl.finderSelected = TicketFinder.TicketFinderToSelect.NONE;
  };

  ctrl.municipalitySelected  = function(){
    $state.go('courtSearchInfo',{courtId : ctrl.selectedMunicipality.court_id});
  };
});
