angular.module('application', [
    'ui.scroll',
    'ui.scroll.jqlite'
  ])
  .controller('mainController', [
    '$scope',
    '$log',
    '$timeout',
    function ($scope, console, $timeout) {
      var datasource, idList1, idList2;
      // datasource implementation
      datasource = {};

      datasource.get = function (index, count, success) {
        return $timeout(function () {
          var i, item, j, ref, ref1, result;
          result = [];
          for (i = j = ref = index, ref1 = index + count - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
            item = {};
            item.id = i;
            item.content = "item #" + i;
            result.push(item);
          }
          return success(result);
        }, 100);
      };

      $scope.datasource = datasource;

      // 1st list adapter implementation
      $scope.firstListAdapter = {
        remain: true
      };

      $scope.updateList1 = function () {
        return $scope.firstListAdapter.applyUpdates(function (item, scope) {
          return item.content += ' *';
        });
      };

      $scope.removeFromList1 = function () {
        return $scope.firstListAdapter.applyUpdates(function (item, scope) {
          if (scope.$index % 2 === 0) {
            return [];
          }
        });
      };

      idList1 = 1000;

      $scope.addToList1 = function () {
        return $scope.firstListAdapter.applyUpdates(function (item, scope) {
          var newItem;
          newItem = void 0;
          if (scope.$index === 2) {
            newItem = {
              id: idList1,
              content: 'a new one #' + idList1
            };
            idList1++;
            return [
              item,
              newItem
            ];
          }
        });
      };

      // 2nd list adapter implementation
      $scope.updateList2 = function () {
        return $scope.second.list.adapter.applyUpdates(function (item, scope) {
          return item.content += ' *';
        });
      };
      $scope.removeFromList2 = function () {
        return $scope.second.list.adapter.applyUpdates(function (item, scope) {
          if (scope.$index % 2 !== 0) {
            return [];
          }
        });
      };
      idList2 = 2000;
      return $scope.addToList2 = function () {
        return $scope.second.list.adapter.applyUpdates(function (item, scope) {
          var newItem;
          newItem = void 0;
          if (scope.$index === 4) {
            newItem = {
              id: idList2,
              content: 'a new one #' + idList1
            };
            idList2++;
            return [
              item,
              newItem
            ];
          }
        });
      };
    }
  ]);


/*
 //# sourceURL=src/adapter.js
 */
