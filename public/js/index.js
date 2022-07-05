const header = document.querySelector(".header");
const nav = document.querySelector("nav");

let lastKnownScrollPosition = 0;

var prevScrollpos = window.pageYOffset;


window.addEventListener("scroll", () => {
   lastKnownScrollPosition = window.scrollY;

   bgcolorNav(window.scrollY)

   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      nav.style.top = "0";
   }else {
      nav.style.top = "-100px";
   }
      prevScrollpos = currentScrollPos;
})



const bgcolorNav = (lastKnownScrollPosition) => {
   
   if (lastKnownScrollPosition >= 100) {
      nav.style.background = '#fff'
   }else if(lastKnownScrollPosition < 200){
      nav.style.background = 'transparent'
   }
}