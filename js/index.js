window.onload = () => {

  
  var firebaseConfig = {
    apiKey: "AIzaSyD-WOE8HINVQft5U9vBg_KsILTYXxUYL8g",
    authDomain: "chatapp-20702.firebaseapp.com",
    databaseURL: "https://chatapp-20702.firebaseio.com",
    projectId: "chatapp-20702",
    storageBucket: "chatapp-20702.appspot.com",
    messagingSenderId: "1002977410884",
    appId: "1:1002977410884:web:a0655cf9d8c38f46e0e111",
    measurementId: "G-1Q4GWXRXS4"
  };
  
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function (user) {

     console.log(user)

     if (user) {
        if (user.emailVerified) {
           model.currentUser = {
              displayName: user.displayName,
              email: user.email
           };
           view.setActiveScreen('chatPage');
        } else {
           view.setActiveScreen('loginPage');
           alert("Go to verify your email to login.");
        }

     } else {
        view.setActiveScreen("registerPage");
     }
  });




}