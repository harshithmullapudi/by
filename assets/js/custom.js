
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-QprhdPwHRvth9cgE-Cg3G9Lz5Cnxnbw",
  authDomain: "notifications-fc34f.firebaseapp.com",
  databaseURL: "https://notifications-fc34f.firebaseio.com",
  projectId: "notifications-fc34f",
  storageBucket: "notifications-fc34f.appspot.com",
  messagingSenderId: "391602315401"
};
firebase.initializeApp(config);

(function($) {
  wow = new WOW({
    mobile: true
  });
  wow.init();
});
