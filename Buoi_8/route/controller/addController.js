window.addStudent = function ($scope, $http, $location) {
  $scope.title = "Thêm Mới Sinh Viên";

  $scope.addStudent = function () {
    let apiStudent = "http://localhost:3000/students";

    // Khởi tạo biến validate
    let check = true;

    // Khởi tạo scopt check chi tiết các trường dữ liệu
    $scope.checkform = {
      name: false,
      studentID: false,
      from: false,
      gender: false,
    };

    // Kiểm tra từng trường dữ liệu
    if (!$scope.student || !$scope.student.name) {
      check = false;
      $scope.checkform.name = true;
    }

    if (!$scope.student || !$scope.student.studentID) {
      check = false;
      $scope.checkform.studentID = true;
    }

    if (!$scope.student || !$scope.student.from) {
      check = false;
      $scope.checkform.from = true;
    }

    if (!$scope.student || !$scope.student.gender) {
      check = false;
      $scope.checkform.gender = true;
    }

    if (check) {
      // Tạo một obj chứa dữ liệu gửi lên
      let newStudent = {
        name: $scope.student.name,
        studentID: $scope.student.studentID,
        from: $scope.student.from,
        gender: $scope.student.gender,
      };

      // console.log(newStudent);

      $http.post(apiStudent, newStudent).then(function (response) {
        if (response.status == 201) {
          $location.path("/Trang-Chu");
        }
      });
    } else {
      alert("Bạn cần nhập đầy đủ thông tin");
    }
  };
};
