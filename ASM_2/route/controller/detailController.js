window.detailController = function ($scope, $http, $routeParams) {
  $scope.title = "Chi Tiết Sách";

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
};
