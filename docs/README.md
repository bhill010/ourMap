# ourMap Proposal

## Background

ourMap aims to connect users with their environment in their current location. Users will be able to upload and drop content (photo, video, media) in their current location. Other users will be able to see other users' "dropped" content when they are passing by a given area.

We want to take advantage of the geolocation ability offered with mobile apps, similarly to how Yelp shows restaurants/businesses at location, but with user uploaded content. 

Development of the features in this app will be guided by Google Maps and Google Geocoding. 

## Functionality and MVPs

- [ ] Authentication
- [ ] Track user movements and location
- [ ] Integrate local camera to take photos and videos
- [ ] Allow users to post videos and photos
- [ ] Display content on map based on location

### Bonus Features

- [ ] Allow users to comment on posted content
- [ ] User profile page


## Wireframes
* [View Wireframes][wireframes]

[wireframes]: /docs/wireframes

## Technologies and Technical Challenges

Our application will be implemented with a Firebase and NodeJS backend, supported with a ReactNative frontend. 

For implementation of our backend:

- Cloudinary will be used for image storage
- Firebase authorization 
- NodeJS to store media content url and GPS coordinates

For implementation of our frontend:

- Our application will use the react-native-maps component that comes with ReactNative to render the map display. 
- The react-native-camera component will be used for camera implementation to allow users to post photos and videos to the map display
- The react-native-geolocation component will be used to track user location and movement.    

Primary technical challenges will be:
- Tracking user location and movement efficiently, as in deciding how often to collect user location from react-native-geolocation
- Creating communication between react-native-camera and react-native-geolocation so pictures can be created with location data
- Handling user authentication on a mobile device with a Firebase backend


## Group Members and Work Breakdown

Our group consists of three members, Brandon, John, and Scott.

Brandon will be responsible for the following:

- Creating an authentication form to sign up and login users
- Creating the Index page for media content
- Creating the form to submit photo to the backend 
- Creating the Demo website for the mobile app

John will be responsible for the following:

- Implementing react-native-maps to render map in the app
- Researching how to render map in a way that shows the user moving
- Placing media content on the map based on geolocation
- Researching how to use react-native-camera to allow users to take photos

Scott will be responsible for the following:

- Cloudinary setup 
- Setting up backend database to store, create, and delete media content information (url and GPS coordinates)
- Researching how to use react-native-geolocation to get user's location
- Assist researching how to use react-native-camera to allow users to take photos


## Implementation Timeline

### Day 1 (Monday)

Goals: 
- Complete authentication
- Project structure complete
	- Controllers, models, etc.

Scott: Set up NodeJS API to store, create, and delete GPS coordinates and url source of media content

John: Render Map onto screen

Brandon: Create authentication form to create and sign in users


### Day 2 

- Track user movements/location
	- Have a map-view complete that renders your location on the map

Scott: Get GPS coordinates of user through mobile device using react-native-geolocation

Brandon: Setup app router and routes; render home page and lay out the size and styling of the GoogleMap on home page

John: Add coordinates for the markers and make markers appear on the map

### Day 3

- Allow users to take and upload photos to Cloudinary

John and Scott: Incorporate react-native-camera to allow users to take photos
Scott: Attach GPS coordinates to uploaded photos and store in database
Brandon: Be able to submit the content and save to the backend 

### Day 4

- Display photos on map based on geolocation

Brandon: Create the index page with index components and be able to route to the index page from home page depending on routes.
John and Scott: Use GPS coordinates of photos to display items on the maps as markers

### Day 5

- Seed database and test live functionality

All: Mock up wireframes for demo page
Brandon: Create demo page 
John: Put app into an online emulator for demonstration purposes
Scott: Collect screenshots and GIFs of mobile features

### Day 6

All: Production README
Add project to App store

## Plan for getting users and reviews
- We will each share with at least 10 friends and family and ask for good reviews
- We will reach out to our App Academy classmates for reviews
