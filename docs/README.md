# ourMap Proposal

## Background

ourMap aims to connect users with their environment in their current location. Users will be able to upload and drop content (photo, video, media) in their current location. Other users will be able to see other users' "dropped" content when they are passing by a given area.

We want to take advantage of the geolocation ability offered with mobile apps, similarly to how Yelp shows restaurants/businesses at location, but with user uploaded content. To seed our database with relevant user content, we will look into pulling data from Twitter.

Development of the features in this app will be guided by Google Maps, Google Geocoding, and Twitter content. 

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

## Technologies and Technical Challenges

- [ ] Implementing mobile authentication
- [ ] Overlaying user content to be in line with Google Map display
- [ ] Retrieving location information for use


## Group Members and Work Breakdown

Our group consists of three members, Brandon, John, and Scott.

#### ReactNative
##### Brandon
 - UI design
 - User interface, user experience, app functionality
#### APIs
##### John
 - Connect with google API
 - Google Maps
 - Google Geolocation
 - API call limit issue
 - How to process where objects are
#### Auth
##### Scott
 - Input information and send stuff
 - Auth0
 - Storing data
 - Sending geolocation data to John


## Implementation Timeline

### Day 1 (Monday)

Goals: 
- Complete authentication
- Project structure complete
	- Controllers, models, etc.

Scott: Set up username and password authentication with JWTs using a NodeJS API

Scott: Set up NodeJS API to store, create, and delete GPS coordinates and url source of media content

John: Render Map onto screen

Brandon: Render login form


### Day 2 

- Track user movements/location
	- Have a map-view complete that renders your location on the map

Scott: Get GPS coordinates of user through mobile device 

Brandon: Render home page and yay out the size and styling of the GoogleMap on home page

John: Add coordinates for the markers and make markers appear on the Google Map

### Day 3, 4, 5

- Allow users to upload videos and photos
- Create “submit content” form
- Display items based on geo-location
- Get camera to talk to our application

John: Get camera to talk to application, check out react-native-camera

Brandon: Render Index and Upload Pages; Render “submit content” form for users to submit pictures and videos; Form submission will go to backend; Display submitted content on the user’s map when it comes back from the backend

Scott: Add coordinates to received picture/video information

### Day 6

- Seed database and test live functionality

Brandon: Create demo page for app and use CSS styling

John: Upload to emulator

All: Mock up wireframes for demo page

Scott: Collect screenshots and make GIFs of mobile features

### Day 7

- Production README

## Plan for getting users and reviews
- We will each share with at least 10 friends and family and ask for good reviews
- We will reach out to our App Academy classmates for reviews
