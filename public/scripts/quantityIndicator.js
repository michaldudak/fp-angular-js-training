app.directive("quantityIndicator", function() {
	return {
		template: "<div class='quantityIndicator'><div class='ratio'></div></div>",
		link: function($scope, element, attrs) {
			var fill = element.find(".ratio");
			attrs.$observe("value", function() {
				var maxValue = +(attrs.maxValue || 1);
				var value = +attrs.value;
				var ratio;
				if (maxValue <= value) {
					ratio = 1;
				} else {
					ratio = value / maxValue;
				}

				ratio = ratio * 100 + "%";


				fill.css({ width: ratio });
			});
		}
    };
});