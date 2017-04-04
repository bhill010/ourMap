import * as firebase from 'firebase';

class Database {

    static setPhotoInformation(url, latitude, longitude) {

        let photoPath = "/john";

        return firebase.database().ref(photoPath).set({
            url,
            latitude,
            longitude,
        });

    }


}

export default Database;