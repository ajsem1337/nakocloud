async function dej_link_do_kota() {
	const response = await fetch('https://api.thecatapi.com/v1/images/search');
	const wynik = await response.json();
	return wynik[0].url;
  }
  
  async function podmien() {
	const img = document.getElementById('kot');
	img.src = await dej_link_do_kota();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
	podmien();
  
	const refreshBtn = document.getElementById('refreshBtn');
	if (refreshBtn) {
	  refreshBtn.addEventListener('click', podmien);
	}
  });
  