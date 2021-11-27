'use strinct'

const navbar            = document.querySelector('#navbar'                  );
const navbar_menu_item  = document.querySelectorAll('.navbar__menu__item'   );
const navbarMenu        = document.querySelector('.navbar__menu'            );
const contact           = document.querySelector('.home__contact'           );
const home_container    = document.querySelector('.home__container'         );
const arrow_up          = document.querySelector('.arrow__up'               );

let navbarHeight        = navbar.getBoundingClientRect().height;
let homeHeight          = home_container.getBoundingClientRect().height;

//Navbar Control
document.addEventListener('scroll', ()=> {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Home Control
document.addEventListener('scroll', ()=> {
    // let opacity = (homeHeight - scrollY)/homeHeight;
    let opacity = 1 - scrollY/homeHeight;
    if(opacity > 1 || opacity < 0){
        return;
    }
    home_container.style.opacity = opacity;
});

//Arrow Btn Control
document.addEventListener('scroll', ()=> {
    if(window.scrollY > (homeHeight/2)){
        arrow_up.classList.add('visible');
    }else{
        arrow_up.classList.remove('visible');
    }
});

navbarMenu.addEventListener('click', (e) => {
    scrollTo(e);
});

contact.addEventListener('click', (e) => {
    scrollTo(e);
});

arrow_up.addEventListener('click', () => {
    window.scrollTo( {top: 0, left: 0, behavior: 'smooth'} );
})

let resetMenuBtn = (target) => {
    navbar_menu_item.forEach((item)=>{
        item.classList.remove('active');
    });

    target.classList.add('active');
}

let scrollTo = (e) => {
    if(!e.target.dataset.link) {
        return;
    }

    resetMenuBtn(e.target);

    let target_section = document.querySelector(e.target.dataset.link);
    let section_top    = target_section.offsetTop - navbar.getBoundingClientRect().height;

    window.scrollTo( {top: section_top, left: 0, behavior: 'smooth'} );
}

