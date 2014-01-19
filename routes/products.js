
/*
 * GET product list.
 */

exports.getAll = function(req, res) {

	var products = [{
		id: 1,
		title: "Dehydrated water",
		description: "Blah blah",
		image: "1.gif",
		quantity: 10,
		price: 29.99
	}, {
		id: 2,
		title: "Non-alcoholic vodka",
		description: "Blah blah",
		image: "2.jpg",
		quantity: 1000,
		price: 19.95
	}, {
		id: 3,
		title: "Fresh air in a jar",
		description: "Blah blah",
		image: "3.png",
		quantity: 0,
		price: 190
	}];
	
	res.send(products);
};