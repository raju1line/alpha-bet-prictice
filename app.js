for (var i = 0; i < 26; i++) {
  document
    .querySelectorAll(".my-button")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      auduioPaly(text);
      playAnimation(text);
    });
}

document.addEventListener("keypress", function (event) {
  var textImpotr = event.key;
  var text = textImpotr.toLocaleUpperCase();
  playAnimation(text);
  auduioPaly(text);
});

function auduioPaly(text) {
  switch (text) {
    case "A":
      var audio = new Audio("auido/a.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "B":
      var audio = new Audio("auido/b.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "C":
      var audio = new Audio("auido/c.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "D":
      var audio = new Audio("auido/d.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "E":
      var audio = new Audio("auido/e.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "F":
      var audio = new Audio("auido/f.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "G":
      var audio = new Audio("auido/g.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "H":
      var audio = new Audio("auido/h.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "I":
      var audio = new Audio("auido/i.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "J":
      var audio = new Audio("auido/j.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "K":
      var audio = new Audio("auido/k.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "L":
      var audio = new Audio("auido/l.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "M":
      var audio = new Audio("auido/m.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "N":
      var audio = new Audio("auido/n.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "O":
      var audio = new Audio("auido/o.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "P":
      var audio = new Audio("auido/p.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "Q":
      var audio = new Audio("auido/q.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "R":
      var audio = new Audio("auido/r.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "S":
      var audio = new Audio("auido/s.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "T":
      var audio = new Audio("auido/t.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "U":
      var audio = new Audio("auido/u.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "V":
      var audio = new Audio("auido/v.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "W":
      var audio = new Audio("auido/w.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "X":
      var audio = new Audio("auido/x.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "Y":
      var audio = new Audio("auido/y.mp3");
      audio.play();
      break;
  }
  switch (text) {
    case "Z":
      var audio = new Audio("auido/z.mp3");
      audio.play();
      break;
  }
}
function playAnimation(text) {
  var animation = document.querySelector("." + text);
  animation.classList.add("anima");
  setTimeout(function () {
    animation.classList.remove("anima");
  }, 1500);
}
