// ======Change Theme Color =======

document.querySelector('.style-switcher-toggler').onclick = () =>{
    document.querySelector('.style-switcher').classList.toggle('active')
}
let themeButtons = document.querySelectorAll('.theme-button')
themeButtons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color')
        document.querySelector(':root').style.setProperty('--pink-color', dataColor)
    })
})


// =======Dark Mode =======const dayNight = document.querySelector(".day-night")
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("ri-sun-line")
    dayNight.querySelector("i").classList.toggle("ri-moon-line")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("ri-sun-line")
    }
    else
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("ri-moon-line")
    }
})


// ===== Scroll ==== //

ScrollReveal({
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.heading-1-secondary', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home-img', {delay: 500, origin: 'bottom'});