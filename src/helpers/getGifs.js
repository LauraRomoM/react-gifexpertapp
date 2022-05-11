
export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=9rizqMI6PrXHBWFklDguXFsLRvrSaRmu&q=${encodeURI(category)}&limit=10`;	//encoreURI se encarga de los espacios y demas para evitar errores
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url	//con el ? indicamos que si vienen imagenes, mostrar la de downsized_medium
		}
	});

	return gifs;
}
