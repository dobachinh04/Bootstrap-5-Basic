window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Cập Nhật Nhân Viên";
  let apiEmployee = "http://localhost:3000/employee";

  let id = $routeParams.id;

  $http.get(`${apiEmployee}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.employee = res.data;
      $scope.employee.ngay_sinh = new Date(res.data.ngay_sinh);
    }
  });

  $scope.updateEmployee = function () {
    let apiEmployee = "http://localhost:3000/employee";

    let check = true;

    $scope.validate = {
      ho_ten: "",
      sdt: "",
      email: "",
      chuc_vu: "",
      ngay_sinh: "",
    };

    regexEmail = /^\S+@\S+\.\S+$/;

    if (!$scope.employee || !$scope.employee.ho_ten) {
      check = false;
      $scope.validate.ho_ten = "Họ Tên không được bỏ trống";
    }

    if (!$scope.employee || !$scope.employee.sdt) {
      check = false;
      $scope.validate.sdt = "Số Điện Thoại không được bỏ trống";
    } else if (!$scope.employee || isNaN($scope.employee.sdt)) {
      check = false;
      $scope.validate.sdt = "Số Điện Thoại phải là số";
    }

    if (!$scope.employee || !$scope.employee.email) {
      check = false;
      $scope.validate.email = "Email không được bỏ trống";
    } else if (!$scope.employee || !regexEmail.test($scope.employee.email)) {
      check = false;
      $scope.validate.email = "Email phải đúng định dạng";
    }

    if (!$scope.employee || !$scope.employee.chuc_vu) {
      check = false;
      $scope.validate.chuc_vu = "Chức Vụ không được bỏ trống";
    }

    if (!$scope.employee || !$scope.employee.ngay_sinh) {
      check = false;
      $scope.validate.ngay_sinh = "Ngày Sinh không được bỏ trống";
    }

    if (check) {
      let formatDate = $scope.employee.ngay_sinh.toISOString().split("T")[0];
      let updateEmployee = {
        ho_ten: $scope.employee.ho_ten,
        sdt: $scope.employee.sdt,
        email: $scope.employee.email,
        chuc_vu: $scope.employee.chuc_vu,
        ngay_sinh: formatDate,
      };

      $http.put(`${apiEmployee}/${id}`, updateEmployee).then(function (res) {
        if (res.status == 200) {
          alert("Cập Nhật Thành Công!");
          $location.path("/employee/list");
        }
      });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };
};
