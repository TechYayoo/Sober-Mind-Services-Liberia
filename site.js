/* Website dark theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Applying a sudden change if user selected theme-button
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Checks if current theme interface has some validation in the sitec dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bx-toggle-left' :'bx-toggle-right'

// Checks if any click on the theme 
if(selectedTheme) {
    // The outcome should happen immediately
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click',() => {
  // function adds or removes the dark theme icon
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // This automatically save whatever action that is being done.
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
  
});





/*  === Website  menu page is being shown ==== */
const  showSiteMenu = (siteToggleId, siteNavId) =>{
    const siteToggle = document.getElementById(siteToggleId),
    nav = document.getElementById(siteNavId);

    
    // Let's validate each variable as they exit
    if(siteToggle && siteNavId){
        siteToggle.addEventListener('click',()=>{
            // This automatically add show menu class to the div-tag with the
            nav.classList.toggle('show-menu')
        })

    }
}
// The function is  being called
showSiteMenu('nav-toggle', 'nav-menu');

/* Site Remove mobile menu */
const siteNavLInk = document.querySelectorAll('.nav__link');

function stieLinkAction(){
    const siteNavMenu = document.getElementById('nav-menu');
    // This when click on each nav__link, will definitely remove the nav-link class
     siteNavMenu.classList.remove('show-menu');

}
siteNavLInk.forEach(n => n.addEventListener('click',stieLinkAction));

/* ==== Website  S- Section A- Link */
const sections = document.querySelectorAll('secton[id]');

// Adding a function
function siteScrollLink(){
    const ScrollY = window.pageYOffset; // 

    // Accessing the global variable site_Section in local scope
    sections.forEach(current =>{
       const  section_Height = current.offsetHeight,
         section_Top  = current.offsetTop - 50,
         sectionId = current.getAttribute('id');

         // flow of control comes in
         if(scrollY > section_Top && scrollY <= section_Top + section_Height){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
         }
         else{
            document.querySelector('.nav__menu a[href *=' + sectionId +']').classList.remove('active-link');

         }

    })
}
window.addEventListener('scroll', scrollActive)

/* website background color change */
function siteScrollHeader(){
    // Variable const
    const header = document.getElementById('header')

    /*when scrolling and then encouter a viewport that is
      greater than 80%, add a scroll header class to the 
      header.
     */
   // if's statement comes in
   if(this.ScrollY >= 80){
    header.classList.add('scroll-header')
   }
   else{
    header.classList.remove('scroll-header')
    }

     
}
window.addEventListener('scroll', siteScrollHeader)


/* Website Scroll Top Function */

function scrollUp(){
    // Variable undergoes declaration and initialisation in thi scope
    const scrollUp = document.getElementById('scroll-up');
    if(this.ScrollY >= 560 )scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')


}
window.addEventListener('scroll',scrollUp);







