'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const drowButton = document.getElementById("drowButton");
const fortuneImage = document.getElementById("fortuneImage");

const omikujiImages = [
  "大吉.jpeg",
  "吉.jpeg",
  "中吉.jpeg",
  "小吉.jpeg",
  "末吉.jpeg",
  "凶.jpeg",
  "大凶.jpeg",
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
