window.listStudentController = function ($scope, $http) {
  $scope.title = "Danh Sách Sinh Viên";

  // $scope.listStudent = [
  //   {
  //     name: "Do Ba Chinh",
  //     studentID: "PH32744",
  //     from: "Ha Noi",
  //     gender: "1",
  //   },
  // ];

  let apiStudent = "http://localhost:3000/students";

  // Sử dụng HTTP để gọi phương thức truy cập
  $http.get(apiStudent).then(function (response) {
    console.log(response);
    if (response.status == 200) {
      $scope.listStudent = response.data;
    }
  });

  $scope.xoaSinhVien = function (idSinhVien) {
    let confirm = window.confirm("Bạn có chắc là muốn xóa không?");
    if (confirm) {
      $http.delete(`${apiStudent}/${idSinhVien}`).then(function (response) {
        if (response.status == 200) {
          alert("Xóa thành công!");
        }
      });
    }
  };
};
