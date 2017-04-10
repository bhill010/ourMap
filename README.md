# ourMap

[Demo Page][demopage]

[demopage]: https://bhill010.github.io/ourMapDemo/

ourMap aims to connect users with their environment in their current location. Users are able to upload and drop photos in their current location for other users to see when they are in the area. 

This mobile application was built with the following technologies:

- React Native (for mobile apps framework)
- Redux (for routing and authentication)
- Xcode(for mobile app development)
- Firebase (for storing geolocation and urls of photos)
- Cloudinary (for photo storage)

## Features and Implementation

### Authentication with Firebase and Redux


### Show Locations with "Dropped" Photos


### Ability to Capture and Share Photos

From the Map page, users are able to go to the Camera view and take a picture from their phone. After taking a picture, they can leave a short comment with the photo for other users to see. Upon confirmation of their submission, the `watchId` responsible for locating the user's position while using the app (`navigator.geolocation.watchPosition`) is cleared so that we can get the user's position when their submission is confirmed. The user's current coordinates, the user's comment on the photo, and the photo's URL from Cloudinary are then sent to our Firebase realtime database for storage. The user is then taken back to the Map page, and the page is refreshed so that the app can continue to track the user's location.

```javascript
handleSubmit(){
  navigator.geolocation.clearWatch(this.props.watchId);
    navigator.geolocation.getCurrentPosition (
	  (position) => {
		let latitude = position.coords.latitude;
		let longitude = position.coords.longitude;
		let coordinates = {latitude, longitude};
		Database.setPhotoInformation(this.state.photoUrl, latitude, longitude, this.state.comment);
	  }
    );
  Actions.pop({popNum: 2, refresh: {}});
}
```

## Future Direction

### User Profile
Users will have their own profile page where they can upload and change their profile picture, as well as view the photos and locations of the photos they have taken.

### Ability to Add Comments to Other Photos
Users will be able to interact with other users through leaving their own comments on photos that other users have dropped on the map.

### Video capabilities
Users will be able to upload videos to the map, in addition to photos.


