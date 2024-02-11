const navBarElement = document.querySelector("#navBarid");
const contactMeElement = document.querySelector("#contactid");
const iconLinksElement = document.querySelector("#iconLinksid");
const aboutElement = document.querySelector("#aboutid");
const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const aboutContentElement = document.querySelector("#aboutcontentid");
const homeElement = document.querySelector("#homeid");
const cardsElement4 = document.querySelector("#cardsid4");
const cardsElement41 = document.querySelector("#cardsid41");
const cardsElement42 = document.querySelector("#cardsid42");
const em4Element = document.querySelector("#em4id");
const em4ElementOptions = document.querySelector("#em4Optionsid");
const em4ElementLeftArrowElement = document.querySelector("#em4LeftArrowid");
const flatElement = document.querySelector("#flatid");
const flatElementOptions = document.querySelector("#flatOptionsid");
const flatElementLeftArrowElement = document.querySelector("#flatLeftArrowid");
const daaElement = document.querySelector("#daaid");
const daaElementOptions = document.querySelector("#daaOptionsid");
const daaElementLeftArrowElement = document.querySelector("#daaLeftArrowid");
const esElement = document.querySelector("#esid");
const esElementOptions = document.querySelector("#esOptionsid");
const esElementLeftArrowElement = document.querySelector("#esLeftArrowid");
const dbsElement = document.querySelector("#dbsid");
const dbsElementOptions = document.querySelector("#dbsOptionsid");
const dbsElementLeftArrowElement = document.querySelector("#dbsLeftArrowid");
const jumpToParentElement = document.querySelector("#jumpToParentid");
const jumpToElement = document.querySelector("#jumpToid");
const jumpToOptionsElement = document.querySelector("#jumpToOptionsid");

const dropRightIconLinksList = function(){
    if(iconLinksElement.classList.contains("hidden"))
    {
        iconLinksElement.classList.remove("hidden");
        contactMeElement.classList.remove("text-orange-600");
        contactMeElement.classList.add("text-orange-800");
        contactMeElement.classList.add("text-bold");
    }
    else
    {
        iconLinksElement.classList.add("hidden");
        contactMeElement.classList.add("text-orange-600");
        contactMeElement.classList.remove("text-orange-800");
        contactMeElement.classList.remove("text-bold");
    }
}
const showEm4ElementOptions = function(){
    cardsElement41.replaceChild(em4ElementOptions,em4Element);
    em4ElementOptions.classList.remove("hidden");
}
const showEm4Element = function(){
    cardsElement41.replaceChild(em4Element, em4ElementOptions);
    em4ElementOptions.classList.add("hidden");
}
const showFlatElementOptions = function(){
    cardsElement41.replaceChild(flatElementOptions,flatElement);
    flatElementOptions.classList.remove("hidden");
}
const showFlatElement = function(){
    cardsElement41.replaceChild(flatElement, flatElementOptions);
    flatElementOptions.classList.add("hidden");
}
const showDaaElementOptions = function(){
    cardsElement41.replaceChild(daaElementOptions,daaElement);
    daaElementOptions.classList.remove("hidden");
}
const showDaaElement = function(){
    cardsElement41.replaceChild(daaElement, daaElementOptions);
    daaElementOptions.classList.add("hidden");
}
const showEsElementOptions = function(){
    cardsElement42.replaceChild(esElementOptions,esElement);
    esElementOptions.classList.remove("hidden");
}
const showEsElement = function(){
    cardsElement42.replaceChild(esElement, esElementOptions);
    esElementOptions.classList.add("hidden");
}
const showDbsElementOptions = function(){
    cardsElement42.replaceChild(dbsElementOptions,dbsElement);
    dbsElementOptions.classList.remove("hidden");
}
const showDbsElement = function(){
    cardsElement42.replaceChild(dbsElement, dbsElementOptions);
    dbsElementOptions.classList.add("hidden");
}
const showJumpToOptions = function(){
    if(jumpToOptionsElement.classList.contains("hidden"))
        jumpToOptionsElement.classList.remove("hidden");
    else
        jumpToOptionsElement.classList.add("hidden");   
}




homeElement.addEventListener("click", (function(){
    window.open("Home.html", "_self");
}));
aboutElement.addEventListener("click", function(){
    window.open("About.html", "_self");
});
contactMeElement.addEventListener("click", dropRightIconLinksList);
em4Element.addEventListener("click", showEm4ElementOptions);
em4ElementLeftArrowElement.addEventListener("click", showEm4Element);
flatElement.addEventListener("click", showFlatElementOptions);
flatElementLeftArrowElement.addEventListener("click", showFlatElement);
daaElement.addEventListener("click", showDaaElementOptions);
daaElementLeftArrowElement.addEventListener("click", showDaaElement);
esElement.addEventListener("click", showEsElementOptions);
esElementLeftArrowElement.addEventListener("click", showEsElement);
dbsElement.addEventListener("click", showDbsElementOptions);
dbsElementLeftArrowElement.addEventListener("click", showDbsElement);
jumpToElement.addEventListener("click", showJumpToOptions);
window.addEventListener("scroll", function(){
    const yScrollCoordinate = window.scrollY; 
    if(yScrollCoordinate>=104)
        jumpToParentElement.classList.add("top-8","fixed");
    else
        jumpToParentElement.classList.remove("top-8");
});





