const navBarElement = document.querySelector("#navBarid");
const contactMeElement = document.querySelector("#contactid");
const iconLinksElement = document.querySelector("#iconLinksid");
const aboutElement = document.querySelector("#aboutid");
const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const aboutContentElement = document.querySelector("#aboutcontentid");
const homeElement = document.querySelector("#homeid");
const cardsElement1 = document.querySelector("#cardsid1");
const cardsElement11 = document.querySelector("#cardsid11");
const cardsElement12 = document.querySelector("#cardsid12");
const cardsElement2 = document.querySelector("#cardsid2");
const cardsElement21 = document.querySelector("#cardsid21");
const cardsElement22 = document.querySelector("#cardsid22");
const cardsElement3 = document.querySelector("#cardsid3");
const cardsElement31 = document.querySelector("#cardsid31");
const cardsElement32 = document.querySelector("#cardsid32");
const cardsElement4 = document.querySelector("#cardsid4");
const cardsElement41 = document.querySelector("#cardsid41");
const cardsElement42 = document.querySelector("#cardsid42");

const em1Element = document.querySelector("#em1id");
const em1ElementOptions = document.querySelector("#em1Optionsid");
const em1ElementLeftArrowElement = document.querySelector("#em1LeftArrowid");
const engElement = document.querySelector("#engid");
const engElementOptions = document.querySelector("#engOptionsid");
const engElementLeftArrowElement = document.querySelector("#engLeftArrowid");
const beElement = document.querySelector("#beid");
const beElementOptions = document.querySelector("#beOptionsid");
const beElementLeftArrowElement = document.querySelector("#beLeftArrowid");
const phyElement = document.querySelector("#phyid");
const phyElementOptions = document.querySelector("#phyOptionsid");
const phyElementLeftArrowElement = document.querySelector("#phyLeftArrowid");
const mosElement = document.querySelector("#mosid");
const mosElementOptions = document.querySelector("#mosOptionsid");
const mosElementLeftArrowElement = document.querySelector("#mosLeftArrowid");
const bmeElement = document.querySelector("#bmeid");
const bmeElementOptions = document.querySelector("#bmeOptionsid");
const bmeElementLeftArrowElement = document.querySelector("#bmeLeftArrowid");

const em2Element = document.querySelector("#em2id");
const em2ElementOptions = document.querySelector("#em2Optionsid");
const em2ElementLeftArrowElement = document.querySelector("#em2LeftArrowid");
const evsElement = document.querySelector("#evsid");
const evsElementOptions = document.querySelector("#evsOptionsid");
const evsElementLeftArrowElement = document.querySelector("#evsLeftArrowid");
const psucElement = document.querySelector("#psucid");
const psucElementOptions = document.querySelector("#psucOptionsid");
const psucElementLeftArrowElement = document.querySelector("#psucLeftArrowid");
const betElement = document.querySelector("#betid");
const betElementOptions = document.querySelector("#betOptionsid");
const betElementLeftArrowElement = document.querySelector("#betLeftArrowid");
const chemElement = document.querySelector("#chemid");
const chemElementOptions = document.querySelector("#chemOptionsid");
const chemElementLeftArrowElement = document.querySelector("#chemLeftArrowid");
const bioElement = document.querySelector("#bioid");
const bioElementOptions = document.querySelector("#bioOptionsid");
const bioElementLeftArrowElement = document.querySelector("#bioLeftArrowid");

const em3Element = document.querySelector("#em3id");
const em3ElementOptions = document.querySelector("#em3Optionsid");
const em3ElementLeftArrowElement = document.querySelector("#em3LeftArrowid");
const coaElement = document.querySelector("#coaid");
const coaElementOptions = document.querySelector("#coaOptionsid");
const coaElementLeftArrowElement = document.querySelector("#coaLeftArrowid");
const dsElement = document.querySelector("#dsid");
const dsElementOptions = document.querySelector("#dsOptionsid");
const dsElementLeftArrowElement = document.querySelector("#dsLeftArrowid");
const dsdElement = document.querySelector("#dsdid");
const dsdElementOptions = document.querySelector("#dsdOptionsid");
const dsdElementLeftArrowElement = document.querySelector("#dsdLeftArrowid");
const oopsElement = document.querySelector("#oopsid");
const oopsElementOptions = document.querySelector("#oopsOptionsid");
const oopsElementLeftArrowElement = document.querySelector("#oopsLeftArrowid");

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

