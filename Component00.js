class SetSection {
    constructor(SetTitle, SetImagesSrc, SetDescription) {
        this.SetTitle = SetTitle;
        this.SetImagesSrc = SetImagesSrc;
        this.SetDescription = SetDescription;

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
        this.NewSetDespriptionCon = document.createElement("div");
        this.NewSetDespription = document.createElement("p");

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
        this.NewSetCon.appendChild(this.NewSetDespriptionCon);
        this.NewSetDespriptionCon.appendChild(this.NewSetDespription);

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
        this.NewSetDespription.classList.toggle("SetDes");
        this.NewSetDespriptionCon.classList.toggle("SetDesCon")

        //TITLE RELATED
        this.NewSetTitle.innerText = this.SetTitle;

        //IMG RELATED
        this.NewSetImg.src = `assets/sets/${this.SetImagesSrc[this.count]}.jpg`;

        //BUTTON RELATED
        this.NewSetPrevBtn.innerText = "PREV";
        this.NewSetNextBtn.innerText = "NEXT";

        this.NewSetDespription.innerText = this.SetDescription;

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
const DescriptionOne = "This MOC, “Steampunk Bat Rod” by Breado’s Bricks, is a striking fusion of classic hot rod design and gritty steampunk aesthetics. Built low and wide, the vehicle features an aggressive stance with oversized rear tires, a compact front end, and a fully exposed engine packed with brass-colored cylinders and mechanical details that evoke steam-powered machinery. The dark black bodywork contrasts sharply with gold accents, reinforcing the industrial, hand-built feel of the model. Vintage round headlights, a radiator-style grille, and visible structural elements give the car an old-world, alternate-history vibe, as if it were engineered by an inventive mechanic in a steam-driven era. Overall, the MOC feels powerful, raw, and intentionally mechanical—an imaginative showcase of Breado’s Bricks’ ability to blend storytelling, color, and structure into a cohesive steampunk hot rod.";
const DescriptionTwo = "This set, the LEGO Hogwarts™ Express by the LEGO Group, captures the iconic wizarding train in rich detail and vibrant color. The deep red steam locomotive features classic British rail styling, with a rounded smokebox, tall chimney, spoked driving wheels, and gold-accented detailing that gives it a timeless, storybook feel. Coupled behind are matching passenger carriages, designed with a cozy, old-fashioned look that reflects magical travel rather than modern transport. The scene is brought to life with platform elements, accessories like a snack trolley, and minifigures representing students and staff, reinforcing the sense of departure and adventure. Overall, the set blends realistic steam-train engineering with fantasy charm, making it both a strong display piece and a nostalgic centerpiece of the Wizarding World theme.";
const DecriptionThree = "This set by the LEGO Group is a nostalgic, display-oriented model that pays tribute to classic entertainment and the early era of storytelling through film and television. Designed around a retro television aesthetic, the build features rounded shaping, warm color tones, and stylized details that reflect mid-20th-century design, giving it a timeless, vintage presence. Rather than focusing on play functions, the set is clearly intended as a collectible display piece, using enclosed scenes to suggest moments of creativity, imagination, and performance. The overall construction blends decorative structure with character-driven storytelling, making it feel more like a miniature exhibition than a traditional LEGO set. As a whole, it successfully captures a sense of nostalgia and celebration, appealing especially to fans who appreciate iconic media history and display-focused LEGO builds.";

//OBJECTS
const SetOne = new SetSection("Steampunk Bat Rod", ArrayImgOne, DescriptionOne);
const SetTwo = new SetSection("Hogwarts™ Express", ArrayImgTwo, DescriptionTwo);
const SetFive = new SetSection("Disney Animation Scenes", ArrayImgThree, DecriptionThree);

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