let data = angular.module("myApp", []);

data.controller("homeTitle", myFunction);

function myFunction($scope) {
  $scope.homeTitle = "Trang Chủ";
  console.log($scope.homeTitle);
}
