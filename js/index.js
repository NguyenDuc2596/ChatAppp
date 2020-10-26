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
  console.log(firebase.app().name)
  firebase.auth().onAuthStateChanged((res) => {
    console.log(res)
    if (res) {
      if (res.emailVerified) {
        model.currentUser = {
          displayName: res.displayName,
          email: res.email
        }
        console.log(model.currentUser)
        view.setActiveScreen('chatPage')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
  // firestoreQueries()
}
window.onload = init

// firestoreQueries = async () => {
//   // get one document
//   const response = await firebase.firestore()
//   .collection('users')
//   .doc('LvQwa20mBPIArX1RYL30').get()
//   const user = getDataFromDoc(response)
//   console.log(user)
//   // get many document
//     const response = await firebase.firestore()
//     .collection('users').where('phones', 'array-contains', '0123')
//     .get()
//     const users = getDataFromDocs(response.docs)
//     console.log(users)
//   // add new document
//   const dataToAdd = {
//     name: 'Nguyen Thi B',
//     age: 20
//   }
//   firebase.firestore().collection('users')
//   .add(dataToAdd)
//   // update document
//     const dataToUpdate = {
//       name: 'abcxyz',
//       address: 'asdasd',
//       phones: firebase.firestore.FieldValue.arrayUnion('')
//     }
//     const docID = "FkuwqKF8yuJtmbcAjj8u"
//     firebase.firestore().collection('users')
//     .doc(docID).update(dataToUpdate)
//   // delete document
//   const docId = 'wTRKk1s4wUmaGrrqCNWe'
//   firebase.firestore().collection('users')
//   .doc(docId).delete()
// }
getDataFromDoc = (res) => {
  const data = res.data()
  data.id = res.id
  return data
}
getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
  // const arr = []
  // for(const oneDoc of docs) {
  //   arr.push(getDataFromDoc(oneDoc))
  // }
  // return arr
}