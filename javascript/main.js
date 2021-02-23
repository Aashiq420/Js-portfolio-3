//hamburger
function toggleNav() {
  const links = document.getElementById("navbar");

  //   Check styles on links
  links.style.width == "0px"
    ? (links.style.width = "100vw")
    : (links.style.width = "0px");
}

//display
function display() {
  if (document.getElementById("mywhatsapp").innerHTML == "Whatsapp") {
    document.getElementById("mywhatsapp").innerHTML = "0732581571";
  } else if (document.getElementById("mywhatsapp").innerHTML == "0732581571") {
    document.getElementById("mywhatsapp").innerHTML = "Whatsapp";
  }
}
function display2() {
  if (document.getElementById("myemail").innerHTML == "Email") {
    document.getElementById("myemail").innerHTML = "adams.aashiq@gmail.com";
  } else if (
    document.getElementById("myemail").innerHTML == "adams.aashiq@gmail.com"
  ) {
    document.getElementById("myemail").innerHTML = "Email";
  }
}
//When the user scrolls down 800px from the top of the document, change navbar color
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 950 ||
    document.documentElement.scrollTop > 950
  ) {
    document.getElementById("fullnav").style.backgroundColor = "black";
  } else {
    document.getElementById("fullnav").style.backgroundColor = "transparent";
  }
}
// ---------------slideshow-----------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
// -------------------------------small screen thing

// open menu
function openMenu() {
  menu = document.getElementById("menu");
  menu.style.display = "block";
}
function closeMenu() {
  menu = document.getElementById("menu");
  menu.style.display = "none";
}
