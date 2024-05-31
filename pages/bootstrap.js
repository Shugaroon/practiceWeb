const carousel = document.querySelector(".carousel");
const arrows = document.querySelectorAll(".arrow");
const pics = [
    "http://127.0.0.1:5501/images/denimJackets.jpg", 
    "http://127.0.0.1:5501/images/newjeans.jpg", 
    "http://127.0.0.1:5001/images/converse.jpg"];
carousel.style.backgroundImage = `url(${pics[0]})`;
carousel.style.backgroundsize = "cover";


let i = 0;

arrows.forEach(
    arrow=>{
        arrow.addEventListener("click", (event)=>{
            if(event.target.id === "left"){
                i--;
                if(i<0){i = pics.length+1;}
            }
            else if(event.target.id === "right"){
                i++;
                if(i >= pics.length){i = 0;}
            }
            container.style.backgroundImage = `url(${pics[i]})`;
        })
    }
)