;(function(ng) {
  'use strict';

  ng.module('ng-fullstack-issue-216')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
