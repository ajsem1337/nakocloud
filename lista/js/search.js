export function filtruj() {
	const filtr = document.getElementById('szukajka').value.toUpperCase();
	const trs = document.getElementById('dane').getElementsByTagName('tr');
	for (let i = 0; i < trs.length; i++) {
		const td = trs[i].getElementsByTagName('td')[0];
		if (td) {
			let txtValue = td.innerHTML || td.textContent;
			if (txtValue.toUpperCase().indexOf(filtr) > -1) {
				trs[i].style.display = '';
			} else {
				trs[i].style.display = 'none';
			}
		}
	}
}
