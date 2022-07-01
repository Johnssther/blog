document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('sidebar--active');
})
document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('sidebar--active');
})

// let count = 0;
// setInterval(() => {
//     if (count === 5) {
//         document.getElementById('sidebar').classList.remove('sidebar--active');
//     }
//     if (count === 10) {
//         document.getElementById('sidebar').classList.add('sidebar--active');
//     }
//     console.log('aa');
//     count += 1;
// }, 1000)