const skeletons = document.querySelectorAll('.skeleton');

setTimeout(() => {
    skeletons.forEach(item => {
        item.classList.remove('skeleton');
    })
}, 2000);