// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDBlRW2Qx0nxJqi4JYJDAZ4ugc3AIN7fss",
      authDomain: "kwitter-71a0a.firebaseapp.com",
      projectId: "kwitter-71a0a",
      storageBucket: "kwitter-71a0a.appspot.com",
      messagingSenderId: "637867753367",
      appId: "1:637867753367:web:579631b474873edf6b4ed2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}