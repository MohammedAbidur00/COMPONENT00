let showMoreBtn = document.getElementById("ShowMoreBtn");
let minifigures = document.querySelectorAll(".Minifigure");
let minifigureImgs = document.querySelectorAll(".Minifigure-Img");
let Hidden = true;

let Next1 = document.getElementById("Next1");
let Prev1 = document.getElementById("Prev1");
let Next2 = document.getElementById("Next2");
let Prev2 = document.getElementById("Prev2");
let Next3 = document.getElementById("Next3");
let Prev3 = document.getElementById("Prev3");
let BGImg = document.getElementById("BGImg");
let BRImg = document.getElementById("BRImg");
let MFImg = document.getElementById("MFImg");
let countBG = 0;
let countBR = 0;
let countMF = 0;
const ArrayBg = ["GB1", "GB2", "GB3", "GB4", "GB5", "GB6"];
const ArrayBr = ["RB1", "RB2", "RB3"];
const ArrayMf = ["MF1", "MF2", "MF3", "MF4"];

showMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".Hide").forEach(m => {
        m.classList.toggle("Show");
    });
    changeText();
});

/*
minifigures.forEach(minifigure => {
    minifigure.addEventListener("click", () => {
        let string = minifigure.innerHTML;
        let numStr = string.match(/\d+/)?.[0];
        let number = Number(numStr)
        console.log(number)
        minifigureImgs[number].classList.toggle("Larger");
    });
});
*/

Next1.addEventListener("click", () => {
    countBG++;
    if (countBG > ArrayBg.length-1) {
        countBG = 0;
        BGImg.src = `assets/sets/${ArrayBg[countBG]}.jpg`;
    } else {
        BGImg.src = `assets/sets/${ArrayBg[countBG]}.jpg`;
    }
});

Prev1.addEventListener("click", () => {
    countBG--;
    if (countBG < 0) {
        countBG = ArrayBg.length-1;
        BGImg.src = `assets/sets/${ArrayBg[countBG]}.jpg`;
    } else {
        BGImg.src = `assets/sets/${ArrayBg[countBG]}.jpg`;
    }
});

Next2.addEventListener("click", () => {
    countBR++;
    if (countBR > ArrayBr.length-1) {
        countBR = 0;
        BRImg.src = `assets/sets/${ArrayBr[countBR]}.jpg`;
    } else {
        BRImg.src = `assets/sets/${ArrayBr[countBR]}.jpg`;
    }
});

Prev2.addEventListener("click", () => {
    countBR--;
    if (countBR < 0) {
        countBR = ArrayBr.length-1;
        BRImg.src = `assets/sets/${ArrayBr[countBR]}.jpg`;
    } else {
        BRImg.src = `assets/sets/${ArrayBr[countBR]}.jpg`;
    }
});

Next3.addEventListener("click", () => {
    countMF++;
    if (countMF > ArrayMf.length-1) {
        countMF = 0;
        MFImg.src = `assets/sets/${ArrayMf[countMF]}.jpg`;
    } else {
        MFImg.src = `assets/sets/${ArrayMf[countMF]}.jpg`;
    }
});

Prev3.addEventListener("click", () => {
    countMF--;
    if (countMF < 0) {
        countMF = ArrayMf.length-1;
        MFImg.src = `assets/sets/${ArrayMf[countMF]}.jpg`;
    } else {
        MFImg.src = `assets/sets/${ArrayMf[countMF]}.jpg`;
    }
});

function changeText() {
    if (!Hidden) {
        showMoreBtn.innerText = "HIDE";
    } else {
        showMoreBtn.innerText = "SHOW MORE";
    }
    Hidden = !Hidden;
}

changeText()