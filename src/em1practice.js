const aboutElement = document.querySelector("#aboutid");
const homeElement = document.querySelector("#homeid");
const contactMeElement = document.querySelector("#contactid");
const iconLinksElement = document.querySelector("#iconLinksid");


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

homeElement.addEventListener("click", (function(){
    window.open("Home.html", "_self");
}));
aboutElement.addEventListener("click", function(){
     window.open("About.html", "_self");
});
contactMeElement.addEventListener("click", dropRightIconLinksList);


//Functionality

const regular2022Element = document.querySelector("#regular2022id");
const regular2022qpElement = document.querySelector("#regular2022qpid");
const makeup2022Element = document.querySelector("#makeup2022id");
const makeup2022qpElement = document.querySelector("#makeup2022qpid");
const makeup2022Element2 = document.querySelector("#makeup2022-2id");
const makeup2022qpElement2 = document.querySelector("#makeup2022-2qpid");
const lateadmissions2022Element = document.querySelector("#lateadmissions2022id");
const lateadmissions2022qpElement = document.querySelector("#lateadmissions2022qpid");
const makeup2020Element = document.querySelector("#makeup2020id");
const makeup2020qpElement = document.querySelector("#makeup2020qpid");
const regular2019Element = document.querySelector("#regular2019id");
const regular2019qpElement = document.querySelector("#regular2019qpid");
const makeup2019Element = document.querySelector("#makeup2019id");
const makeup2019qpElement = document.querySelector("#makeup2019qpid");
const regular2018Element = document.querySelector("#regular2018id");
const regular2018qpElement = document.querySelector("#regular2018qpid");
const makeup2018Element = document.querySelector("#makeup2018id");
const makeup2018qpElement = document.querySelector("#makeup2018qpid");
const regular2017Element = document.querySelector("#regular2017id");
const regular2017qpElement = document.querySelector("#regular2017qpid");
const makeup2017Element = document.querySelector("#makeup2017id");
const makeup2017qpElement = document.querySelector("#makeup2017qpid");





regular2022Element.addEventListener("click", function(){
    if(regular2022qpElement.classList.contains("hidden"))
    {
        regular2022qpElement.classList.remove("hidden");
        regular2022Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        regular2022qpElement.classList.add("hidden");
        regular2022Element.classList.remove("border-b","border-orange-600","pb-2");
    }
});
makeup2022Element.addEventListener("click", function(){
    if(makeup2022qpElement.classList.contains("hidden"))
    {
        makeup2022qpElement.classList.remove("hidden");
        makeup2022Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        makeup2022qpElement.classList.add("hidden");
        makeup2022Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
makeup2022Element2.addEventListener("click", function(){
    if(makeup2022qpElement2.classList.contains("hidden"))
    {
        makeup2022qpElement2.classList.remove("hidden");
        makeup2022Element2.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        makeup2022qpElement2.classList.add("hidden");
        makeup2022Element2.classList.remove("border-b","bordder-white","pb-2");
    }
});
lateadmissions2022Element.addEventListener("click", function(){
    if(lateadmissions2022qpElement.classList.contains("hidden"))
    {
        lateadmissions2022qpElement.classList.remove("hidden");
        lateadmissions2022Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        lateadmissions2022qpElement.classList.add("hidden");
        lateadmissions2022Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
makeup2020Element.addEventListener("click", function(){
    if(makeup2020qpElement.classList.contains("hidden"))
    {
        makeup2020qpElement.classList.remove("hidden");
        makeup2020Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        makeup2020qpElement.classList.add("hidden");
        makeup2020Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
regular2019Element.addEventListener("click", function(){
    if(regular2019qpElement.classList.contains("hidden"))
    {
        regular2019qpElement.classList.remove("hidden");
        regular2019Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        regular2019qpElement.classList.add("hidden");
        regular2019Element.classList.remove("border-b","bordder-white","pb-2");
    }
    console.log("hi");
});
makeup2019Element.addEventListener("click", function(){
    if(makeup2019qpElement.classList.contains("hidden"))
    {
        makeup2019qpElement.classList.remove("hidden");
        makeup2019Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        makeup2019qpElement.classList.add("hidden");
        makeup2019Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
regular2018Element.addEventListener("click", function(){
    if(regular2018qpElement.classList.contains("hidden"))
    {
        regular2018qpElement.classList.remove("hidden");
        regular2018Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        regular2018qpElement.classList.add("hidden");
        regular2018Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
makeup2018Element.addEventListener("click", function(){
    if(makeup2018qpElement.classList.contains("hidden"))
    {
        makeup2018qpElement.classList.remove("hidden");
        makeup2018Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        makeup2018qpElement.classList.add("hidden");
        makeup2018Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
regular2017Element.addEventListener("click", function(){
    if(regular2017qpElement.classList.contains("hidden"))
    {
        regular2017qpElement.classList.remove("hidden");
        regular2017Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        regular2017qpElement.classList.add("hidden");
        regular2017Element.classList.remove("border-b","bordder-white","pb-2");
    }
});
makeup2017Element.addEventListener("click", function(){
    if(makeup2017qpElement.classList.contains("hidden"))
    {
        makeup2017qpElement.classList.remove("hidden");
        makeup2017Element.classList.add("border-b","bordder-white","pb-2");
    }
    else
    {
        makeup2017qpElement.classList.add("hidden");
        makeup2017Element.classList.remove("border-b","bordder-white","pb-2");
    }
});