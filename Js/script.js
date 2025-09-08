const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const menu = document.getElementById('menu');
const info = document.getElementById('info')
menu.addEventListener('click', () => {
    content1.classList.toggle('show-menu');
    content2.classList.toggle('menu-open');
    menu.classList.toggle('open')
})
info.addEventListener('click', () => {
    content1.classList.toggle('show-menu');
    content2.classList.toggle('menu-open');
    menu.classList.toggle('open')
})
