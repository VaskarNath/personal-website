var profile = document.getElementsByClassName('profile-link');
var nav = document.getElementsByClassName("nav");
var old_href = window.location.hash;
for (i = 0; i < nav.length; i++){
  if (nav[i].hash == old_href){
    nav[i].classList.add("active");
  }
}

function change_scroll(){
  window.scrollTo(0, 650);
  console.log(this);
}

profile[0].addEventListener("click", change_scroll);


function modify_nav(){
  for (i = 0; i < nav.length; i++){
    if (nav[i].hash == old_href){
      nav[i].classList.remove("active");
    }
    if (nav[i].hash == window.location.hash){
      nav[i].classList.add("active");
    }
  }
  old_href = window.location.hash;
}

window.addEventListener("hashchange", modify_nav);


window.onscroll = function() {scrollingFunction()};

var profile_page = document.getElementsByClassName("profile");
var profile_rect = profile_page[0].getBoundingClientRect();
console.log(profile_rect.bottom);

function scrollingFunction() {
  console.log( document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > profile_rect.top){
    if ( document.documentElement.scrollTop <  profile_rect.bottom){
      console.log("It works");
      document.getElementsByClassName("navigation-bar")[0].classList.add("different_color");
    } else {
      console.log("It works!");
      document.getElementsByClassName("navigation-bar")[0].classList.remove("different_color");
    }
  } else{
    console.log("It works!");
    document.getElementsByClassName("navigation-bar")[0].classList.remove("different_color");
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onbeforeunload;
