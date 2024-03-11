const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const togglemenu = () => {
 menuElem.classList.toggle('menu-active');
 burger.classList.toggle('humburger-menu-active');
}

burger.addEventListener('click', () => {
 togglemenu()
})