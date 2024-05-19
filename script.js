const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer")

const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");

const overlayMenuTag = document.querySelector(".overlayMenu");
const ulTag = document.querySelector("ul");

const showPicButtonTag = document.querySelector(".showPicButton");

const middleMenuTag = document.querySelector(".middleMenu");
const ourPicTag = document.querySelector(".ourPic");

let menuOpen = false;
hamburgerMenuContainerTag.addEventListener("click", ()=> {
    if( menuOpen === true){
        hamburgerLine2Tag.classList.remove("hideTheDiv");
        hamburgerLine1Tag.classList.remove("rotateRight");
        hamburgerLine3Tag.classList.remove("rotateLeft");
        overlayMenuTag.classList.remove("showOverlayMenu");
        ulTag.classList.remove("moveUlTagUp");
        menuOpen = false;

        closeTheImage();
    }else{
        hamburgerLine2Tag.classList.add("hideTheDiv");
        hamburgerLine1Tag.classList.add("rotateRight");
        hamburgerLine3Tag.classList.add("rotateLeft");
        overlayMenuTag.classList.add("showOverlayMenu");
        ulTag.classList.add("moveUlTagUp");
        menuOpen = true;
    }
}) 

let picOpen = false;
showPicButtonTag.addEventListener("click", ()=>{
    if( picOpen === true){
        closeTheImage();
    }else{
       openTheImage();  
    }
})

const openTheImage = ()=>{
    middleMenuTag.style.opacity = "0";
        ourPicTag.style.width = "20%";  
        showPicButtonTag.innerText = "Back";
        picOpen = true;  
}
const closeTheImage = ()=>{
    middleMenuTag.style.opacity = "1";
        ourPicTag.style.width = "0";
        showPicButtonTag.innerText = "Show Our Pic";
        picOpen = false;
}