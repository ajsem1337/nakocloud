async function dej_link_do_kota() {
	const response = await fetch('https://api.thecatapi.com/v1/images/search')
	let wynik = await response.json()
	return wynik[0].url
}

async function podmien() {
	const div = document.getElementById('kot')
	div.src = await dej_link_do_kota()
}

function home() {
	document.getElementById('main').classList.replace('main--hidden', 'main')
	document.getElementById('embed').classList.replace('embed', 'embed--hidden')
	document.getElementById('embed').innerHTML = ''
}

function lista() {
	document.getElementById('main').classList.replace('main', 'main--hidden')
	document.getElementById('embed').classList.replace('embed--hidden', 'embed')
	document.getElementById('embed').innerHTML =
		'<embed src="https://nakocloud.ddns.net/lista" style="width: 100%; height: 100%;">'
}
