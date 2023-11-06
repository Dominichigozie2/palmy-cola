const sectionOne = document.querySelector(".home");
const firstHeader = document.querySelector(".home-head-1");
const secondHeader = document.querySelector(".home-head-2");
const scrollToTop = document.querySelector(".scrolltoTop");

const sectionOneOption = {
  
}

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            firstHeader.classList.add("coo");
            secondHeader.classList.add("coo");
            container.classList.remove("displayFlex");
            scrollToTop.classList.remove("displayFlex");
        }else{
            firstHeader.classList.remove("coo");
            secondHeader.classList.remove("coo");
            container.classList.add("displayFlex");
            scrollToTop.classList.add("displayFlex");
        }
    });
}, sectionOneOption);
 
sectionOneObserver.observe(sectionOne);

// the sectionOne observer










// the sectionTwo observer
const  Section = document.querySelector("#about");
const  bottle = document.querySelector(".fader");
const  contentFader = document.querySelector(".right-fader");


console.log(Section);
const option ={
    rootMargin: "-10px",
    threshold: 0,
}

const observerTwo = new IntersectionObserver(function(ent, observerTwo){
    ent.forEach(entr => {
        if(!entr.isIntersecting){
            bottle.classList.remove("coolin");
            contentFader.classList.remove("right");
        }else{
            console.log(bottle); 
            bottle.classList.add("coolin");
            contentFader.classList.add("right");
        }
    });
}, option);
observerTwo.observe(Section);






// the sectionThree observer
 const  SectionThree = document.querySelector(".dislaysection");
 const  boxFader = document.querySelectorAll(".display-box");

 const sectionThreeOption = {
    rootMargin: "-100px",
    threshold: 0,
 }
 
 const sectionThreeObserver = new IntersectionObserver(function(entries, sectionThreeObserver){
     entries.forEach(entry => {
         if(entry.isIntersecting){
            boxFader.forEach(box =>{
            box.classList.add("right")
        })
         }else{
            boxFader.forEach(box =>{
                box.classList.remove("right");
            });

         }
     });
 }, sectionOneOption);
  
 sectionThreeObserver.observe(SectionThree);







// the sectionThree observer
 const  SectionFour = document.querySelector(".values");
 const  Fader = document.querySelectorAll(".value-conatiner .col");

 const sectionFourOption = {
  
 }
 
 const sectionFourObserver = new IntersectionObserver(function(entries, sectionFourObserver){
     entries.forEach(entry => {
         if(entry.isIntersecting){
            Fader.forEach(box =>{
            box.classList.add("right")
        })
         }else{
            Fader.forEach(box =>{
                box.classList.remove("right");
            });

         }
     });
 }, sectionOneOption);
  
 sectionFourObserver.observe(SectionFour);


 
// the sectionThree observer
 const  SectionFive = document.querySelector(".logo-image-section");
 const  FaderFive = document.querySelector(".logo-image-section img");

 const sectionFiveOption = {
  
 }
 
 const sectionFiveObserver = new IntersectionObserver(function(entries, sectionFiveObserver){
     entries.forEach(entry => {
         if(entry.isIntersecting){
            FaderFive.classList.add("right")
         }else{
                FaderFive.classList.remove("right");
         }
     });
 }, sectionOneOption);
  
 sectionFiveObserver.observe(SectionFive);




// the floating menu

const container = document.querySelector(".floating-menu");
const menuBar = document.querySelector(".fa-navicon");

menuBar.addEventListener("click", ()=>{
    container.classList.toggle("width");
    menuBar.classList.toggle("fa-times");

    window.addEventListener("scroll", ()=>{
        menuBar.classList.remove("fa-times");
        container.classList.remove("width");
    });
});
