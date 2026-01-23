class MinifigureSection {
    constructor(MinifigureTitle, MinifigureImgSrc) {
        this.MinifigureTitle = [...MinifigureTitle];
        this.MinifigureImgSrc = [...MinifigureImgSrc];

        this.takeToEnd = "";
        this.takeToFront = "";

        this.takeToEndTitle = "";
        this.takeToFrontTitle = "";

        this.start = 0;
        this.end = 10;

        this.MinifiguresViewerCon = document.querySelector(".Minifigure-Viewer-Container");

        //CONTAINERS
        this.MinifiguresViewer = document.createElement("div");
        this.prevBtnCon = document.createElement("div");
        this.Minifigures = document.createElement("div");
        this.nextBtnCon = document.createElement("div");
        this.prevBtn = document.createElement("button");
        this.nextBtn = document.createElement("button");

        //APPENDING
        this.MinifiguresViewerCon.appendChild(this.MinifiguresViewer);
        this.MinifiguresViewer.appendChild(this.prevBtnCon);
        this.MinifiguresViewer.appendChild(this.Minifigures);
        this.MinifiguresViewer.appendChild(this.nextBtnCon);
        this.prevBtnCon.appendChild(this.prevBtn);
        this.nextBtnCon.appendChild(this.nextBtn);

        //TOGGLING STYLES
        this.MinifiguresViewer.classList.toggle("Minifigure-Viewer");
        this.prevBtnCon.classList.toggle("Left-Tri-Con");
        this.prevBtn.classList.toggle("Left-Tri");
        this.Minifigures.classList.toggle("Minifigures");
        this.nextBtnCon.classList.toggle("Right-Tri-Con");
        this.nextBtn.classList.toggle("Right-Tri");

        this.Display(this.start, this.end, this.MinifigureImgSrc, this.MinifigureTitle);

        this.prev = document.querySelector(".Left-Tri");
        this.next = document.querySelector(".Right-Tri");

        this.next.addEventListener("click", () => {
            this.takeToEnd = this.MinifigureImgSrc[0];
            this.MinifigureImgSrc = this.MinifigureImgSrc.slice(1);
            this.MinifigureImgSrc = [...this.MinifigureImgSrc, this.takeToEnd];
            this.takeToEndTitle = this.MinifigureTitle[0];
            this.MinifigureTitle = this.MinifigureTitle.slice(1);
            this.MinifigureTitle = [...this.MinifigureTitle, this.takeToEndTitle];
            this.Display(this.start, this.end, this.MinifigureImgSrc, this.MinifigureTitle);
        })

        this.prev.addEventListener("click", () => {
            this.takeToFront = this.MinifigureImgSrc[this.MinifigureImgSrc.length-1];
            this.MinifigureImgSrc = [this.takeToFront, ...this.MinifigureImgSrc];
            this.MinifigureImgSrc = this.MinifigureImgSrc.slice(0, -1);
            this.takeToFrontTitle = this.MinifigureTitle[this.MinifigureTitle.length-1];
            this.MinifigureTitle = [this.takeToFrontTitle, ...this.MinifigureTitle];
            this.MinifigureTitle = this.MinifigureTitle.slice(0, -1);
            this.Display(this.start, this.end, this.MinifigureImgSrc, this.MinifigureTitle);
        })
    }

    Display(start, end, arrI, arrT) {
        console.log("gh")
        this.Minifigures = document.querySelector(".Minifigures");
        this.Minifigures.innerText = "";
        for (let x = start; x < end; x++) {
            //CONTAINERS
            this.NewMinifigureCon = document.createElement("div");
            this.NewMinifigureImg = document.createElement("img");
            this.NewMinifigureTitle = document.createElement("p");

            //APPENDING
            this.Minifigures.appendChild(this.NewMinifigureCon);
            this.NewMinifigureCon.appendChild(this.NewMinifigureImg);
            this.NewMinifigureCon.appendChild(this.NewMinifigureTitle);

            //TOGGLING CLASSES
            this.NewMinifigureCon.classList.toggle("Minifigure");
            this.NewMinifigureCon.classList.toggle("StartingOnes");
            this.NewMinifigureImg.classList.toggle("Minifigure-Img");

            this.NewMinifigureTitle.innerText = arrT[x];
            this.NewMinifigureImg.src = `assets/minifigures/${arrI[x]}.jpg`;
        }
    }
}

