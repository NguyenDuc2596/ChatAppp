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


  firebase.auth().onAuthStateChanged( (res) => {

     console.log(res)

     if (res) {
        if (res.emailVerified) {
           model.currentUser = {
              displayName: res.displayName,
              email: res.email
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
  // firestoreQueries()
}

firestoreQueries = async () => {
  //GET ONE DOCUMENT
  // const response = await firebase.firestore().collection('users').doc('f8dV1Zbui3Glch7a2TMr').get()
  // const user = getDataFromDoc(response)
  // console.log(user);

  //GET MANY DOCUMENT
  const response = await firebase.firestore().collection('users').where('phones','array-contains','099090').get()
  const users = getDataFromDocs(response.docs)
  console.log(users);

  // ADD NEW DOCUMENT
  // const dataToAdd = {
  //   name: 'Nguyen A',
  //   age : 20
  // }
  // firebase.firestore().collection('users').add(dataToAdd)


  // UPDATE DOCUMENT
//   const dataToUpdate = {
//     name: 'avcx',
//     address: 'HN',
//     phones:firebase.firestore.FieldValue.arrayUnion('099090')
//   }
// const docId ="dh38LKfQWONBzjR9c2dy"
// firebase.firestore().collection('users').doc(docId).update(dataToUpdate)

  // DELETE DOCUMENT
  // const docId ='Y1ZVAz56mM1OspSnqYko'
  // firebase.firestore().collection('users').doc(docId).delete()



}

getDataFromDoc = (res) => {
  const data = res.data()
  data.id = res.id
  return data
}

getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
  // const arr = []
  // for (const oneDoc of docs) {
  //   arr.push(getDataFromDoc(oneDoc))
  // }
  // return arr
}