'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const drowButton = document.getElementById("drowButton");
const fortuneImage = document.getElementById("fortuneImage");

const omikujiImages = [
  "https://github.com/utatsu-daiki/utatsu-daiki.github.io/blob/main/%E4%B8%AD%E5%90%89.jpeg",
  "%E4%B8%AD%E5%90%89.jpeg",
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
