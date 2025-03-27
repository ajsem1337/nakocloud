function toggleTheme() {
	const body = document.body;
	body.classList.toggle('light-theme');
	body.classList.toggle('dark-theme');
  
	const btn = document.getElementById('theme-toggle');
	if (body.classList.contains('light-theme')) {
	  btn.innerHTML = '&#xF186;'; // księżyc (przykładowy kod w Twoim fontcie)
	  localStorage.setItem('theme', 'light');
	} else {
	  btn.innerHTML = '&#xF522;'; // słońce
	  localStorage.setItem('theme', 'dark');
	}
  }
  
  function checkTheme() {
	const savedTheme = localStorage.getItem('theme') || 'dark';
	const body = document.body;
	if (savedTheme === 'light') {
	  body.classList.add('light-theme');
	} else {
	  body.classList.add('dark-theme');
	}
  
	const btn = document.getElementById('theme-toggle');
	if (btn) {
	  // Ustawiamy ikonę w zależności od motywu
	  if (body.classList.contains('light-theme')) {
		btn.innerHTML = '&#xF186;';
	  } else {
		btn.innerHTML = '&#xF522;';
	  }
	}
  }
  
  // Podpinamy event do przycisku dopiero gdy DOM jest gotowy
  document.addEventListener('DOMContentLoaded', () => {
	checkTheme();
	const themeToggleBtn = document.getElementById('theme-toggle');
	if (themeToggleBtn) {
	  themeToggleBtn.addEventListener('click', toggleTheme);
	}
  });
  