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


// =======Dark Mode =======
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle()
})