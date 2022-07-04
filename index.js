document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html") 
    }
})

function login(event){
    event.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        console.log('Error signing in, ', error.message)
        alert(error.message)
    }).then(function(user){
        if(user){
            alert('Welcome back, you are now logged in')
        }
    })
}

function signUp(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    var email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
