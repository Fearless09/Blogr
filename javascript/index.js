console.log("Hello")

let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.login-sign-up')
let menuOpen = document.querySelector('.menu-open')
let menuClose = document.querySelector('.menu-close')

menuBtn.addEventListener('click', () => {
    menu.toggleAttribute('data-visible')
        ? menuBtn.setAttribute("aria-expanded", true)
        : menuBtn.setAttribute("aria-expanded", false)
    ;
    
    menuClose.toggleAttribute('open')
    menuOpen.toggleAttribute('close')
})

