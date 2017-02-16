(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('store-products.json').then(function(response){
      console.log('success');
      store.products = response.data;
    },
    function(response){
      console.log(response.data);
    });
    
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
