const model = {}
model.currentUser = {}
model.register = async ({firstName,lastName,email,password}) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    
        //Update profile
        firebase.auth().currentUser.updateProfile({
            displayName: firstName + ' ' +lastName
        });
        //Send verify email
        firebase.auth().currentUser.sendEmailVerification();
        alert('Register successfully, please verify your email');
        view.setActiveScreen('login');
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

//Trang login
model.login = async ({ email, password }) => {
    try {
       // verify loggin details
       let getLogin = await firebase.auth().signInWithEmailAndPassword(email, password);
 
       // if (getLogin.user.emailVerified) {
       //    view.setActiveScreen('welcomeScreen');
       // } else {
       //    alert("Go to verify your email to login.");
       //    view.setActiveScreen('loginPage');
       // }
       // var user = firebase.auth().currentUser;
 
 
 
    } catch (err) {
       console.log(err);
       alert(err.message);
    }
 }