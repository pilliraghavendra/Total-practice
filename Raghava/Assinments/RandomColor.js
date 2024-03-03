let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainer = document.getElementById("bgContainer");

function clickMe() {
    let randomColorIndex = Math.ceil(Math.random() * bgColorsArray.length);
    if (randomColorIndex === bgColorsArray.length) {
        randomColorIndex = (bgColorsArray.length) - 1;
    }
    let randomColor = bgColorsArray[randomColorIndex];
    bgContainer.style.backgroundColor = randomColor;
}
clickMe()