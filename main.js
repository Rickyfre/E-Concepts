console.log("JavaScript is linked!");


var tablinks = document.getElementsByClassName("tab__links");
var tabcontents = document.getElementsByClassName("tab__contents");

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active__link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active__tab");
    }

    //Add active styles to the clicked tab and its content
    event.currentTarget.classList.add("active__link");

    document.getElementById(tabname).classList.add("active__tab");
}


// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


function closeNav() {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)



