app.service("shoppingCart", function() {
	var cart = {};

	this.addProduct = function(product) {
		if (!cart[product.id]) {
			cart[product.id] = { product: product, quantity: 1 };
		} else {
			cart[product.id].quantity += 1;
		}
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
})