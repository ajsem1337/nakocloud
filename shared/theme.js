// 1. Funkcje do przełączania motywu
function toggleTheme() {
	const body = document.body
	body.classList.toggle('light-theme')
	body.classList.toggle('dark-theme')

	const btn = document.getElementById('theme-toggle')
	if (body.classList.contains('light-theme')) {
		btn.innerHTML = '&#xF186;' // księżyc
		localStorage.setItem('theme', 'light')
	} else {
		btn.innerHTML = '&#xF522;' // słońce
		localStorage.setItem('theme', 'dark')
	}
}

function checkTheme() {
	const savedTheme = localStorage.getItem('theme') || 'dark'
	const body = document.body
	body.classList.remove('light-theme', 'dark-theme') // czyszczenie
	if (savedTheme === 'light') {
		body.classList.add('light-theme')
	} else {
		body.classList.add('dark-theme')
	}

	const btn = document.getElementById('theme-toggle')
	if (btn) {
		btn.innerHTML = body.classList.contains('light-theme')
			? '&#xF186;'
			: '&#xF522;'
	}
}

// 2. Teksty do stopki
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

// 3. Globalne komponenty: floating button i stopka
document.addEventListener('DOMContentLoaded', () => {
	// a) Floating theme button (tworzenie jeśli nie istnieje)
	if (!document.getElementById('theme-toggle')) {
		const themeBtn = document.createElement('button')
		themeBtn.className = 'theme-button floating'
		themeBtn.id = 'theme-toggle'
		themeBtn.type = 'button'
		themeBtn.innerHTML = '&#xF522;'
		document.body.appendChild(themeBtn)
	}

	// b) Ustaw motyw i event
	checkTheme()
	const themeToggleBtn = document.getElementById('theme-toggle')
	if (themeToggleBtn) {
		themeToggleBtn.addEventListener('click', toggleTheme)
	}

	// c) Stopka (tworzenie jeśli nie istnieje)
	if (!document.querySelector('.global-footer')) {
		const footer = document.createElement('footer')
		footer.classList.add('global-footer')
		footer.innerHTML = `
			<p id="footer-text"></p>
			<p>
			Contact:
			<a href="mailto:9yvzsrpli@mozmail.com">9yvzsrpli@mozmail.com</a> |
			Discord: <span>ajsem1337</span>
			</p>
		`
		document.body.appendChild(footer)

		// d) Wylosowany tekst
		const randomText =
			footerTexts[Math.floor(Math.random() * footerTexts.length)]
		const footerTextEl = document.getElementById('footer-text')
		if (footerTextEl) {
			footerTextEl.innerText = randomText
		}
	}
})
