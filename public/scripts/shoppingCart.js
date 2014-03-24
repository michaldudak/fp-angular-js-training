app.service("shoppingCart", function($rootScope) {
	var cart = angular.fromJson(localStorage.getItem("cart") || "{}");

	this.addProduct = function(product) {
		if (!cart[product.id]) {
			cart[product.id] = { product: product, quantity: 1 };
		} else {
			cart[product.id].quantity += 1;
		}
		
		localStorage.setItem("cart", angular.toJson(cart));
		$rootScope.$broadcast("cartContentsChanged");
	};

	this.removeAll = function() {
		cart = {};
		localStorage.setItem("cart", angular.toJson(cart));
		$rootScope.$broadcast("cartContentsChanged");
	};

	this.getProducts = function() {
		var contents = [];
		
		for (var id in cart) {
			if (cart.hasOwnProperty(id)) {
				contents.push(cart[id]);
			}
		}

		return contents;
	};
	
	this.getProductsForOrder = function() {
		var contents = [];

		for (var id in cart) {
			if (cart.hasOwnProperty(id)) {
				contents.push({
					productId: id,
					quantity: cart[id].quantity
				});
			}
		}
	};

	this.getItemCount = function() {
		var count = 0;
		for (var id in cart) {
			if (cart.hasOwnProperty(id)) {
				count += cart[id].quantity;
			}
		}

		return count;
	};
});