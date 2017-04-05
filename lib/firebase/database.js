import * as firebase from 'firebase';

class Database {

    static setPhotoInformation(url, latitude, longitude) {

        let photoPath = "/photos";

        return firebase.database().ref(photoPath).push({
            url,
            latitude,
            longitude,
        });

    }

    static getPhotoInformation() {

        let photoPath = "/photos";

        return firebase.database().getReference(photoPath);
    }


}

export default Database;