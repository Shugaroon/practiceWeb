const carousel = document.querySelector(".carousel");
const arrows = document.querySelectorAll(".arrow");
const topPicks = document.getElementById("topPicks");
const newArrivals = document.getElementById("newArrivals");


const pics = [
    "/images/denim-jackets.jpg", 
    "/images/palace-gap.jpg", 
    "/images/converse.jpg"];
const bottomPics = ["/images/top-picks.jpg", "/images/new-arrivals.jpg"];


carousel.style.backgroundImage = `url(${pics[0]})`;
// carousel.style.backgroundsize = "cover";
topPicks.style.backgroundImage = `url(${bottomPics[0]})`;
newArrivals.style.backgroundImage = `url(${bottomPics[1]})`;


let selected = 0;


arrows.forEach(
    (arrow)=>{
        arrow.addEventListener("click", (event)=>{
            if(event.target.id === "left-arrow"){
                selected--;
                if(selected < 0)
                    {
                    selected = pics.length-1;
                }
            }
            else if(event.target.id === "right-arrow"){
                selected++;
                if(selected >= pics.length){
                    selected = 0;
                }
            }
            carousel.style.backgroundImage = `url(${pics[selected]})`;
        })
    }
)


const modals = document.querySelectorAll(".modal");
const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");
const nav5 = document.querySelector(".nav5");
const nav6 = document.querySelector(".nav6");



nav1.forEach(nav1)
    nav1=>{
        navItem.addEventListener('click', (event)=>{
            if(event.target.class === nav1){
                console.log('nav1Clicked!')
            }
        })
    }







// const navItems = document.querySelectorAll(".navItem");
// const modals = document.querySelectorAll(".modal")

// navItems.forEach(navItems,modals){
//     navItem=>{
//         navItem.addEventListener('click', (event)=>{
//            if(target.event.class === nav1){

//            }else if(target.event.class === nav2){

//            }else if(target.event.class === nav3){

//            }else if(target.event.class === nav4){

//            }else if(target.event.class === nav5){

//            }else if(target.event.class === nav6){

//            }
//         })
//     }
// }