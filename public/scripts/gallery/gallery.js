(function(angular) {
	"use strict";

	angular.module("gallery").directive("gallery", function($compile) {
		return {
			restrict: "EA",
			controller: function($scope) {
				$scope.images = [];
				var visibleIndex = 0;

				this.registerImage = function (node) {
					$scope.images.push(node);
					node.hide();
				};

				this.showImage = function (index) {
					if (index === visibleIndex) {
						return;
					}

					var oldImage = $scope.images[visibleIndex];
					var newImage = $scope.images[index];

					oldImage.css({ "z-index": 10 });
					newImage.css({ "z-index": 9 });

					newImage.show();
					oldImage.fadeOut("fast");

					visibleIndex = index;
				};
			},
			link: function($scope, elem) {
				elem.addClass("gallery");

				var controls = angular.element("<ol />", { "class": "gallery-controls" });
				elem.append(controls);

				function recreateControls() {
					controls.empty();
					for (var i = 0; i < $scope.images.length; ++i) {
						var listItem = angular.element("<li data-image-link='" + i + "'></li>");
						controls.append(listItem);
					}

					$compile(controls)($scope);

					if ($scope.images.length) {
						$scope.images[0].show();
					}
				}

				$scope.$watchCollection("images", function() {
					recreateControls();
				});
			}
		};
	});

} (window.angular));