const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer")

const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");

let menuOpen = false;
hamburgerMenuContainerTag.addEventListener("click", ()=> {
    if( menuOpen === true){
        hamburgerLine2Tag.classList.remove("hideTheDiv");
        hamburgerLine1Tag.classList.remove("rotateRight");
        hamburgerLine3Tag.classList.remove("rotateLeft");
        menuOpen = false;
    }else{
        hamburgerLine2Tag.classList.add("hideTheDiv");
        hamburgerLine1Tag.classList.add("rotateRight");
        hamburgerLine3Tag.classList.add("rotateLeft");
        menuOpen = true;
    }
})