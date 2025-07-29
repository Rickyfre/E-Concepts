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