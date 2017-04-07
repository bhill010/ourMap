export const getCurrentPosition = () => {
	let currentCoordinates = {};
	navigator.geolocation.getCurrentPosition (
      (position) => {
        currentCoordinates =  {latitude: position.coords.latitude, longitude: position.coords.longitude};
      }
	);
	return currentCoordinates;
};