document.querySelector('#hamburger').addEventListener('click', (e) => {
    const navbar = document.querySelector('.left');
    const pos = navbar.offsetLeft;
    if (pos < 0) navbar.style.left = '0px';
    else navbar.style.left = '-100%';
});
