const navBarElement = document.querySelector("#navBarid");
const contactMeElement = document.querySelector("#contactid");
const iconLinksElement = document.getElementById("iconLinksid");
const aboutElement = document.querySelector("#aboutid");
const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const aboutContentElement = document.querySelector("#aboutcontentid");
const quizzesElement = document.querySelector("#quizzesid");
const cardsElement = document.querySelector("#cardsid");

const dropRightIconLinksList = function(){
    if(iconLinksElement.classList.contains("hidden"))
        iconLinksElement.classList.remove("hidden");
    else
        iconLinksElement.classList.add("hidden");
}

quizzesElement.addEventListener("click", (function(){
    window.open("Quizzes.html", "_self");
}));

aboutElement.addEventListener("click", function(){
    window.open("About.html", "_self");
});

contactMeElement.addEventListener("click", dropRightIconLinksList);



