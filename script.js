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

  document.getElementById("output").innerHTML = "My favorite " +noun+ " in the whole world is " +noun1+  ". I like it because it is " +adjective+ " and " +adjective1+ ". The first time I " +verb+ " it, I was " +adjective2+ ". My reaction was to " +verb1+  ". Later, I began to " +verb2+ " it. These days, I " +verb3+ " it with all of my friends, but most of them don't " +noun2+ " the way that I do.That's okay, it just means there is " +noun3+ " for me.";

}