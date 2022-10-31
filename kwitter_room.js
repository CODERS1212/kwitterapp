var firebaseConfig = {
      apiKey: "AIzaSyAQHF73C-UK07yHhXnqq6fmu4heWSH4UjQ",
      authDomain: "kwitter-122fe.firebaseapp.com",
      databaseURL: "https://kwitter-122fe-default-rtdb.firebaseio.com",
      projectId: "kwitter-122fe",
      storageBucket: "kwitter-122fe.appspot.com",
      messagingSenderId: "797879385084",
      appId: "1:797879385084:web:3ef232794d43ef4be61079",
      measurementId: "G-JBG4R268GN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
user_name1 = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name1 + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room Name - " + Room_names);
                  row = "<div class = 'room_name' id=" + Room_names + " onclick= ' redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innnerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_html");
      window.location = "index.html";
}