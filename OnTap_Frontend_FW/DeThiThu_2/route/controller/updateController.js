window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Cập Nhật Tin Tức";

  let apiPost = "http://localhost:3000/post";

  let id = $routeParams.id;

  $http.get(`${apiPost}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.post = res.data;
      $scope.post.ngay_dang = new Date($scope.post.ngay_dang);
    }
  });

  $scope.updatePost = function () {
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
      // let formatDate = $scope.post.ngay_dang.toISOString().split("T")[0];
      let formattedDate = new Date($scope.post.ngay_dang).toLocaleDateString();

      let updatePost = {
        tieu_de: $scope.post.tieu_de,
        noi_dung: $scope.post.noi_dung,
        tac_gia: $scope.post.tac_gia,
        the_loai: $scope.post.the_loai,
        ngay_dang: formattedDate,
      };

      $http.put(`${apiPost}/${id}`, updatePost).then(function (res) {
        if (res.status == 200) {
          alert("Cập nhật thành công");
          $location.path("/list-post");
        }
      });
    } else {
      alert("Thông tin không đúng định dạng yêu cầu");
    }
  };
};
