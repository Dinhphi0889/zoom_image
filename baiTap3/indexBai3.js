let circle = document.getElementById('circle')

// let changeColor = document.addEventListener('mousemove')
circle.addEventListener('mouseenter', () => {
    let color = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
    circle.style.backgroundColor = `#${color}`
    console.log(color)
})
