function toggleTextPres() {
    var text = document.getElementById("bubblePres");
    if (text.style.opacity === "0") {
      text.style.opacity = "1";
    } else {
      text.style.opacity = "0";
    }
  }

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBurger").style.top = "0";
  } else {
    document.getElementById("navBurger").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}