const showEm1ElementOptions = function(){
    cardsElement11.replaceChild(em1ElementOptions,em1Element);
    em1ElementOptions.classList.remove("hidden");
}
const showEm1Element = function(){
    cardsElement11.replaceChild(em1Element, em1ElementOptions);
    em1ElementOptions.classList.add("hidden");
}
const showEngElementOptions = function(){
    cardsElement11.replaceChild(engElementOptions,engElement);
    engElementOptions.classList.remove("hidden");
}
const showEngElement = function(){
    cardsElement11.replaceChild(engElement, engElementOptions);
    engElementOptions.classList.add("hidden");
}
const showBeElementOptions = function(){
    cardsElement11.replaceChild(beElementOptions,beElement);
    beElementOptions.classList.remove("hidden");
}
const showBeElement = function(){
    cardsElement11.replaceChild(beElement, beElementOptions);
    beElementOptions.classList.add("hidden");
}
const showPhyElementOptions = function(){
    cardsElement12.replaceChild(phyElementOptions,phyElement);
    phyElementOptions.classList.remove("hidden");
}
const showPhyElement = function(){
    cardsElement12.replaceChild(phyElement, phyElementOptions);
    phyElementOptions.classList.add("hidden");
}
const showMosElementOptions = function(){
    cardsElement12.replaceChild(mosElementOptions, mosElement);
    mosElementOptions.classList.remove("hidden");
}
const showMosElement = function(){
    cardsElement12.replaceChild(mosElement, mosElementOptions);
    mosElementOptions.classList.add("hidden");
}
const showBmeElementOptions = function(){
    cardsElement12.replaceChild(bmeElementOptions,bmeElement);
    bmeElementOptions.classList.remove("hidden");
}
const showBmeElement = function(){
    cardsElement12.replaceChild(bmeElement, bmeElementOptions);
    bmeElementOptions.classList.add("hidden");
}


const showEm2ElementOptions = function(){
    cardsElement21.replaceChild(em2ElementOptions,em2Element);
    em2ElementOptions.classList.remove("hidden");
}
const showEm2Element = function(){
    cardsElement21.replaceChild(em2Element, em2ElementOptions);
    em2ElementOptions.classList.add("hidden");
}
const showEvsElementOptions = function(){
    cardsElement21.replaceChild(evsElementOptions,evsElement);
    evsElementOptions.classList.remove("hidden");
}
const showEvsElement = function(){
    cardsElement21.replaceChild(evsElement, evsElementOptions);
    evsElementOptions.classList.add("hidden");
}
const showPsucElementOptions = function(){
    cardsElement21.replaceChild(psucElementOptions,psucElement);
    psucElementOptions.classList.remove("hidden");
}
const showPsucElement = function(){
    cardsElement21.replaceChild(psucElement, psucElementOptions);
    psucElementOptions.classList.add("hidden");
}
const showBetElementOptions = function(){
    cardsElement22.replaceChild(betElementOptions,betElement);
    betElementOptions.classList.remove("hidden");
}
const showBetElement = function(){
    cardsElement22.replaceChild(betElement, betElementOptions);
    betElementOptions.classList.add("hidden");
}
const showChemElementOptions = function(){
    cardsElement22.replaceChild(chemElementOptions,chemElement);
    chemElementOptions.classList.remove("hidden");
}
const showChemElement = function(){
    cardsElement22.replaceChild(chemElement, chemElementOptions);
    chemElementOptions.classList.add("hidden");
}
const showBioElementOptions = function(){
    cardsElement22.replaceChild(bioElementOptions,bioElement);
    bioElementOptions.classList.remove("hidden");
}
const showBioElement = function(){
    cardsElement22.replaceChild(bioElement, bioElementOptions);
    bioElementOptions.classList.add("hidden");
}




const showEm3ElementOptions = function(){
    cardsElement31.replaceChild(em3ElementOptions,em3Element);
    em3ElementOptions.classList.remove("hidden");
}
const showEm3Element = function(){
    cardsElement31.replaceChild(em3Element, em3ElementOptions);
    em3ElementOptions.classList.add("hidden");
}
const showCoaElementOptions = function(){
    cardsElement31.replaceChild(coaElementOptions,coaElement);
    coaElementOptions.classList.remove("hidden");
}
const showCoaElement = function(){
    cardsElement31.replaceChild(coaElement, coaElementOptions);
    coaElementOptions.classList.add("hidden");
}
const showDsElementOptions = function(){
    cardsElement31.replaceChild(dsElementOptions,dsElement);
    dsElementOptions.classList.remove("hidden");
}
const showDsElement = function(){
    cardsElement31.replaceChild(dsElement, dsElementOptions);
    dsElementOptions.classList.add("hidden");
}
const showDsdElementOptions = function(){
    cardsElement32.replaceChild(dsdElementOptions,dsdElement);
    dsdElementOptions.classList.remove("hidden");
}
const showDsdElement = function(){
    cardsElement32.replaceChild(dsdElement, dsdElementOptions);
    dsdElementOptions.classList.add("hidden");
}
const showOopsElementOptions = function(){
    cardsElement32.replaceChild(oopsElementOptions,oopsElement);
    oopsElementOptions.classList.remove("hidden");
}
const showOopsElement = function(){
    cardsElement32.replaceChild(oopsElement, oopsElementOptions);
    oopsElementOptions.classList.add("hidden");
}


