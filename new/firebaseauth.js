var config = {
      apiKey: "AIzaSyAVVGvYuwh2KV298DXSmaNQ2Ohi2KrUvds",
      authDomain: "aiop-data.firebaseapp.com",
      databaseURL: "https://aiop-data.firebaseio.com",
      projectId: "aiop-data",
      storageBucket: "aiop-data.appspot.com",
      messagingSenderId: "905713835388"
    };
    firebase.initializeApp(config);
    
    //var mtitle = document.getElementById('title');
    /*var dbRef = firebase.database().ref().child('text');
    dbRef.on('value',snap => mtitle.innerText = snap.val());*/
    //var dbRef = firebase.database().ref().child('text').once('value');
firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log(isAnonymous +" / " + uid);
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});