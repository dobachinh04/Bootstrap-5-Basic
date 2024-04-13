window.detailController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Chi Tiết Nhân Viên";

  let apiEmployee = "http://localhost:3000/employee";

  let id = $routeParams.id;

  $http.get(`${apiEmployee}/${id}`).then(function (res) {
    $scope.employee = res.data;
    $scope.employee.ngay_sinh = new Date($scope.employee.ngay_sinh);
  });
};
