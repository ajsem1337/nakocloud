document.addEventListener('DOMContentLoaded', () => {
	// Tworzymy overlay raz
	const overlay = document.createElement('div')
	overlay.id = 'img-overlay'
	overlay.style = `
		display: none;
		position: fixed;
		z-index: 10000;
		inset: 0;
		background: rgba(0,0,0,0.94);
		align-items: center;
		justify-content: center;
	`
	overlay.innerHTML = `<img id="overlay-img" style="max-width:96vw;max-height:94vh;border-radius:14px;box-shadow:0 6px 32px #000;" alt="preview" />`
	document.body.appendChild(overlay)

	// Klik w obrazek galerii = powiększ
	document.querySelectorAll('.skin-image').forEach(img => {
		img.style.cursor = 'zoom-in'
		img.addEventListener('click', () => {
			document.getElementById('overlay-img').src = img.src
			overlay.style.display = 'flex'
		})
	})

	// Zamknij po kliknięciu/tapnięciu w overlay
	overlay.addEventListener('click', () => {
		overlay.style.display = 'none'
		document.getElementById('overlay-img').src = ''
	})

	// (opcjonalnie) Zamknij Esc
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') overlay.style.display = 'none'
	})
})
