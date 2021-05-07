/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const btnLight = document.querySelector('#btn-light')
const iconLight = document.querySelector('.light')

btnLight.addEventListener('click', () => {
    document.body.classList.toggle('light-mode')
    const lightOff = iconLight.classList.contains('bx-bulb')
    const lightOn = iconLight.classList.contains('bxs-bulb')
    console.log(lightOff);

     if (iconLight.classList.contains('bx-bulb')) {
         iconLight.classList.replace('bx-bulb', 'bxs-bulb')
     } else {
         iconLight.classList.replace('bxs-bulb', 'bx-bulb')
     }

    // if (iconLight.classList.contains('bxs-bulb')) {
    //     iconLight.classList.replace('bxs-bulb', 'bx-bulb')
    // } 
})