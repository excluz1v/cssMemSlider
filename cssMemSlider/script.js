const slides = Array.from(document.querySelectorAll('.slide'))
const slider = document.querySelector(".slider")
const buttons = document.querySelectorAll('.button')

function getNextPrev() {
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide)
    let next, prev
    if (activeIndex == slides.length - 1) {
        next = slides[0]
    } else {
        next = slides[activeIndex + 1]
    }
    if (activeIndex === 0) {
        prev = slides[slides.length - 1]
    } else prev = slides[activeIndex - 1]
    return [next, prev]
}
function getPosition() {
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide)
    const [next, prev] = getNextPrev()

    slides.map((slide, index) => {
        if (index === activeIndex) {
            slide.style.transform = 'translateX(0)'
        } else if (slide === prev) {
            slide.style.transform = 'translateX(-100%)'
        } else if (slide === next) {
            slide.style.transform = 'translateX(100%)'
        } else slide.style.transform = 'translateX(100%)'
    })
}
getPosition()


buttons.forEach(button => {
    button.onclick = () => {
        if (button.classList.contains('next')) getNextSlider()
        else if (button.classList.contains('prev')) getPrevSlide()
    }
})

function getNextSlider() {
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide)
    const [next, prev] = getNextPrev()

    activeSlide.classList.remove('active')
    activeSlide.classList.remove('fadeRight')
    activeSlide.style.transform = 'translateX(-100%)'

    next.classList.add('active')
    next.classList.add('fadeRight')
    next.style.transform = 'translateX(0)'
    // getPosition()
}
function getPrevSlide() {
    console.log('prev')
}