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