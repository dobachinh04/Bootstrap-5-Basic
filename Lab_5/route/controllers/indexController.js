window.indexController = function ($scope, $http) {
  $scope.title = "Danh Sách Người Yêu";

  let apiNguoiYeu = "http://localhost:3000/nguoiYeu";
  $http.get(apiNguoiYeu).then(function (response) {
    // console.log(response);
    if (response.status == 200) {
      $scope.listNguoiYeu = response.data;
    }
  });

  $scope.xoaNguoiYeu = function (idNguoiYeu) {
    let confirm = window.confirm("Bạn có chắc là muốn xóa không?");
    if (confirm) {
      $http.delete(`${apiNguoiYeu}/${idNguoiYeu}`).then(function (response) {
        if (response.status == 200) {
          alert("Xóa Thành Công!");
        }
      });
    }
  };
};
