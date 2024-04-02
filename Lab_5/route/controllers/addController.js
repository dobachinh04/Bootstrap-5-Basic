window.addController = function ($scope, $http, $location) {
  $scope.title = "Thêm Mới Người Yêu";

  $scope.addController = function () {
    let apiNguoiYeu = "http://localhost:3000/nguoiYeu";

    let check = true;

    $scope.checkForm = {
      hoTen: false,
      gioiTinh: false,
      namSinh: false,
      queQuan: false,
      SDT: false,
    };

    if (!$scope.nguoiYeu || !$scope.nguoiYeu.hoTen) {
      check = false;
      $scope.checkForm.hoTen = true;
    }

    if (!$scope.nguoiYeu || !$scope.nguoiYeu.gioiTinh) {
      check = false;
      $scope.checkForm.gioiTinh = true;
    }

    if (!$scope.nguoiYeu || !$scope.nguoiYeu.namSinh) {
      check = false;
      $scope.checkForm.namSinh = true;
    }

    if (!$scope.nguoiYeu || !$scope.nguoiYeu.queQuan) {
      check = false;
      $scope.checkForm.queQuan = true;
    }

    if (!$scope.nguoiYeu || !$scope.nguoiYeu.SDT) {
      check = false;
      $scope.checkForm.SDT = true;
    }

    if (check) {
      let newNguoiYeu = {
        hoTen: $scope.nguoiYeu.hoTen,
        gioiTinh: $scope.nguoiYeu.gioiTinh,
        namSinh: $scope.nguoiYeu.namSinh,
        queQuan: $scope.nguoiYeu.queQuan,
        SDT: $scope.nguoiYeu.SDT,
      };

      $http.post(apiNguoiYeu, newNguoiYeu).then(function (response) {
        if (response.status == 201) {
          $location.path("/Trang-Chu");
        }
      });
    } else {
      alert("Bạn cần nhập đầy đủ thông tin!");
    }
  };
};
