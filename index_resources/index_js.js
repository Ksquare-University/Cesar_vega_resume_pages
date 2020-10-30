function navbarToggle(){
    navbar_main_col =document.getElementById("navbar_main_col")

    if(!navbar_main_col.style.display){
        navbar_main_col.style.display = "none"
    }

    if(navbar_main_col.style.display == "none"){
        navbar_main_col.style.display = "block"
    } else{
        navbar_main_col.style.display = "none"
    }
}

document.getElementById("navbarButton").addEventListener("click", navbarToggle);



window.onresize = showNavBar;

function showNavBar(){
    if(window.innerWidth > 1200){
        navbar_main_col.style.display = "block"
    }
}




