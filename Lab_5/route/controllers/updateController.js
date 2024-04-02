window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Cập Nhật Người Yêu";

  let apiNguoiYeu = "http://localhost:3000/nguoiYeu";

  let id = $routeParams.id;

  $http.get(`${apiNguoiYeu}/${id}`).then(function (response) {
    if (response.status == 200) {
      $scope.nguoiYeu = {
        hoTen: response.data.hoTen,
        gioiTinh: response.data.gioiTinh,
        namSinh: response.data.namSinh,
        queQuan: response.data.queQuan,
        SDT: response.data.SDT,
      };
    }
  });

  $scope.updateController = function () {
    let updateNguoiYeu = {
      hoTen: $scope.nguoiYeu.hoTen,
      gioiTinh: $scope.nguoiYeu.gioiTinh,
      namSinh: $scope.nguoiYeu.namSinh,
      queQuan: $scope.nguoiYeu.queQuan,
      SDT: $scope.nguoiYeu.SDT,
    };

    $http.put(`${apiNguoiYeu}/${id}`, updateNguoiYeu).then(function (response) {
      if (response.status == 200) {
        $location.path("/Trang-Chu");
      }
    });
  };
};
