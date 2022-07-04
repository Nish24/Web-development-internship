var firebaseConfig = {
    apiKey: "AIzaSyCPS57omz_qjGuJX8g3AnFrKvSBl3YFPuA",
  authDomain: "demo123-9cac3.firebaseapp.com",
  databaseURL: "https://demo123-9cac3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demo123-9cac3",
  storageBucket: "demo123-9cac3.appspot.com",
  messagingSenderId: "49705266931",
  appId: "1:49705266931:web:85b9e87f43d75e200ad186",
  measurementId: "G-N0Y5M45300"
  };
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore(app);

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        db.collection("users").doc(firebase.auth().currentUser.uid).get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                document.getElementById("users.name").innerHTML = " "+ doc.data().name;
                document.getElementById("users.age").innerHTML = " "+doc.data().age;
                document.getElementById("users.bg").innerHTML = " "+doc.data().bg;
                document.getElementById("users.dob").innerHTML = " "+doc.data().DOB;
                document.getElementById("users.doj").innerHTML = " "+doc.data().DOJ;
                document.getElementById("users.dept").innerHTML = " "+doc.data().dept;
                document.getElementById("users.Designation").innerHTML = " "+doc.data().Designation;
                document.getElementById("users.col").innerHTML = " "+doc.data().COL;
                document.getElementById("users.stat").innerHTML = " "+doc.data().stat;
                document.getElementById("users.empID").innerHTML = " "+doc.data().empID;
                document.getElementById("users.mob").innerHTML = " "+doc.data().mob;
                document.getElementById("users.num").innerHTML = " "+doc.data().num;
                document.getElementById("users.photo").innerHTML = " "+doc.data().photo;

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
})


function logout(){
    firebase.auth().signOut()
}

