const firebaseConfig = {
    apiKey: "AIzaSyCZyRmEJAjaHf_Ju9fIKf0xdalcCKDzTc4",
    authDomain: "kwitter-ecfdc.firebaseapp.com",
    databaseURL: "https://kwitter-ecfdc-default-rtdb.firebaseio.com",
    projectId: "kwitter-ecfdc",
    storageBucket: "kwitter-ecfdc.appspot.com",
    messagingSenderId: "910540217083",
    appId: "1:910540217083:web:b4092b19278b12c5f2ee5e",
    measurementId: "G-HLTLKSV56Q"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}