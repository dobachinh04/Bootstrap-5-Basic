window.addController = function ($scope, $http, $location) {
  $scope.title = "Thêm Mới Người Yêu";

  let apiNguoiYeu = "http://localhost:3000/nguoiYeu";

  let newNguoiYeu = {
    hoTen: $scope.nguoiYeu.hoTen,
    gioiTinh: $scope.nguoiYeu.gioiTinh,
    namSinh: $scope.nguoiYeu.namSinh,
    queQuan: $scope.nguoiYeu.queQuan,
    SDT: $scope.nguoiYeu.SDT,
  };

  $http.post(apiNguoiYeu, newNguoiYeu).then(function (response) {
    if (response.status == 201) {
      $location.path = "/Trang-Chu";
    }
  });
};
