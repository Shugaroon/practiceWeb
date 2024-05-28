const leftContainerImg = document.querySelector(".left-container-img");

console.log(leftContainerImg)

let selected = 0;
const pics = ["./insta_pic.png", "./insta_pic2.gif"];


setInterval(() => {
    img = `url(${pics[selected]})`;
}, 10000);

// 외않되.....