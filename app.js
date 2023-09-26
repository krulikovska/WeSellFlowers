const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const contactMenu = document.querySelector("#contact-page");
    const testMenu = document.querySelector("test-page");
    let scrollPos = window.scrollY; 
    //console.log(scrollPos);

    // adds the highlight class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 1900) {
        contactMenu.classList.add("highlight");
        testMenu.classList.remove("highlight");
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2700) {
        contactMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    }
    

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove("highlight");

    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//Close mobile Menu when clicking on Menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
}

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);



