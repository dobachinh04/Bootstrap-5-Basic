window.updateController = function ($scope, $http, $location, $routeParams) {
  $scope.title = "Cập Nhật Sách";

  let apiBook = "http://localhost:3000/book";

  let id = $routeParams.id;

  $http.get(`${apiBook}/${id}`).then(function (response) {
    if (response.status == 200) {
      $scope.book = {
        bookID: response.data.bookID,
        name: response.data.name,
        type: response.data.type,
        price: response.data.price,
        quantity: response.data.quantity,
      };
    }
  });

  $scope.updateBook = function (response) {
    let check = true;

    $scope.checkForm = {
      bookID: false,
      name: false,
      type: false,
      price: false,
      quantity: false,
    };

    if (!$scope.book || !$scope.book.bookID) {
      check = false;
      $scope.checkForm.bookID = true;
    }

    if (!$scope.book || !$scope.book.name || $scope.book.name.length < 10) {
      check = false;
      $scope.checkForm.name = true;
    }

    if (!$scope.book || !$scope.book.type) {
      check = false;
      $scope.checkForm.type = true;
    }

    if (
      !$scope.book ||
      !$scope.book.price ||
      $scope.book.price <= 10000 ||
      isNaN($scope.book.quantity)
    ) {
      check = false;
      $scope.checkForm.price = true;
    }

    if (
      !$scope.book ||
      !$scope.book.quantity ||
      isNaN($scope.book.quantity) ||
      $scope.book.quantity <= 0
    ) {
      check = false;
      $scope.checkForm.quantity = true;
    }

    if (check) {
      let updateBook = {
        bookID: $scope.book.bookID,
        name: $scope.book.name,
        type: $scope.book.type,
        price: $scope.book.price,
        quantity: $scope.book.quantity,
      };

      $http.put(`${apiBook}/${id}`, updateBook).then(function (response) {
        if (response.status == 200) {
          $location.path("/Trang-Chu");
        }
      });
    }
  };
};