class CarouselSets {
    constructor(InputArray, InputTitle) {
        this.InputArray = InputArray;
        this.InputTitle = InputTitle;

        this.count = 0;

        this.CarouselItemMaker();
    }

    CarouselItemMaker() {
        this.SetsCarouselHolder = document.querySelector(".Sets-Carousel-Holder");

        this.SetsCarouselCon = document.createElement("div");
        this.SetsCarouselTitle = document.createElement("h3");
        this.SetsCarouselImg = document.createElement("img");
        this.SetsCarouselBtnsCon = document.createElement("div");
        this.SetsCarouselPrevBtn = document.createElement("button");
        this.SetsCarouselNextBtn = document.createElement("button");

        this.SetsCarouselCon.classList.toggle("Sets-Carousel");
        this.SetsCarouselImg.classList.toggle("Sets-Carousel-Img");
        this.SetsCarouselPrevBtn.classList.toggle("Set-Btn-Carousel");
        this.SetsCarouselNextBtn.classList.toggle("Set-Btn-Carousel");

        this.SetsCarouselTitle.innerText = this.InputTitle;
        this.SetsCarouselPrevBtn.innerText = "PREV";
        this.SetsCarouselNextBtn.innerText = "NEXT";

        this.SetsCarouselHolder.appendChild(this.SetsCarouselCon);
        this.SetsCarouselCon.appendChild(this.SetsCarouselTitle);
        this.SetsCarouselCon.appendChild(this.SetsCarouselImg);
        this.SetsCarouselCon.appendChild(this.SetsCarouselBtnsCon);
        this.SetsCarouselBtnsCon.appendChild(this.SetsCarouselPrevBtn);
        this.SetsCarouselBtnsCon.appendChild(this.SetsCarouselNextBtn);

        this.SetsCarouselImg.src = `assets/sets/${this.InputArray[this.count]}.jpg`;

        this.SetsCarouselPrevBtn.addEventListener("click", () => {
            this.count--;
            if (this.count < 0) {
                this.count = this.InputArray.length-1;
                this.SetsCarouselImg.src = `assets/sets/${this.InputArray[this.count]}.jpg`;
            } else {
                this.SetsCarouselImg.src = `assets/sets/${this.InputArray[this.count]}.jpg`;
            }
        });

        this.SetsCarouselNextBtn.addEventListener("click", () => {
            this.count++;
            if (this.count > this.InputArray.length-1) {
                this.count = 0;
                this.SetsCarouselImg.src = `assets/sets/${this.InputArray[this.count]}.jpg`;
            } else {
                this.SetsCarouselImg.src = `assets/sets/${this.InputArray[this.count]}.jpg`;
            }
        });
    }
}

