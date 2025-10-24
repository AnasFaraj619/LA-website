// const slides = document.querySelectorAll(".slides img");/*this selects all elements with this class and puts them in an array */

// let slideIndex=0;
// let intervalId=null;

// //initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);
// //this function waits for page's content to load then initializes displays.

// console.log(slides);

// function initializeSlider(){


//   if(slides.length>0){
//   slides[slideIndex].classList.add("displaySlide");
//   }
// }

// function showSlide(index){

//   if(index >= slides.length){
//     slideIndex=0;
//   }
//   else if(index<0){
//     slideIndex=slides.length - 1;
//   }

//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide");
//   });
//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
// slideIndex--;
// showSlide(slideIndex);
// }

// function nextSlide(){
//   slideIndex++;
//   showSlide(slideIndex);
// }


document.addEventListener("DOMContentLoaded",() => {
const containers = document.querySelectorAll(".slides_container");

containers.forEach(container =>{
const slides = container.querySelectorAll(".slides img");
let index=0;

slides[index].classList.add("displaySlide");

const next=container.querySelector(".next");
const prev=container.querySelector(".prev");

next.addEventListener("click", () =>{
  slides[index].classList.remove('displaySlide');
  index = (index +1) % slides.length;
  slides[index].classList.add("displaySlide");
});

prev.addEventListener("click", () =>{
  slides[index].classList.remove('displaySlide');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("displaySlide");
});
});
});


/*-------------------- nav menu --------------------- */

const navBar = document.querySelector(".nav_list_2");
const cross = document.querySelector(".fa-xmark");
const bars= document.querySelector(".fa-bars");

function barOut(){
  navBar.style.left="0px";
}
function barIn(){
  navBar.style.left="-300px";
}

/*----------------------- scroll navbar effect ------------------- */

const navUpper = document.querySelector("#nav_id");

function scrolled(){
  if(window.scrollY>50){
    navUpper.classList.add("nav_scrolled");
  }
  else{
    navUpper.classList.remove("nav_scrolled");
  }
}


/* ------------------------ type effect on HERO section ----------------------- */

var typed = new Typed(".typing", {
  strings: ["Graphic Designer", "Computer Engineer", "Brand designer"],
  typeSpeed: 70,
  backSpeed: 70,
  loop:true
});

/* ------------------------ scroll animation --------------------------- */

 const observer = new IntersectionObserver((entries) =>{

  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("scroll_animation_show");
    }
    
  })
 },{
  threshold:0.5,
  rootMargin:"0px 0px 0px 0px" /* ------- to delay appearnce when part of sec appears ----- */
 }) /* -----------1st is a fucntion with "entries var", 2nd is an object, and we made it an empty one cuz it doesnt matter */

const Allsections = document.querySelectorAll(".scroll_animation");
Allsections.forEach(el=>observer.observe(el)); /* to set an eye on the objects */

/* ---------------- see more button ----------------------- */

const portSection = document.querySelector(".portfolio_section");

const projects = document.querySelectorAll(".proj_child");

const portButton = document.querySelector(".port_button");

var num = 1;

function seeMore(){

  

  if(num == 1){

projects.forEach((proj) => {
  proj.classList.add("proj_child");
  proj.classList.add("proj_child_appear");
  portButton.innerText="See Less";
  num = num - 1;
})}

else{
projects.forEach((proj) => {
  proj.classList.add("proj_child");
  proj.classList.remove("proj_child_appear");
  portButton.innerText="See More";
  num = num + 1;
  console.log("we in else state");
})
}
}