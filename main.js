'use strinct'

const navbar            = document.querySelector('#navbar'                  );
const navbar_menu_item  = document.querySelectorAll('.navbar__menu__item'   );
const navbarMenu        = document.querySelector('.navbar__menu'            );
const contact           = document.querySelector('.home__contact'           );
const home_container    = document.querySelector('.home__container'         );

document.addEventListener('scroll', ()=> {
    let scrollY         = window.scrollY;
    let navbarHeight    = navbar.getBoundingClientRect().height;
    let homeHeight      = home_container.getBoundingClientRect().height;

    if(scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
    
    // let opacity = (homeHeight - scrollY)/homeHeight;
    let opacity = 1 - scrollY/homeHeight;
    if(opacity > 1 || opacity < 0){
        return;
    }

    home_container.style.opacity = opacity;

    console.log(`opacity : ${opacity}`);
    
});

navbarMenu.addEventListener('click', (e) => {
    scrollTo(e);
});

contact.addEventListener('click', (e) => {
    scrollTo(e);
});

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

