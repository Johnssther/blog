// sidebar
document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('sidebar--active');
})
document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('sidebar--active');
})

// modal
document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal').classList.toggle('modal--close');
    setTimeout(() => {
        document.querySelectorAll('.modal_content')[0].classList.add('modal_content--hidden');
    }, 500)
});

document.querySelectorAll('.modal_content')[0].addEventListener('click', () => {
    document.getElementById('modal').classList.toggle('modal--close');
    setTimeout(() => {
        document.querySelectorAll('.modal_content')[0].classList.add('modal_content--hidden');
    }, 500)
});

document.getElementById('open-modal').addEventListener('click', () => {
    document.querySelectorAll('.modal_content')[0].classList.remove('modal_content--hidden');
    setTimeout(() => {
        document.getElementById('modal').classList.remove('modal--close');
    }, 50)
});

