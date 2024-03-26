window.bookListController = function ($scope, $http) {
  $scope.title = "Thư Viện Sách";
  $scope.soLuong = "";
  $scope.tuKhoa = "";

  let apiBook = "http://localhost:3000/book";

  $http.get(apiBook).then(function (response) {
    console.log(response);
    if (response.status == 200) {
      $scope.bookList = response.data;
    }
  });

  $scope.deleteBook = function (idBook) {
    let confirm = window.confirm("Bạn có muốn xóa không");
    if (confirm) {
      $http.delete(`${apiBook}/${idBook}`).then(function (response) {
        if (response.status == 200) {
          alert("Xóa Thành Công!");
        }
      });
    }
  };
};
