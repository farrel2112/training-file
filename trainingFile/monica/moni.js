let menu = document.querySelector('.menu');
let subMenu = document.querySelector('.sous-menus').children;
const displayMenu = () =>{
    subMenu.style.display = 'block'
    menu.style.color = 'red'
}
menu.addEventListener('mouseover',displayMenu);
console.log(subMenu)