const leftContainerImg = document.querySelector(".left-container-img");
console.log(leftContainerImg)

let selected = 0;
const pics = ["./insta_pic.png", "./insta_pic2.gif"];


setInterval(() => {
    leftContainerImg.style.backgroundImage = `url(${pics[selected]})`;
}, 10000);

// 외않되.....