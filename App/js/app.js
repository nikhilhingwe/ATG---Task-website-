const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileLinks = document.querySelector('.mobile-items');

mobileMenu.addEventListener('click', ()=>{
    if(mobileMenu.classList.contains('change')){
        mobileMenu.classList.add('removeChange')
        mobileMenu.classList.remove('change')
        mobileLinks.classList.add('close')
        mobileLinks.classList.remove('open')
        document.body.classList.remove('no-scroll')
    }
    else{
        mobileMenu.classList.add('change')
        mobileMenu.classList.remove('removeChange')
        mobileLinks.classList.add('open')
        mobileLinks.classList.remove('close')
        document.body.classList.add('no-scroll')
    }
})


const dropdown = document.querySelector('.filter-btn');
const showDropdown = document.querySelector('.dropdown-content')
const downIcon = document.querySelector('.down');
dropdown.addEventListener('click',()=>{
    showDropdown.classList.toggle('dropdown-content-show')
    downIcon.classList.toggle('rotate');
    searchCountries.value = '';
})

// ======================================

const naming = document.querySelector('.account-mobile');
const mobileName = document.querySelector('.attribution-mobile');
naming.addEventListener('click', ()=>{
    if(naming.classList.contains('clickIn')){
        naming.classList.remove('clickIn')
        mobileName.classList.remove('mobile-name-add')
        mobileName.classList.add('mobile-name-remove')
        document.body.classList.remove('no-scroll')
        document.body.classList.remove('ove')
    }
    else{
        document.body.classList.add('ove')
        document.body.classList.add('no-scroll')
        naming.classList.add('clickIn')
        mobileName.classList.add('mobile-name-add')
        mobileName.classList.remove('mobile-name-remove')
    }
})