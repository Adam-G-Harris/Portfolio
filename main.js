var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

/*const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync('Fonts/Avenir/Avenir-Roman-12.ttf');

const attributes = {
	fill: 'none',
	stroke: 'black'
};
const options = {
	x: 0,
	y: 0,
	fontSize: 72,
	anchor: 'top',
	attributes: attributes
};

const svg = textToSVG.getD('s', options);

console.log(svg);*/