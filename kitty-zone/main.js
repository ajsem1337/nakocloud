async function dej_link_do_kota() {
	const response = await fetch('https://api.thecatapi.com/v1/images/search')
	let wynik = await response.json()
	return wynik[0].url
}

async function podmien() {
	const div = document.getElementById('kot')
	div.src = await dej_link_do_kota()
}
