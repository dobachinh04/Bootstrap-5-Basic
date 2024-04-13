window.indexController = function ($scope, $http) {
  $scope.title = "Danh Sách Bài Đăng";

  let apiPost = "http://localhost:3000/post";

  $http.get(apiPost).then(function (res) {
    if (res.status == 200) {
      $scope.postList = res.data;
    }
  });

  $scope.deletePost = function (id) {
    let confirm = window.confirm("Bạn có muốn xóa không?");

    if (confirm) {
      $http.delete(`${apiPost}/${id}`).then(function (res) {
        if (res.status == 200) {
          alert("Xóa thành công");
        }
      });
    }
  };
};
