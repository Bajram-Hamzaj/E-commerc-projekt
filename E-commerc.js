const menu = document.getElementById('menu');
const close = document.getElementById('close');
const show = document.getElementById('ul-section');

if(menu) {
    menu.addEventListener('click', () => {
        show.classList.add('activeMenu');
    }) 
}

if(close) {
    close.addEventListener('click', () => {
        show.classList.remove('activeMenu');
    }) 
}