export function handleAnimeHover() {
	const animeItems = document.querySelectorAll('.anime-item');
	const coverImage = document.getElementById('coverImage');

	animeItems.forEach(item => {
		item.addEventListener('mouseenter', async function () {
			const title = item.getAttribute('data-title');
			
			const query = `
			query ($search: String) {
				Media(search: $search, type: ANIME) {
					coverImage {
						large
					}
				}
			}
			`;

			const variables = {
				search: title
			};

			const url = 'http://localhost/nakocloud/lista/proxy.php'; // Ścieżka do proxy PHP na Twoim lokalnym serwerze

			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({
					query: query,
					variables: variables
				})
			};

			const response = await fetch(url, options);
			const data = await response.json();

			if (data && data.data && data.data.Media && data.data.Media.coverImage) {
				const imageUrl = data.data.Media.coverImage.large;
				coverImage.src = imageUrl;
				coverImage.style.display = 'block';

				coverImage.style.left = item.getBoundingClientRect().left + 'px';
				coverImage.style.top = item.getBoundingClientRect().bottom + 'px';
			}
		});

		item.addEventListener('mouseleave', function () {
			coverImage.style.display = 'none';
		});
	});
}
