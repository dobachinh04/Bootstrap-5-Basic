window.addController = function ($scope, $http, $location) {
  $scope.title = "Thêm Mới Sách";

  $scope.addBook = function () {
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
      let apiBook = "http://localhost:3000/book";

      let newBook = {
        bookID: $scope.book.bookID,
        name: $scope.book.name,
        type: $scope.book.type,
        price: $scope.book.price,
        quantity: $scope.book.quantity,
      };

      // console.log(newBook);

      $http.post(apiBook, newBook).then(function (response) {
        if (response.status == 201) {
          $location.path("/Trang-Chu");
        }
      });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };
};
