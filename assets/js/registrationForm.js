function signUp(){
    var email = document.getElementById("emailtxt");
    var password = document.getElementById("passwordtxt");
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(user){
        if(user && user.emailVerified === false){
          user.sendEmailVerification().then(function(){
            console.log("email verification sent to user");
          });
        }
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        console.log(errorMessage)
        // ...
      });
}

function logIn(){

    var email = document.getElementById("emailtxt");
    var password = document.getElementById("passwordtxt");
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);

    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("user with email: " + firebaseUser.email + " logged in");
            window.location.href = 'panel.html';

        }
        else {
            console.log("not logged in");
        }
    })


}
