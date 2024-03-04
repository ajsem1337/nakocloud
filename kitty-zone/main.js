// Get all elements with the class 'obrazek'
var obrazekElements = document.querySelectorAll('.obrazek')

// Add click event listener to each obrazek element
obrazekElements.forEach(function (obrazek) {
	obrazek.addEventListener('click', function () {
		this.classList.toggle('expanded')
	})
})
