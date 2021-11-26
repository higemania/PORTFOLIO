'use strinct'

const navbar = document.querySelector('#navbar');
// const navbar_menu_item = document.querySelector('.navbar__menu__item');
const navbarMenu = document.querySelector('.navbar__menu');

document.addEventListener('scroll', ()=> {
    let scrollY         = window.scrollY;
    let navbarHeight    = navbar.getBoundingClientRect().height;

    if(scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

navbarMenu.addEventListener('click', (e)=>{

    let section_name    = e.target.textContent.toLowerCase();
    let obj             = (document.querySelector(`#${section_name}`)) ? document.querySelector(`#${section_name}`) : document.querySelector(`#works`);
    let section_top     = obj.offsetTop - navbar.getBoundingClientRect().height;

    window.scrollTo( {
        top: section_top,
        left: 0,
        behavior: 'smooth'
    });
});

