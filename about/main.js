// script.js
const footerTexts = [
	'Made with blood, sweat, and Ctrl+Z. 💀',
	'Crafted with pain, late nights, and way too much effort.',
	'Built with tears of frustration and the sacrifice of my sanity.',
	'Forged in the fires of chaos and polished with desperation.',
	'Created with sleepless nights, broken dreams, and sheer stubbornness.',
	'Developed with minimal hope and maximum suffering.',
	'Pieced together with blood, broken code, and a sprinkle of regret.',
	'Handcrafted with existential dread and questionable life choices.',
]

const randomText = footerTexts[Math.floor(Math.random() * footerTexts.length)]
document.getElementById('footer-text').innerText = randomText
