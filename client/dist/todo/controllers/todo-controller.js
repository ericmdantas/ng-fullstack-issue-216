!function(o){"use strict";o.module("ng-fullstack-issue-216").controller("TodoController",["$log","Todo","TodoDAO",function(o,t,n){function e(){return n.getAll().then(function(o){return r.todos=o,r.todos})["catch"](o.error)}var r=this;return r.todo=new t,r.todos=[],r.createTodo=function(e){n.createTodo(e).then(function(o){r.todos.push(o),r.todo=new t})["catch"](o.error)},r.deleteTodo=function(t){n.deleteTodo(t).then(function(){return e()})["catch"](o.error)},e(),r}])}(window.angular);