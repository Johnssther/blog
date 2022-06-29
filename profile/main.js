document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('sidebar--active');
})
document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('sidebar--active');
})
