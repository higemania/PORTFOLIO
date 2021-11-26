'use strinct'

const navbar = document.querySelector("#navbar");

document.addEventListener('scroll', ()=> {
    let scrollY         = window.scrollY;
    let navbarHeight    = navbar.getBoundingClientRect().height;

    if(scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});