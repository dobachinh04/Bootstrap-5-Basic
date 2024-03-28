window.detailStudent = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Chi Tiết Sinh Viên";

  let apiStudent = "http://localhost:3000/students";

  //   Lấy id của sinh viên từ trên URL xuống
  let StudentID = $routeParams.id;
  //    console.log(StudentID);

  //    Lấy thông tin chi tiết của sinh viên từ id
  $http.get(`${apiStudent}/${StudentID}`).then(function (response) {
    if (response.status == 200) {
      $scope.student = {
        name: response.data.name,
        studentID: response.data.studentID,
        from: response.data.from,
        gender: response.data.gender,
      };
    }
  });
};
