import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBrWr4NjbW94j9Nw-K_t0ocYu2lmGXPcnc",
  authDomain: "revisedoscardata.firebaseapp.com",
  databaseURL: "https://revisedoscardata-default-rtdb.firebaseio.com",
  projectId: "revisedoscardata",
  storageBucket: "revisedoscardata.appspot.com",
  messagingSenderId: "807859127622",
  appId: "1:807859127622:web:fe3ae638caeaa6dd749147"
};

firebase.initializeApp(config);

export default firebase;

// < !--The core Firebase JS SDK is always required and must be listed first-- >

/* <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>

<!--TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
    // Your web app's Firebase configuration
  var firebaseConfig = {

    apiKey: "AIzaSyDmNOiqYc7EeYbm3FaZ0VGgu3u9em6stws",
    authDomain: "oscarfinder-a557c.firebaseapp.com",
    databaseURL: "https://oscarfinder-a557c-default-rtdb.firebaseio.com",
    projectId: "oscarfinder-a557c",
    storageBucket: "oscarfinder-a557c.appspot.com",
    messagingSenderId: "293951412918",
    appId: "1:293951412918:web:74bc9e2b7c9892b7f26417"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script> */
