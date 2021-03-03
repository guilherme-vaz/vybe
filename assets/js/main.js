/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // // add padding to body
            // bodypd.classList.toggle('body-pd')
            // // add padding to header
            // headerpd.classList.toggle('body-pd')
        })
    }
} 

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
const navToggle = document.querySelector('.nav__toggle')

function linkAction(){
    const navMenu = document.getElementById('nav-bar')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

navToggle.addEventListener('click', linkAction)

/*======  HOME SECTION THREE DOTS =======*/
var homeText = document.querySelector('.home__description-text');
var dotOne = document.querySelector('.dot-one');
var dotTwo = document.querySelector('.dot-two');
var dotThree = document.querySelector('.dot-three');

dotTwo.classList.add("small-dot")
dotThree.classList.add("small-dot")

dotOne.addEventListener("click", function(){
    homeText.textContent= "No idea too big, too small or complex, we will work together to simplify the process."
    if(dotOne.classList.contains("small-dot")){
        dotOne.classList.remove('small-dot')
    }
    dotTwo.classList.add("small-dot")
    dotThree.classList.add("small-dot")
});

dotTwo.addEventListener("click", function(){
    homeText.textContent = "At Vybe Studio Ltd. we specialize in taking your ideas from vision to reality. We’ll simplify it and make it you, to stand out above all others."
    if(dotTwo.classList.contains("small-dot")){
        dotTwo.classList.remove('small-dot')
    }
    dotOne.classList.add("small-dot")
    dotThree.classList.add("small-dot")
})

dotThree.addEventListener("click", function(){
    homeText.textContent = "As we see it every good author needs a good team! With you in the driver’s seat we can help you paint a picture worth a million words. Let us give your brand a voice you can stand behind and a statement you can rely on."
    if(dotThree.classList.contains("small-dot")){
        dotThree.classList.remove('small-dot')
    }
    dotOne.classList.add("small-dot")
    dotTwo.classList.add("small-dot")
})


/*==== CONTACT WINDOW =====*/

var contactForm = document.querySelector(".footer__contact-form");
var popUpContact = document.querySelector('.footer__contact-popup');
var popUpClose = document.querySelector(".footer__contact-img");
var popUpButton = document.querySelector(".footer__contact-button");

var contactButton = document.querySelector(".footer__header-button");
contactButton.addEventListener('click', function(){
    popUpContact.classList.add('bg-active');
});

popUpClose.addEventListener('click', function(){
    popUpContact.classList.remove('bg-active');
})

popUpButton.addEventListener('submit', function(){
    alert("Funciona")
})