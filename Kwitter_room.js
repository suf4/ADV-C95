// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVcI_vBDpmbJiXyqYLA8_SHf7yHtbWWgo",
    authDomain: "kwitter-f402e.firebaseapp.com",
    databaseURL: "https://kwitter-f402e-default-rtdb.firebaseio.com",
    projectId: "kwitter-f402e",
    storageBucket: "kwitter-f402e.appspot.com",
    messagingSenderId: "249198107873",
    appId: "1:249198107873:web:3ba54f7e41d904b7eeeba0",
    measurementId: "G-BE4DDT655Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}