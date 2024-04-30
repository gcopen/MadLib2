 const firebaseConfig = {
    apiKey: "AIzaSyCjSpMgWj9MDY7lSGdzQijhG6eyTul16m4",
    authDomain: "madlibs2-23800.firebaseapp.com",
    projectId: "madlibs2-23800",
    storageBucket: "madlibs2-23800.appspot.com",
    messagingSenderId: "651418363491",
    appId: "1:651418363491:web:a973e41d3da75ef7a1ba56",
    measurementId: "G-Y3M1HKXLL6"
  };
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

function MadLibTime() {
  var noun = document.getElementById("noun").value;
  var noun1 = document.getElementById("noun1").value;
  var adjective = document.getElementById("adjective").value;
  var adjective1 = document.getElementById("adjective1").value;
  var verb = document.getElementById("verb").value;
  var adjective2 = document.getElementById("adjective2").value;
  var verb1 = document.getElementById("verb1").value;
  var verb2 = document.getElementById("verb2").value;
  var verb3 = document.getElementById("verb3").value;
  var noun2 = document.getElementById("noun2").value;
  var noun3 = document.getElementById("noun3").value;
  var title = document.getElementById("title").value;

var story = document.getElementById("output").innerHTML = "My favorite " +noun+ " in the whole world is " +noun1+  ". I like it because it is " +adjective+ " and " +adjective1+ ". The first time I " +verb+ " it, I was " +adjective2+ ". My reaction was to " +verb1+  ". Later, I began to " +verb2+ " it. These days, I " +verb3+ " it with all of my friends, but most of them don't " +noun2+ " the way that I do.That's okay, it just means there is " +noun3+ " for me.";


var storyData = {
  timestamp: Date.now(),
  story: story,
  noun: noun,
  noun1: noun1,
  adjective: adjective,
  adjective1: adjective1,
  verb: verb,
  adjective2: adjective2,  
  verb1: verb1,
  verb2: verb2,
  verb3: verb3,
  noun2: noun2,
  noun3: noun3, 
  storyName: title
  
  };

//var storyData = DATA.stringify(storyData);
console.log("storyData: " + storyData);
return storyData;
}

function saveMadLib() {
    console.log("SaveMadLib()called");
    var storyData = MadLibTime();
    db.collection("MadLibs2").doc(storyData.storyName).set(storyData); 
    alert(storyData.storyName + "saved to database!");
      }
  
function Findyourexistingstory() {
    console.log("Findyourexistingstory()called");
  }
function Edityourexistingstory() {
    console.log("Edityourexistingstory()called");
  }
function Deleteyourexistingstory() {
    console.log("Deleteyourexistingstory()called");
  }