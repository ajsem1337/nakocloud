import { filtruj } from './search.js';
import { handleAnimeHover } from './image.js';
import { sort } from './sort.js';

document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('szukajka');
	if (searchInput) {
		searchInput.addEventListener('input', filtruj);
	}

	// Obsługa hover na elementach anime
	handleAnimeHover();

	// Wywołanie funkcji sortowania (jeśli potrzebne)
	sort();
});