const showEm4ElementOptions = function(){
    cardsElement41.replaceChild(em4ElementOptions,em4Element);
    em4ElementOptions.classList.remove("hidden");
    console.log("4 Worked");
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

em1Element.addEventListener("click", showEm1ElementOptions);
em1ElementLeftArrowElement.addEventListener("click", showEm1Element);
engElement.addEventListener("click", showEngElementOptions);
engElementLeftArrowElement.addEventListener("click", showEngElement);
beElement.addEventListener("click", showBeElementOptions);
beElementLeftArrowElement.addEventListener("click", showBeElement);
phyElement.addEventListener("click", showPhyElementOptions);
phyElementLeftArrowElement.addEventListener("click", showPhyElement);
mosElement.addEventListener("click", showMosElementOptions);
mosElementLeftArrowElement.addEventListener("click", showMosElement);
bmeElement.addEventListener("click", showBmeElementOptions);
bmeElementLeftArrowElement.addEventListener("click", showBmeElement);

em2Element.addEventListener("click", showEm2ElementOptions);
em2ElementLeftArrowElement.addEventListener("click", showEm2Element);
evsElement.addEventListener("click", showEvsElementOptions);
evsElementLeftArrowElement.addEventListener("click", showEvsElement);
psucElement.addEventListener("click", showPsucElementOptions);
psucElementLeftArrowElement.addEventListener("click", showPsucElement);
betElement.addEventListener("click", showBetElementOptions);
betElementLeftArrowElement.addEventListener("click", showBetElement);
chemElement.addEventListener("click", showChemElementOptions);
chemElementLeftArrowElement.addEventListener("click", showChemElement);
bioElement.addEventListener("click", showBioElementOptions);
bioElementLeftArrowElement.addEventListener("click", showBioElement);

em3Element.addEventListener("click", showEm3ElementOptions);
em3ElementLeftArrowElement.addEventListener("click", showEm3Element);
coaElement.addEventListener("click", showCoaElementOptions);
coaElementLeftArrowElement.addEventListener("click", showCoaElement);
dsElement.addEventListener("click", showDsElementOptions);
dsElementLeftArrowElement.addEventListener("click", showDsElement);
dsdElement.addEventListener("click", showDsdElementOptions);
dsdElementLeftArrowElement.addEventListener("click", showDsdElement);
oopsElement.addEventListener("click", showOopsElementOptions);
oopsElementLeftArrowElement.addEventListener("click", showOopsElement);

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

// eomElement.addEventListener("click", showEomElementOptions);
// eomElementLeftArrowElement.addEventListener("click", showEomElement);
// pocElement.addEventListener("click", showPocElementOptions);
// pocElementLeftArrowElement.addEventListener("click", showPocElement);
// seElement.addEventListener("click", showSeElementOptions);
// seElementLeftArrowElement.addEventListener("click", showSeElement);
// osElement.addEventListener("click", showOsElementOptions);
// osElementLeftArrowElement.addEventListener("click", showOsElement);
// cnElement.addEventListener("click", showCnElementOptions);
// cnElementLeftArrowElement.addEventListener("click", showCnElement);

// eefmElement.addEventListener("click", showEefmElementOptions);
// eefmElementLeftArrowElement.addEventListener("click", showEefmElement);
// pcaElement.addEventListener("click", showPcaElementOptions);
// pcaElementLeftArrowElement.addEventListener("click", showPcaElement);
// cdElement.addEventListener("click", showCdElementOptions);
// cdElementLeftArrowElement.addEventListener("click", showCdElement);

jumpToElement.addEventListener("click", showJumpToOptions);
window.addEventListener("scroll", function(){
    const yScrollCoordinate = window.scrollY; 
    if(yScrollCoordinate>=104)
        jumpToParentElement.classList.add("top-8","fixed");
    else
        jumpToParentElement.classList.remove("top-8");
});





