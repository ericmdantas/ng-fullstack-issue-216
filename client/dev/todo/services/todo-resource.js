;(function(ng) {
  'use strict';

  ng.module('ng-fullstack-issue-216')
    .factory('TodoResource', [
      '$resource',
      function($resource) {
        var _url = '/api/todos/:id';
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));
