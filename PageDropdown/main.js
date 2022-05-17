const menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    navbar.classList.remove('hide')
    navbar.classList.add('show');
});

close.addEventListener('click', () => {
    navbar.classList.remove('show');
    navbar.classList.add('hide');
})