class CarouselNavigator {
    constructor(NavigatorArray) {
        this.NavigatorArray = NavigatorArray;

        this.start = 0;
        this.end = 5;

        this.takeToStart = "";
        this.takeToEnd = "";

        this.ArrayCarouselSetsOne = ["HC1", "HC2"];
        this.ArrayCarouselSetsTwo = ["MK1", "MK2"];
        this.ArrayCarouselSetsThree = ["BT1", "BT2", "BT3"];
        this.ArrayCarouselSetsFour = ["GR1", "GR2"];
        this.ArrayCarouselSetsFive = ["A1", "A2"];
        this.ArrayCarouselSetsSix = ["MF1", "MF3"];

        this.ArrayOfArrays = [this.ArrayCarouselSetsOne, this.ArrayCarouselSetsTwo, this.ArrayCarouselSetsThree, this.ArrayCarouselSetsFour, this.ArrayCarouselSetsFive, this.ArrayCarouselSetsSix];

        this.ArraysOfNames = ["SET FOUR", "SET FIVE", "SET SIX", "SET SEVEN", "SET EIGHT", "SET NINE"]

        this.Display(this.start, this.end, this.NavigatorArray, this.ArrayOfArrays, this.ArraysOfNames);

        this.CarouselNavPrev = document.querySelector(".CarouselPrev");
        this.CarouselNavNext = document.querySelector(".CarouselNext");

        this.CarouselNavPrev.addEventListener("click", () => {
            this.takeToFront = this.NavigatorArray[this.NavigatorArray.length-1];
            this.NavigatorArray = [this.takeToFront, ...this.NavigatorArray];
            this.NavigatorArray = this.NavigatorArray.slice(0, -1);
            this.takeToFrontArrays = this.ArrayOfArrays[this.ArrayOfArrays.length-1];
            this.ArrayOfArrays = [this.takeToFrontArrays, ...this.ArrayOfArrays];
            this.ArrayOfArrays = this.ArrayOfArrays.slice(0, -1);
            this.takeToFrontNames = this.ArraysOfNames[this.ArraysOfNames.length-1];
            this.ArraysOfNames = [this.takeToFrontNames, ...this.ArraysOfNames];
            this.ArraysOfNames = this.ArraysOfNames.slice(0, -1);
            this.Display(this.start, this.end, this.NavigatorArray, this.ArrayOfArrays, this.ArraysOfNames);
        });

        this.CarouselNavNext.addEventListener("click", () => {
            this.takeToEnd = this.NavigatorArray[0];
            this.NavigatorArray = this.NavigatorArray.slice(1);
            this.NavigatorArray = [...this.NavigatorArray, this.takeToEnd];
            this.takeToEndArrays = this.ArrayOfArrays[0];
            this.ArrayOfArrays = this.ArrayOfArrays.slice(1);
            this.ArrayOfArrays = [...this.ArrayOfArrays, this.takeToEndArrays];
            this.takeToEndNames = this.ArraysOfNames[0];
            this.ArraysOfNames = this.ArraysOfNames.slice(1);
            this.ArraysOfNames = [...this.ArraysOfNames, this.takeToEndNames];
            this.Display(this.start, this.end, this.NavigatorArray, this.ArrayOfArrays, this.ArraysOfNames);
        });
    }

    Display(start, end, NavArr, ImgArr, NameArr) {
        this.SetsCarouselHolder = document.querySelector(".Sets-Carousel-Holder");
        this.SetsCarouselHolder.innerText = "";
        for (let x = start; x < end; x++) {
            let object = NavArr[x];
            object = new CarouselSets(ImgArr[x], NameArr[x]);
        }
    }
}

class WallOfSomething {
    constructor(InputArray, Container, ImgStyle, ImgContainer) {
        this.InputArray = InputArray;
        this.Container = Container;
        this.ImgStyle = ImgStyle;
        this.ImgContainer = ImgContainer;

        this.Display(this.InputArray, this.Container, this.ImgStyle, this.ImgContainer);
    }

