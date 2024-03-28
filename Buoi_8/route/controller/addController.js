window.addStudent = function ($scope, $http, $location) {
  $scope.title = "Thêm Mới Sinh Viên";

  $scope.addStudent = function () {
    let apiStudent = "http://localhost:3000/students";

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
  };
};
