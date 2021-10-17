console.log('Мобильная версия с 600рх')

const slides = Array.from(document.querySelectorAll('.slide'))
const slider = document.querySelector(".slider")
const buttons = document.querySelectorAll('.button')
const dots = document.querySelector('.slider__dots')
const slider__text = document.querySelectorAll('.text')

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

    const [next, prev] = getNextPrev()
    const currentIndex = slides.indexOf(next)
    cleanse(activeSlide)
    activeSlide.style.transform = 'translateX(-100%)'

    next.classList.add('active')
    next.classList.add('fadeRight')
    next.style.transform = 'translateX(0)'
    getActiveDot()
    changeText(currentIndex, 'next')
}
function getPrevSlide() {
    const activeSlide = document.querySelector('.slide.active')
    const [next, prev] = getNextPrev()
    const currentIndex = slides.indexOf(prev)


    cleanse(activeSlide)
    activeSlide.style.transform = 'translateX(-100%)'

    prev.classList.add('active')
    prev.classList.add('fadeLeft')
    prev.style.transform = 'translateX(0)'
    getActiveDot()
    changeText(currentIndex, 'prev')
}

function cleanse(slide) {
    slide.classList.remove('active')
    slide.classList.remove('fadeLeft')
    slide.classList.remove('fadeRight')
}

//dots

slides.map(slide => {
    const dot = document.createElement('button')
    const circle = document.createElement('div')
    circle.classList.add('circle')
    // circle.setAttribute('type', 'image/svg+xml')
    // circle.setAttribute('data', './icons/circle.svg')
    const dot__wrapper = document.createElement('div')
    dot__wrapper.classList.add('dot__wrapper')
    dot__wrapper.appendChild(dot)
    dot.classList.add('dot')
    dot.appendChild(circle)
    dots.appendChild(dot__wrapper)
})

function getActiveDot() {
    const allDots = document.querySelectorAll('.dot')
    const activeSlide = document.querySelector('.slide.active')
    const activeIndex = slides.indexOf(activeSlide)

    allDots.forEach(el => el.classList.remove('active'))
    allDots[activeIndex].classList.add('active')

}
getActiveDot()

function clickDot() {
    const allDots = document.querySelectorAll('.dot')
    allDots.forEach((el, index) => el.addEventListener('click', () => {
        changeDot(index)
        changeText(index)
    }))
}
clickDot()

function changeDot(index) {
    slides.forEach(slide => {
        cleanse(slide)
    })
    slides[index].classList.add('fadeLeft')
    slides[index].classList.add('active')
    getActiveDot()
    getPosition()
}

//text slider

function changeText(index = 0, direction = 'prev') {
    slider__text.forEach(el => {
        cleanse(el)
    })
    slider__text[index].classList.add('active')
    if (direction !== 'next') slider__text[index].classList.add('fadeLeft')
    else slider__text[index].classList.add('fadeRight')

}
changeText()