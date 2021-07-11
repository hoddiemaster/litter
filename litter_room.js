var firebaseConfig = {
      apiKey: "AIzaSyAu9tpWC2kdd37EpW08Pmt1-z3ZMI08Veo",
      authDomain: "kwitter-a6d8d.firebaseapp.com",
      databaseURL: "https://kwitter-a6d8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6d8d",
      storageBucket: "kwitter-a6d8d.appspot.com",
      messagingSenderId: "264870565419",
      appId: "1:264870565419:web:5af9e966d8d95afbfbbc6e"
};
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "welcome "+ user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
            console.log(Room_names);
            row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
            document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function add_room(){
       Room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(Room_name).update({
             purpose:"adding_Room_name"
       });
       localStorage.setItem("room_name",Room_name);
       window.location = "kwitter_page.html";
      }

       function redirectToRoomName(name){
             console.log(name);
             localStorage.setItem("room_name",name);
             window.location = "kwitter_page.html";
       }   