    Display(hArr, Con, ImgS, ImgC) {
        this.text = "LEGO represents far more than a recreational pastime; it is a sophisticated medium where creativity, design, and engineering intersect with remarkable precision. I am especially drawn to the aesthetic depth of LEGO, as each set demonstrates a deliberate use of color, proportion, and structural harmony that closely mirrors principles found in architecture and industrial design. This visual and conceptual appeal becomes even more pronounced in the larger and more intricate sets, which transform the building process into an immersive and intellectually engaging experience.Beyond official releases, I hold a deep appreciation for custom LEGO sets created by master builders within the wider LEGO community. These creations often push the boundaries of scale, realism, and innovation, showcasing an exceptional level of technical skill and artistic vision. By reimagining familiar structures or inventing entirely original designs, master builders demonstrate the vast creative potential of LEGO as a platform for serious design work. Their ability to balance complexity with aesthetic coherence has been a continual source of inspiration.This sustained exposure to both official large-scale sets and community-driven custom builds ultimately motivated me to extend my interest beyond physical construction. It led me to create my own platform, referred to as website0, where I could document, showcase, and engage with LEGO-inspired ideas in a digital space. In this way, LEGO has influenced not only how I build, but also how I create, share, and communicate my appreciation for thoughtful design. \n\n\n- THE COMPONENT00 TEAM";
        this.HeadsCon = Con;
        for (let x = 0; x < hArr.length; x++) {
            if (x === 7 && ImgC === "brickheads") {
                this.AboutUsCon = document.createElement("div");
                this.AboutUsCon.classList.toggle("AboutUsCon");
                this.AboutUsTextCon = document.createElement("div");
                this.AboutUsTitleCon = document.createElement("div");
                this.AboutUsText = document.createElement("p");
                this.AboutUsTitle = document.createElement("h2");
                this.AboutUsTextCon.classList.toggle("AboutUsText");
                this.AboutUsTitleCon.classList.toggle("Section-Title");
                this.AboutUsText.innerText = this.text;
                this.AboutUsTitle.innerText = "ABOUT US"
                this.HeadsCon.appendChild(this.AboutUsCon);
                this.AboutUsCon.appendChild(this.AboutUsTitleCon);
                this.AboutUsCon.appendChild(this.AboutUsTextCon);
                this.AboutUsTextCon.appendChild(this.AboutUsText);
                this.AboutUsTitleCon.appendChild(this.AboutUsTitle);
                this.HeadImg = document.createElement("img");
                this.HeadsCon.appendChild(this.HeadImg);
                this.HeadImg.classList.toggle(ImgS);
                this.HeadImg.src = `assets/${ImgC}/${hArr[x]}.jpg`;
            } else {
                this.HeadImg = document.createElement("img");
                this.HeadsCon.appendChild(this.HeadImg);
                this.HeadImg.classList.toggle(ImgS);

                this.HeadImg.src = `assets/${ImgC}/${hArr[x]}.jpg`;
            }
        }
    }
}

const MinifigureImgArray = ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20", "a21", "a22", "a23", "a24", "a25", "a26", "a27", "a28", "a29", "a30", "a31", "a32", "a33", "a34", "a35", "a36", "a37", "a38", "a39", "a40", "a41", "a42", "a43", "a44"];
const MinifigureTitleArray = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", "TWENTY ONE", "TWENTY TWO", "TWENTY THREE", "TWENTY FOUR", "TWENTY FIVE", "TWENTY SIX", "TWENTY SEVEN", "TWENTY EIGHT", "TWENTY NINE", "THIRTY", "THIRTY ONE", "THIRTY TWO", "THIRTY THREE", "THIRTY FOUR", "THIRTY FIVE", "THIRTY SIX", "THIRTY SEVEN", "THIRTY EIGHT", "THIRTY NINE", "FORTY", "FORTY ONE", "FORTY TWO", "FORTY THREE", "FORTY FOUR"];
const Collection = new MinifigureSection(MinifigureTitleArray, MinifigureImgArray);

let CarouselSetOne;
let CarouselSetTwo;
let CarouselSetThree;
let CarouselSetFour;
let CarouselSetFive;
let CarouselSetSix;

const ArrayOfObjects = [CarouselSetOne, CarouselSetTwo, CarouselSetThree, CarouselSetFour, CarouselSetFive];
const CarouselNavArr = new CarouselNavigator(ArrayOfObjects);

const HeadsArr = ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"]
const BrickHeadsArr = ["BH1", "BH2", "BH3", "BH4", "BH5", "BH6", "BH7", "BH8", "BH9", "BH10", "BH11", "BH12", "BH13", "BH14"];
const WallOne = new WallOfSomething(HeadsArr, document.querySelector(".Heads-Container"), "Heads-Img", "heads");
const WallTwo = new WallOfSomething(BrickHeadsArr, document.querySelector(".Brick-Heads-Container"), "Brick-Heads-Img", "brickheads");

let collectiveBtn = document.getElementById("CollectiveBtn");
let mainWrapper = document.getElementById("MainWrapper");
let Refresh = document.getElementById("Refresh");

collectiveBtn.addEventListener("click", () => {
    mainWrapper.scrollIntoView({behavior: "smooth"})
})

Refresh.addEventListener("click", () => {
    location.reload();
})