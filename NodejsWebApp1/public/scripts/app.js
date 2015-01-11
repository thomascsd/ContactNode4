(function () {
    'use strict';
    var app = angular.module('contactApp', []);
    
    app.controller('contactController', function ($scope, $http) {

        
        function add() {
            $http.post('/api/contacts', $scope.newContact).success(function (data) {
                $scope.items.push(data);
            });
        }
        
        function over() {
            this.cmdVisible = true;
        }
        
        function leave() {
            this.cmdVisible = false;
        }
        
        function edit(item) {
            this.editZone = true;

            this.editContact = item;
        }
        
        function update(editContact) {
            var self = this;
            var id = editContact._id;
            $http.put('/api/contacts/' + id, editContact).success(function (data) {
                self.editZone = false;
            });
        }
        
        function cancel() {
            this.editZone = false;
        }
        
        $http.get('/api/contacts').success(function (datas) {
            $scope.items = datas;
        });
        
        $scope.items = [];
        $scope.cmdVisible = false;
        $scope.editZone = false;
        $scope.editContact = null;
        $scope.add = add;
        $scope.over = over;
        $scope.leave = leave;
        $scope.edit = edit;
        $scope.update = update;
        $scope.cancel = cancel;
    });
          
})();

 