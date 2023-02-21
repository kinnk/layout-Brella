


// nav
const login = document.querySelector('.drd-log__item');
const menu = document.querySelector('.menu');
const navBurgerBtn = document.querySelector('.menu-icon');

login.addEventListener('click', (event)=>{
    login.classList.toggle('_active');
})

navBurgerBtn.addEventListener('click', (event)=>{
    navBurgerBtn.classList.toggle('_active')
    menu.classList.toggle('_active');
})

const nav = document.querySelector('.nav');
let prevScroll = window.scrollY;
window.addEventListener('scroll', (event)=>{
    let curScroll = window.scrollY;
    if(prevScroll > curScroll){
        nav.style.top = 0;
    }else{
        nav.style.top = -100 + 'px';
    }
    prevScroll = curScroll;
})
// /nav
// header
const headerDrdBtn = document.querySelector('.drd__view');
const section1 = document.querySelector('.section-1__container');
headerDrdBtn.addEventListener('click', (event)=>{
    headerDrdBtn.classList.toggle('_active');
})
// /header


// effect onload section 1
window.onscroll = () =>{
    if (window.scrollY > 500){
        section1.style.opacity = 1;
    }
}

// tabs
function tabs(){
    const list = document.querySelectorAll('.section-2__list-item');
    const contentItem = document.querySelectorAll('.content__item');
    list.forEach(item => {
        item.addEventListener('click',(event)=>{
            let tabId = item.getAttribute('data-tab')
            let cont = document.querySelector(tabId);
            console.log(tabId)
            list.forEach(el=>{
                el.classList.remove('_active')
            });
            contentItem.forEach(item =>{
                item.classList.remove('_active');
            })
            item.classList.add('_active');
            cont.classList.add('_active'); 
        })
    })
} tabs();



