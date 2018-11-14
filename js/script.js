// Collapsable Nav
// modals
// ======================================
// 
let navs = document.querySelectorAll('nav, .nav');

document.addEventListener('click', listenForClicks);

document.addEventListener('scroll', listenForScroll);

function listenForClicks(e) {
    if (e.target.classList.contains('collapseToggle')) {
        e.target.parentNode.querySelector('.collapse').classList.toggle('expand');
    }

    // modals
    if (e.target.classList.contains('modalBtn')) {
        let modalBtn = e.target;
        modalBtn.nextElementSibling.classList.toggle('showModal');

        if (modalBtn.nextElementSibling.classList.contains('showModal')) {
            let blackOut = document.createElement('div');
            let parent = modalBtn.parentNode;
            blackOut.classList.add('blackOut');
            parent.insertBefore(blackOut, modalBtn.nextElementSibling);
        }
    } else if (e.target.classList.contains('blackOut')) {
        let parent = e.target.parentNode;
        e.target.nextElementSibling.classList.toggle('showModal');
        parent.removeChild(e.target);
    }
}

function listenForScroll(e) {
    for (let i = 0; i < navs.length; i++) {
        if (navs[i].querySelector('.expand') != null) {
            navs[i].querySelector('.expand').classList.remove('expand');
        }
    }
}


// Fixed nav height control
// ======================================
// 
let fixedNav = document.querySelector(".fixed");

if (fixedNav != null) {
    // get the height of the fixed nav
    let navHeight = window.getComputedStyle(fixedNav).height;

    let parent = fixedNav.parentNode;
    let navPad = document.createElement('div');
    navPad.classList.add('fixedPadding');
    navPad.style.height = navHeight;
    parent.insertBefore(navPad, fixedNav);
}


// Sidebar Padding
// ======================================
// 
// sm = 580px;
// md = 780px;
// lg = 1000px;
// xl = 1200px;
let sidebar = document.querySelector('.sidebar');
let sidebarRight = document.querySelector('.sidebarRight');

function sidebarPad() {
    if (window.matchMedia("(min-width: 780px").matches) {
        if (sidebar != null) {
            let navWidth = window.getComputedStyle(sidebar).width;
            let body = document.querySelector('body');
            body.style.paddingLeft = navWidth;

        } else if (sidebarRight != null) {
            let navWidth = window.getComputedStyle(sidebarRight).width;
            let body = document.querySelector('body');
            body.style.paddingRight = navWidth;
        }
    }
}

sidebarPad();

document.addEventListener('resize', sidebarPad);





