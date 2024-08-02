const subir = document.getElementById('atajoUp');


function handleScroll() {
    if (window.scrollY > 100) {
        subir.classList.add('active');
    } else {
        subir.classList.remove('active');
    }
}

window.addEventListener('scroll', handleScroll);