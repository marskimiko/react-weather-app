// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': '85fcfc0ceamsh2358fa20d704feep128e18jsn1acf83d130b5',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

// try {
// 	const response = await fetch(GEO_API_URL, geoApiOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }