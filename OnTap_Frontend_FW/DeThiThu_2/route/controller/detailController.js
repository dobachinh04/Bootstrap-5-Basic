window.detailController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Chi Tiết Tin Tức";

  let apiPost = "http://localhost:3000/post";

  let id = $routeParams.id;

  $http.get(`${apiPost}/${id}`).then(function (res) {
    if (res.status == 200) {
      $scope.post = res.data;
      $scope.post.ngay_dang = new Date($scope.post.ngay_dang);
    }
  });
};
