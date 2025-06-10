function loadCat() {
	const img = document.getElementById('kot')
	if (!img) return
	img.src = '' // czyść stare
	img.alt = 'loading...'
	// Przykładowe API kotów (TheCatAPI)
	fetch('/catapi/')
		.then(r => r.json())
		.then(data => {
			if (data && data[0] && data[0].url) {
				img.src = data[0].url
				img.alt = 'random kitty'
			} else {
				img.alt = 'could not load cat'
			}
		})
		.catch(() => {
			img.alt = 'error loading cat'
		})
}

document.addEventListener('DOMContentLoaded', () => {
	loadCat()
	const refreshBtn = document.getElementById('refreshBtn')
	if (refreshBtn) {
		refreshBtn.addEventListener('click', e => {
			e.preventDefault()
			loadCat()
		})
	}
})
