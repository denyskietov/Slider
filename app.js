const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const container = document.querySelector('.container')
const sidebarLeft = document.querySelector('.sidebar-left')
const sidebarRight = document.querySelector('.sidebar-right')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebarLeft.style.top = `-${(slidesCount - 1) * 100}vh`
sidebarRight.style.top = `-${(slidesCount - 1) * 100}vh`

upButton.addEventListener('click', () => {
    changeSlide('up')
})

downButton.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
    }
    if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebarLeft.style.transform = `translateY(${activeSlideIndex * height}px)`
    sidebarRight.style.transform = `translateY(${activeSlideIndex * height}px)`
}
