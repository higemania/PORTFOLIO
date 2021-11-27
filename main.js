'use strinct'

const navbar            = document.querySelector('#navbar'                  );
const navbar_menu_item  = document.querySelectorAll('.navbar__menu__item'   );
const navbarMenu        = document.querySelector('.navbar__menu'            );
const home_contact      = document.querySelector('.home__contact'           );
const home_container    = document.querySelector('.home__container'         );
const arrow_up          = document.querySelector('.arrow__up'               );
const contact           = document.querySelector('#contact'                 );
const work_categories   = document.querySelector('.work__categories'        );
const work_projects     = document.querySelector('.work__projects'          );
const project           = document.querySelectorAll('.project'                 );    

let navbarHeight        = navbar.getBoundingClientRect().height;
let homeHeight          = home_container.getBoundingClientRect().height;
let contactTop          = contact.offsetTop;

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

//Arrow Btn visible Control
document.addEventListener('scroll', ()=> {
    if(window.scrollY > (homeHeight/2)){
        arrow_up.classList.add('visible');
    }else{
        arrow_up.classList.remove('visible');
    }

});
//Menubar Scroll;
navbarMenu.addEventListener('click', (e) => {
    scrollTo(e);
});

//contanct btn Scroll;
home_contact.addEventListener('click', (e) => {
    scrollTo(e);
});

//Arrow Up Scroll;
arrow_up.addEventListener('click', () => {
    window.scrollTo( {top: 0, left: 0, behavior: 'smooth'} );
});

//work_categories
work_categories.addEventListener('click', (e) => {

    work_projects.classList.add('anime-out');

    setTimeout(()=>{
        project.forEach((item)=>{
            if(e.target.dataset.btn_type === '*' || item.dataset.project_type === e.target.dataset.btn_type){
                item.classList.remove('hide');
            }else{
                item.classList.add('hide');
            }
        }, this);

        work_projects.classList.remove('anime-out');
    }, 300);
 
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