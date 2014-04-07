app.factory("Order", function($resource) {
	return $resource("/orders/:id", null, {
		place: { method: "POST", isArray: false }
	});
});