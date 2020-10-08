
    
 

const init = () => {

    var firebaseConfig = {
        apiKey: "AIzaSyD-WOE8HINVQft5U9vBg_KsILTYXxUYL8g",
        authDomain: "chatapp-20702.firebaseapp.com",
        databaseURL: "https://chatapp-20702.firebaseio.com",
        projectId: "chatapp-20702",
        storageBucket: "chatapp-20702.appspot.com",
        messagingSenderId: "1002977410884",
        appId: "1:1002977410884:web:a0655cf9d8c38f46e0e111",
    
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
     console.log(firebase.app().name);
      view.setActiveScreen('registerPage')
    }

    window.onload  = init
