//37.785834
//-122.406417

export const getPhotoURLs = (minLatitude, maxLatitude, minLongitude, maxLongitude) => {
	fetch(`https://ourmap-64a0f.firebaseio.com/photos.json?orderBy="latitude"&startAt=${minLatitude}&endAt=${maxLatitude}`, {method: "GET"})
	.then((response) => response.json())
	.then((responseData) => {
		const photosIndex = [];
		Object.values(responseData).forEach( photo => {
			if (photo.longitude > minLongitude && photo.longitude < maxLongitude ) {
				photosIndex.push(photo);
			}
		});
		console.log(photosIndex.map(photo => photo.url));
		
	});
};