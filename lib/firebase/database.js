import * as firebase from 'firebase';

class Database {

    static setPhotoInformation(url, latitude, longitude, comment) {

        let photoPath = "/photos";

        return firebase.database().ref(photoPath).push({
            url,
            latitude,
            longitude,
            comment
        });

    }


}

export default Database;
