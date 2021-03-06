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
const project           = document.querySelectorAll('.project'              );    
const category_btn      = document.querySelectorAll('.category__btn'        );    
const navbar_toggle_btn = document.querySelector('.navbar__toggle-btn'   );    
const sections          = document.querySelectorAll('section'         );    
const sectionIds        = Array.from(sections).map((elem)=> `${elem.id}`);

let navbarHeight        = navbar.getBoundingClientRect().height;
let homeHeight          = home_container.getBoundingClientRect().height;
let contactTop          = contact.offsetTop;
let selectedNavIdx      = 0;

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
    resetBtnActive(navbar_menu_item, e.target);
    scrollTo(e);
    navbarMenu.classList.remove('open');
});

//contanct btn Scroll;
home_contact.addEventListener('click', (e) => {
    const idx = sectionIds.indexOf(e.target.dataset.link.replace("#",""));
    resetBtnActive(navbar_menu_item, navbar_menu_item.item(idx));
    scrollTo(e);
});

//Arrow Up Scroll;
arrow_up.addEventListener('click', () => {
    resetBtnActive(navbar_menu_item, navbar_menu_item.item(0));
    window.scrollTo( {top: 0, left: 0, behavior: 'smooth'} );
});

//work_categories
work_categories.addEventListener('click', (e) => {

    resetBtnActive(category_btn, e.target);

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

//navbar_toggle_btn event add
navbar_toggle_btn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

/* Active Button reset func */
let resetBtnActive = (targetGroup, target) => {
    targetGroup.forEach((item)=>{
        item.classList.remove('active');
    });

    target.classList.add('active');
}

let scrollTo = (e) => {
    if(!e.target.dataset.link) {
        return;
    }

    let target_section = document.querySelector(e.target.dataset.link);
    let section_top    = target_section.offsetTop - navbar.getBoundingClientRect().height;

    window.scrollTo( {top: section_top, left: 0, behavior: 'smooth'} );
}

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0){

            selectedNavIdx = sectionIds.indexOf(`${entry.target.id}`);
            console.log(`>>>>>>> selectedNavIdx : ${selectedNavIdx}`);            

            if(entry.boundingClientRect.y > 0){
                selectedNavIdx--;
            }else{
                selectedNavIdx++;
            }
        }
    });
};

const options = {
    root: null, //viewport
    rootMargin: '0px', // +- margin  > ?????? ???????????? ????????? ?????????...css???????????? ??????
    threshold: 0.2 //0~1(100%) ??? % ??????????????? ?????? ??????????(Default 0);
};

const observer          = new IntersectionObserver(callback, options);

sections.forEach((section)=>{
    observer.observe(section);
});


window.addEventListener('wheel', ()=>{

    if(window.scrollY === 0){
        selectedNavIdx = 0;

    }else if(window.scrollY + window.innerHeight > (document.body.clientHeight*0.99)){
        selectedNavIdx = navbar_menu_item.length - 1;
    }

    resetBtnActive(navbar_menu_item, navbar_menu_item.item(selectedNavIdx));
});