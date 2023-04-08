
//ADD YOUR F
const firebaseConfig = {
      apiKey: "AIzaSyCjQIsmGw-vQ1_4lUyds9YGOoKItGxzD9k",
      authDomain: "kwitter-data-9f95f.firebaseapp.com",
      databaseURL: "https://kwitter-data-9f95f-default-rtdb.firebaseio.com",
      projectId: "kwitter-data-9f95f",
      storageBucket: "kwitter-data-9f95f.appspot.com",
      messagingSenderId: "751413703778",
      appId: "1:751413703778:web:44918db3fb034132b1cd3b",
      measurementId: "G-ZM8FH50MBT"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
