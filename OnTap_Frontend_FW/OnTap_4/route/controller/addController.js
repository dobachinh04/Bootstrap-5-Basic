window.addController = function ($scope, $http, $location) {
  $scope.title = "Thêm Mới Bài Đăng";

  let apiPost = "http://localhost:3000/post";

  $scope.addPost = function () {
    let check = true;

    $scope.validate = {
      tieu_de: "",
      noi_dung: "",
      tac_gia: "",
      the_loai: "",
      ngay_dang: "",
    };

    if (!$scope.post || !$scope.post.tieu_de) {
      check = false;
      $scope.validate.tieu_de = "Tiêu đề không được bỏ trống";
    }

    if (!$scope.post || !$scope.post.noi_dung) {
      check = false;
      $scope.validate.noi_dung = "Nội dung không được bỏ trống";
    }

    if (!$scope.post || !$scope.post.tac_gia) {
      check = false;
      $scope.validate.tac_gia = "Tác giả không được bỏ trống";
    }

    if (!$scope.post || !$scope.post.the_loai) {
      check = false;
      $scope.validate.the_loai = "Thể loại không được bỏ trống";
    }

    if (!$scope.post || !$scope.post.ngay_dang) {
      check = false;
      $scope.validate.ngay_dang = "Ngày đăng không được bỏ trống";
    }

    if (check) {
      let formatDate = $scope.post.ngay_dang.toISOString().split("T")[0];

      let newPost = {
        tieu_de: $scope.post.tieu_de,
        noi_dung: $scope.post.noi_dung,
        tac_gia: $scope.post.tac_gia,
        the_loai: $scope.post.the_loai,
        ngay_dang: formatDate,
      };

      $http.post(apiPost, newPost).then(function (res) {
        if (res.status == 201) {
          alert("Thêm thành công");
          $location.path("/list-post");
        }
      });
    } else {
      alert("Lỗi Thông Tin");
    }
  };
};
