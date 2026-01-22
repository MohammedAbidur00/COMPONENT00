class SetSection {
    constructor(SetTitle, SetImagesSrc) {
        this.SetTitle = SetTitle;
        this.SetImagesSrc = SetImagesSrc;

        this.SetsSectionContainer = document.querySelector(".Sets-Section-Container");
        this.count = 0;

        //CONTAINERS
        this.NewSetSectionCon = document.createElement("div");
        this.NewSetTitleCon = document.createElement("div");
        this.NewSetCon = document.createElement("div");
        this.NewSetImgCon = document.createElement("div");
        this.NewSetBtnsCon = document.createElement("div");
        this.NewSetImg = document.createElement("img");
        this.NewSetPrevBtn = document.createElement("button");
        this.NewSetNextBtn = document.createElement("button");
        this.NewSetTitle = document.createElement("h3");

        //APPENDING
        this.SetsSectionContainer.appendChild(this.NewSetSectionCon);
        this.NewSetSectionCon.appendChild(this.NewSetTitleCon);
        this.NewSetSectionCon.appendChild(this.NewSetCon);
        this.NewSetCon.appendChild(this.NewSetImgCon);
        this.NewSetCon.appendChild(this.NewSetBtnsCon);
        this.NewSetImgCon.appendChild(this.NewSetImg);
        this.NewSetBtnsCon.appendChild(this.NewSetPrevBtn);
        this.NewSetBtnsCon.appendChild(this.NewSetNextBtn);
        this.NewSetTitleCon.appendChild(this.NewSetTitle);

        //TOGGLING CLASSES
        this.NewSetSectionCon.classList.toggle("Sets-Section");
        this.NewSetTitleCon.classList.toggle("Section-Title");
        this.NewSetTitleCon.classList.toggle("S");
        this.NewSetCon.classList.toggle("Sets");
        this.NewSetImgCon.classList.toggle("Set");
        this.NewSetImg.classList.toggle("Sets-Img");
        this.NewSetBtnsCon.classList.toggle("Set-Btns");
        this.NewSetPrevBtn.classList.toggle("Set-Btn");
        this.NewSetNextBtn.classList.toggle("Set-Btn");

        //TITLE RELATED
        this.NewSetTitle.innerText = this.SetTitle;

        //IMG RELATED
        this.NewSetImg.src = `assets/sets/${this.SetImagesSrc[this.count]}.jpg`;

        //BUTTON RELATED
        this.NewSetPrevBtn.innerText = "PREV";
        this.NewSetNextBtn.innerText = "NEXT";

        //BUTTON AND IMG RELATED
        this.NewSetPrevBtn.addEventListener("click", () => {
            this.count--;
            if (this.count < 0) {
                this.count = this.SetImagesSrc.length-1;
                this.NewSetImg.src = `assets/sets/${this.SetImagesSrc[this.count]}.jpg`;
            } else {
                this.NewSetImg.src = `assets/sets/${this.SetImagesSrc[this.count]}.jpg`;
            }
        });

        this.NewSetNextBtn.addEventListener("click", () => {
            this.count++;
            if (this.count > this.SetImagesSrc.length-1) {
                this.count = 0;
                this.NewSetImg.src = `assets/sets/${this.SetImagesSrc[this.count]}.jpg`;
            } else {
                this.NewSetImg.src = `assets/sets/${this.SetImagesSrc[this.count]}.jpg`;
            }
        });
    }
}

//ARRAYS OF IMG NAMES
const ArrayImgOne = ["GB1", "GB2", "GB3"];
const ArrayImgTwo = ["HE1", "HE2"];
const ArrayImgThree = ["TV1", "TV2", "TV3", "TV4"];

//OBJECTS
const SetOne = new SetSection("SET ONE", ArrayImgOne);
const SetTwo = new SetSection("SET TWO", ArrayImgTwo);
const SetFive = new SetSection("SET THREE", ArrayImgThree);

//MINIFIGURE RELATED
let showMoreBtn = document.getElementById("ShowMoreBtn");
let minifigures = document.querySelectorAll(".Minifigure");
let minifigureImgs = document.querySelectorAll(".Minifigure-Img");
let Hidden = true;

/*showMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".Hide").forEach(m => {
        m.classList.toggle("Show");
    });
    changeText();
});

function changeText() {
    if (!Hidden) {
        showMoreBtn.innerText = "HIDE";
    } else {
        showMoreBtn.innerText = "SHOW MORE";
    }
    Hidden = !Hidden;
}

changeText()*/