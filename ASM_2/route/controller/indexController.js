window.indexController = function ($scope, $http) {
  $scope.title = "Thư Viện Sách";

  let apiBook = "http://localhost:3000/book";

  $http.get(apiBook).then(function (response) {
    // console.log(response);

    if (response.status == 200) {
      $scope.bookList = response.data;
    }
  });

  $scope.deleteBook = function (id) {
    let confirm = window.confirm("Bạn có chắc là muốn xóa không?");
    if (confirm) {
      $http.delete(`${apiBook}/${id}`).then(function (response) {
        if (response.status == 200) {
          alert("Xóa Thành Công!");
        }
      });
    }
  };
};
