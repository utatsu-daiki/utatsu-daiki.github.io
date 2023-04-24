'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const drowButton = document.getElementById("drowButton");
const fortuneImage = document.getElementById("fortuneImage");

const omikujiImages = [
  "images/大吉.jpeg",
  "images/吉.jpeg",
  "images/中吉.jpeg",
  "images/小吉.jpeg",
  "images/末吉.jpeg",
  "images/凶.jpeg",
  "images/大凶.jpeg"
];

function getRondomInt(max) {
    return Math.floor(Math.random() * max);
}

drowButton.addEventListener("click", () => {
    const randomIndex = getRondomInt(omikujiImages.length);
    const selectedImage = omikujiImages[randomIndex];
    fortuneImage.src = selectedImage;
    fortuneImage.style.display = "block";
});
