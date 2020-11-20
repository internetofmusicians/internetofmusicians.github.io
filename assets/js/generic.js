firebase.auth().onAuthStateChanged(firebaseUser => {
    
    if (firebaseUser) {    
        currentUser = firebaseUser;
        console.log("Current User logged: " + currentUser.email)
    }

    else {
        console.log("not logged in");
        window.location = 'login.html'; //If User is not logged in, redirect to login page

    }

})

function signOut(){
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
}
