document.addEventListener('DOMContentLoaded', () => {
	const nav = document.getElementById('global-nav')
	if (!nav) return

	const page = document.body.dataset.page || ''
	const title = document.body.dataset.navTitle || ''
	const buttons = (document.body.dataset.navButtons || '')
		.split(',')
		.filter(Boolean)

	// CASE 1: Strona główna
	if (page === 'home') {
		nav.innerHTML = title ? `<h1>${title}</h1>` : ''
		return
	}

	// CASE 2, 3, 4, 5: Podstrony
	let left = ''
	// Home zawsze po lewej na podstronach
	left += `<a href="../">&#xF0BA7; home</a>`

	// Dodatkowe przyciski (możesz rozwinąć obsługę wielu)
	if (buttons.length > 0) {
		buttons.forEach(btn => {
			if (btn === 'refreshBtn') {
				left += `<a id="refreshBtn">&#xF0450; refresh image</a>`
			}
			// Możesz dodać inne buttony: else if (btn === 'downloadAll') { ... }
		})
	}

	// h1 jeśli jest tytuł
	const h1 = title ? `<h1>${title}</h1>` : ''

	nav.innerHTML = `
	<div class="nav-left">${left}</div>
	${title ? `<h1>${title}</h1>` : '<span style="flex:1"></span>'}
`;
})
