
(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		
		this.products = gems;

	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
		{
			name: 'Gema',
			price: 2.95,
			description: 'This is a gem!',
			canPurchase: false,
			soldOut: false,
			imgSrc: 'http://stemgemsbook.com/wp-content/uploads/2016/03/pink-gem.png',
			reviews: []
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Test',
			canPurchase: true,
			soldOut: false,
			imgSrc: 'http://stemgemsbook.com/wp-content/uploads/2016/03/blue-gem.png',
			reviews: []

		}
	];

})();


