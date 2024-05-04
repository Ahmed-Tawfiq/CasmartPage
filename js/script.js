let imgs = Array.from(document.querySelectorAll(".boxs-1 .box-imgs img"));
let boximgs = Array.from(document.querySelectorAll(".boxs-1 .box-imgs"));
let boxContanier = document.getElementById("boxContanier");
let boxBody = document.querySelector(".boxBody");
let backSlide = document.getElementById("backSlide");
let clearBox = document.getElementById("clearBox");
let nextSlide = document.getElementById("nextSlide");
let eye = Array.from(document.getElementById("eye"));
let CarantIndex = 0;

for (let i = 0; i < eye.length; i++) {
  eye.addEventListener("click", function (evenInfo) {
    for (let i = 0; i < boximgs.length; i++) {
      console.log(boximgs);
    }
  });
}

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function Ahmed(evenInfo) {
    CarantIndex = imgs.indexOf(evenInfo.target);
    var imgSrc = evenInfo.target.getAttribute("src");
    boxBody.style.backgroundImage = "url(" + imgSrc + ")";
    $("#boxContanier").fadeIn(1000)
    boxContanier.style.display = "flex";
    console.log(evenInfo);
  });
}

// eye.addEventListener("click" , function(){

//     boxContanier.style.display="flex"
// })

function Next() {
  CarantIndex++;
  if (CarantIndex == imgs.length) {
    CarantIndex = 0;
  }
  var NewSrc = imgs[CarantIndex].getAttribute("src");
  boxBody.style.backgroundImage = "url(" + NewSrc + ")";
}

function back() {
  CarantIndex--;
  if (CarantIndex < 0) {
    CarantIndex = imgs.length - 1;
  }
  var NewSrc = imgs[CarantIndex].getAttribute("src");
  boxBody.style.backgroundImage = "url(" + NewSrc + ")";
}
function clearr() {
  $("#boxContanier").fadeOut(500)

  // boxContanier.style.display = "none";
}

clearBox.addEventListener("click", clearr);
backSlide.addEventListener("click", back);
nextSlide.addEventListener("click", Next);

document.addEventListener("keydown", function (e) {
  if (e.code == "ArrowLeft") {
    back();
  } else if (e.code == "ArrowRight") {
    Next();
  } else if (e.code == "Escape") {
    clearr();
  }
});

// var dark=document.querySelector(".dark");
// var body=document.querySelector("body")
// var Navbar=document.querySelector(".Navbar")
// dark.onclick=function polai(){
//     body.classList.toggle("coll");
//     Navbar.style.color=("green")
//     body.style.color=("white")
// }

var notop = document.getElementById("infoo");

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    notop.style.display = "block";
  } else {
    notop.style.display = "none";
  }
};

notop.onclick = function ahmed() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

var navBar = document.getElementById("navBar");
var list = document.getElementById("list");
var xmarkk = document.getElementById("xmarkk");
var layeer = document.getElementById("layer");

list.addEventListener("click", function () {
  navBar.style.left = 0;
  layeer.style.left = 0;
});
xmarkk.addEventListener("click", function () {
  navBar.style.left = -100 + "%";
  layeer.style.left = -100 + "%";
});
layeer.addEventListener("click", function list() {
  navBar.style.left = -100 + "%";
  layeer.style.left = -100 + "%";
});

// let Navbar=document.querySelectorAll(".Navbar")
// let linkks = document.getElementById("linkks");

// window.onscroll=function(){
//     if(window.pageYOffset > 200){
//         linkks.classList.add("addLinks")

//     }
//     else{
//         linkks.classList.remove("addLinks");
//     }
//  }

// Math.abs(3) - Math.abs(5) >= 8

// let kok="Ahmed";

// console.log()

let hoome = document.getElementById("hoome");
let shoop = document.getElementById("shoop");
let Blogg = document.getElementById("Blogg");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
hoome.addEventListener("click", function () {
  window.scrollTo({
    top: 80,
    behavior: "smooth",
  });
});

shoop.addEventListener("click", function () {
  window.scrollTo({
    top: 1924,
    behavior: "smooth",
  });
});
Blogg.addEventListener("click", function () {
  window.scrollTo({
    top: 3588,
    behavior: "smooth",
  });
});
contact.addEventListener("click", function () {
  window.scrollTo({
    top: 4245,
    behavior: "smooth",
  });
});
about.addEventListener("click", function () {
  window.scrollTo({
    top: 875,
    behavior: "smooth",
  });
});

window.addEventListener("click", function(Ali){
console.log(Ali.pageY)
})

setInterval(() =>{
let date = new Date()
let clock = document.getElementById("clock");
clock.innerHTML=
date.getHours()+ ":"+
date.getMinutes() + ":"+
date.getSeconds()
},1000);

/**--------------Jquery--------------------------------------    */

// $("#showw").click(function () {
//   $(".contenar").fadeIn(3000 , function(){
//     $("#showw").css({"display":"none"} , 1000)
//   })

// });




$(".House").fadeIn(1000)
$(".House").animate({"display":"flex"} , 1000)



$(document).ready(function () {
  $("#loading").fadeOut(1000, function(){
    $("body").css("overflow" , "auto")
  })
})
