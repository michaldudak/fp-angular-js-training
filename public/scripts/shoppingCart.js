app.service("shoppingCart", function($rootScope) {
	var cart = {};

	this.addProduct = function(product) {
		if (!cart[product.id]) {
			cart[product.id] = { product: product, quantity: 1 };
		} else {
			cart[product.id].quantity += 1;
		}

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

	this.getItemCount = function() {
		var count = 0;
		for (var id in cart) {
			if (cart.hasOwnProperty(id)) {
				count += cart[id].quantity;
			}
		}

		return count;
	};
})