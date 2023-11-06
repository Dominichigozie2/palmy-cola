const sectionOne = document.querySelector(".home");
const firstHeader = document.querySelector(".home-head-1");
const secondHeader = document.querySelector(".home-head-2");

const sectionOneOption = {
    threshold: 0.5,
   rootMargin: "-150px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            firstHeader.classList.add("coo");
            secondHeader.classList.add("coo");
        }else{
            firstHeader.classList.remove("coo");
            secondHeader.classList.remove("coo");
        }
    });
}, sectionOneOption);
 
sectionOneObserver.observe(sectionOne);