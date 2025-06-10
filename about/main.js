document.addEventListener('DOMContentLoaded', () => {
	const toggles = document.querySelectorAll('.pc-toggle')
	const pc1 = document.getElementById('pc1-specs')
	const pc2 = document.getElementById('pc2-specs')

	toggles.forEach(toggle => {
		toggle.addEventListener('click', () => {
			// Usuń klasę .active z obu toggle'ów, potem dodaj tylko do klikniętego
			toggles.forEach(t => t.classList.remove('active'))
			toggle.classList.add('active')

			// Pokaż/ukryj odpowiednie specyfikacje
			if (toggle.dataset.pc === 'pc1') {
				pc1.style.display = 'block'
				pc2.style.display = 'none'
			} else {
				pc1.style.display = 'none'
				pc2.style.display = 'block'
			}
		})
	})
})
