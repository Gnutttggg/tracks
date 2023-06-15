
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAtnvURUGMPryY7KJWc6i2YVKbSs5r6EhM",
  authDomain: "trackrecords-3a228.firebaseapp.com",
  projectId: "trackrecords-3a228",
  storageBucket: "trackrecords-3a228.appspot.com",
  messagingSenderId: "267445828891",
  appId: "1:267445828891:web:db04bbca72d8efd85227be",
  measurementId: "G-ZXG9GRGNVE"
    };


    
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
  const database = firebase.database();
const storage = firebase.storage();
const storageRef = storage.ref();



function uploadAudioFile(file) {
  const audioRef = storageRef.child(`audio/${file.name}`);
  return audioRef.put(file);
}

function saveTrackInfo(trackData) {
  const trackRef = database.ref('tracks').push();
  return trackRef.set(trackData)
    .then(() => trackRef.key);
}


function fetchTrackData() {
  const database = firebase.database();
  const trackRef = database.ref('tracks');

  return trackRef.once('value')
    .then(snapshot => snapshot.val())
    .catch(error => {
      console.error('Error fetching track data:', error);
      throw error;
    });
}



function retrieveTrackInfo(trackId) {
  return new Promise((resolve, reject) => {
    // Assuming you have initialized Firebase and have a reference to your database
    const trackRef = firebase.database().ref('tracks/' + trackId);
    
    trackRef.once('value')
      .then((snapshot) => {
        const trackData = snapshot.val();
        resolve(trackData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
