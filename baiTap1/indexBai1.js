let borderImg = document.getElementById('border-img')
let img = document.getElementById('img-cybersoft')
borderImg.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.2)'
})
borderImg.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)'
})