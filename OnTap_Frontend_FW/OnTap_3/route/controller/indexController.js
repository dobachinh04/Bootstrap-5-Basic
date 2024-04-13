window.indexController = function ($scope, $http) {
  $scope.title = "Danh Sách Nhân Viên";

  let apiEmployee = "http://localhost:3000/employee";

  $http.get(apiEmployee).then(function (res) {
    if (res.status == 200) {
      $scope.employeeList = res.data;
    }
  });

  $scope.deleteEmployee = function (id) {
    let confirm = window.confirm("Bạn có muốn xóa không?");

    if (confirm) {
      $http.delete(`${apiEmployee}/${id}`).then(function (res) {
        if (res.status == 200) {
          alert("Xóa Thành Công");
        }
      });
    }
  };
};
