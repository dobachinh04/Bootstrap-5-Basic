window.detailController = function ($scope, $http, $routeParams) {
  $scope.title = "Chi Tiết Nhân Viên";
  let apiEmployee = "http://localhost:3000/employee";

  let id = $routeParams.id;

  $http.get(`${apiEmployee}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.employee = res.data;
    }
  });
};
