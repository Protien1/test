const navBurger = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')
const navBurgerDark = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')




const handleNav = () => {
   nav.classList.toggle('nav--active')

   navBurgerDark.classList.remove('black-bars-color')

   allNavItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('nav--active')

    })
   })

   handleNavItemsAnimation();
}

const handleNavItemsAnimation = () =>{
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleObserver = () =>{
    const currentSection = window.scrollY;

    allSections.forEach(section =>{
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBurgerDark.classList.add('black-bars-color')
        } else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBurgerDark.classList.remove('black-bars-color')
        }
    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

navBurger.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);