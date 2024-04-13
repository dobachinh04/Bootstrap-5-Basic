window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Cập Nhật Nhân Viên";

  let apiEmployee = "http://localhost:3000/employee";

  let id = $routeParams.id;

  $http.get(`${apiEmployee}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.employee = res.data;
      $scope.employee.ngay_sinh = new Date($scope.employee.ngay_sinh);
    }
  });

  $scope.updateEmployee = function () {
    let check = true;

    $scope.validate = {
      ho_ten: "",
      sdt: "",
      email: "",
      chuc_vu: "",
      ngay_sinh: "",
    };

    if (!$scope.employee || !$scope.employee.ho_ten) {
      check = false;
      $scope.validate.ho_ten = "Họ tên không được để trống";
    }

    if (!$scope.employee || !$scope.employee.sdt) {
      check = false;
      $scope.validate.sdt = "SĐT không được để trống";
    } else if (!$scope.employee || isNaN($scope.employee.sdt)) {
      check = false;
      $scope.validate.sdt = "SĐT không được là ký tự";
    } else if (!$scope.employee || $scope.employee.sdt.length < 5) {
      check = false;
      $scope.validate.sdt = "SĐT phải nhiều hơn 5 ký tự";
    }

    let regexEmail = /^\S+@\S+\.\S+$/;

    if (!$scope.employee || !$scope.employee.email) {
      check = false;
      $scope.validate.email = "Email không được để trống";
    } else if (!$scope.employee || !regexEmail.test($scope.employee.email)) {
      check = false;
      $scope.validate.email = "Email không đúng định dạng";
    }

    if (!$scope.employee || !$scope.employee.chuc_vu) {
      check = false;
      $scope.validate.chuc_vu = "Chức Vụ không được để trống";
    }

    if (!$scope.employee || !$scope.employee.ngay_sinh) {
      check = false;
      $scope.validate.ngay_sinh = "Ngày Sinh không được để trống";
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
          alert("Cập Nhật thành công");
          $location.path("/list-employee");
        }
      });
    } else {
      alert("Thông tin không hợp lệ");
    }
  };
};
