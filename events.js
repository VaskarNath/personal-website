var profile = document.getElementsByClassName('profile-link');
var nav = document.getElementsByClassName("nav");
var pages = document.getElementsByClassName("page");
var navigation_bar = document.getElementsByClassName('navigation-bar');
var navigation_bar_rect = navigation_bar[0].getBoundingClientRect();
pages_rect = [];

window.onresize = reportWindowSize;
function reportWindowSize(){
  scrollTo(0, 0);
  console.log("works");
  window.scrollTo(0,0);
  location.reload();
  profile = document.getElementsByClassName('profile-link');
  nav = document.getElementsByClassName("nav");
  pages = document.getElementsByClassName("page");
  navigation_bar = document.getElementsByClassName('navigation-bar');
  navigation_bar_rect = navigation_bar[0].getBoundingClientRect();
  pages_rect = [];
  profile_rect = profile_page[0].getBoundingClientRect();
  for (i = 0; i < pages.length; i++){
    pages_rect.push(pages[i].getBoundingClientRect());
  }
}

for (i = 0; i < pages.length; i++){
  pages_rect.push(pages[i].getBoundingClientRect());
}
var old_href = window.location.hash;
window.location.hash = "#home";
for (i = 0; i < nav.length; i++){
  if (nav[i].hash == old_href){
    nav[i].classList.add("active");
  }
}

nav[0].addEventListener("click", change_scroll0);
nav[1].addEventListener("click", change_scroll1);
nav[2].addEventListener("click", change_scroll2);
nav[3].addEventListener("click", change_scroll3);
nav[4].addEventListener("click", change_scroll4);

function change_scroll0(){
  scrollTo(0, pages_rect[0].top);
  return false;
}

function change_scroll1(){
  console.log(document.documentElement.clientHeight);
  var style = window.getComputedStyle(navigation_bar[0]);
  scrollTo(0, pages_rect[1].top - navigation_bar_rect.height - (0.06 * document.documentElement.clientHeight));
  return false;
}

function change_scroll2(){
  scrollTo(0, pages_rect[2].top);
  return false;
}

function change_scroll3(){
  scrollTo(0, pages_rect[3].top);
  return false;
}

function change_scroll4(){
  scrollTo(0, pages_rect[4].top);
  return false;
}

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


window.onscroll = function() {scrollingFunction(), activePage()};


function activePage(){
  var offset = navigation_bar_rect.height + (0.065 * document.documentElement.clientHeight);
  var j = document.documentElement.scrollTop;
  switch (true) {
    case (pages_rect[0].top < j && j < pages_rect[0].bottom - offset):
      window.location.hash = "#home";
      break;
    case (pages_rect[1].top - offset < j && j < pages_rect[1].bottom - offset):
      window.location.hash = "#profile";
      break;
    case (pages_rect[2].top - offset < j && j < pages_rect[2].bottom - offset):
      window.location.hash = "#experiences";
      break;
    case (pages_rect[3].top - offset< j && j < pages_rect[3].bottom - offset):
      window.location.hash = "#projects";
      break;
    case (pages_rect[4].top - offset < j && j < pages_rect[4].bottom):
      window.location.hash = "#contact";
      break;
    default:

  }
}

function scrollingFunction() {
  if ((document.documentElement.scrollTop > (pages_rect[2].top - navigation_bar_rect.height)
     &&  document.documentElement.scrollTop <  pages_rect[2].bottom - (navigation_bar_rect.height))
   || (document.documentElement.scrollTop > (pages_rect[4].top - navigation_bar_rect.height)
      &&  document.documentElement.scrollTop <  pages_rect[4].bottom - (navigation_bar_rect.height))){
    document.getElementsByClassName("navigation-bar")[0].classList.add("different_color");
  } else{
    document.getElementsByClassName("navigation-bar")[0].classList.remove("different_color");
  }
}

window.onunload = function(){ window.scrollTo(0,0);}


var intro = document.getElementsByClassName('intro')[0];
var intro1 = document.getElementsByClassName('intro1')[0];

intro.classList.add("display");
var delay = setTimeout(loop, 2000);


first_intro = true;
bool = false;


var k = 4;
var j = 0;

function loop(){
  if (k == 0){
    if (first_intro){
      if (j == 0){
        setTimeout(loop, 1950);
        j += 1;
        return null;
      }
      j = 0;
      intro.classList.remove("display");
      intro1.classList.add("display");
      k = 4;
      first_intro = false;
      setTimeout(loop, 2000);
      return null;
    } else {

      if (j == 0){
        setTimeout(loop, 1950);
        j += 1;
        return null;
      }
      j = 0;
      intro.classList.add("display");
      intro1.classList.remove("display");
      k = 4;
      first_intro = true;
      setTimeout(loop, 2000);
    }
    return null;
  }
  if (first_intro){
      if (bool){
            intro.classList.add("blinker");
            bool = false;
        } else {
          intro.classList.remove("blinker");
          bool = true;
        }
        k -= 1;
        setTimeout(loop, 500);
  } else {
      if (bool){
            intro1.classList.add("blinker");
            bool = false;
        } else {
          intro1.classList.remove("blinker");
          bool = true;
        }
        k -= 1;
        setTimeout(loop, 500);
  }
}
