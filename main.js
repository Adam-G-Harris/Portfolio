function svgNameAnimation() {
	anime({
		targets: '#svgContainer .lines path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 500,
		delay: function (el, i) {
			return i * 250;
		},
		complete: function () {
			dotI();
		}
	});
}

/*function dotI() {
	anime({
		targets: '.nameI',
		translateX: -10,
		duration: 1000,
		elasticity: 300,
	});
}*/

svgNameAnimation();