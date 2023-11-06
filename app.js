const swiperHeader = new Swiper('.header__wrapper', {
    // Optional parameters
    // direction: 'vertical',
    autoHeight: true,
    loop: true,
    effect: 'fade',
    crossFade: true,

    autoplay: {
        delay: 5000,
    },

    zoom: {
        maxRatio: 5,
    },

});

const choiceUpgrade = document.querySelector('#openUp');
choiceUpgrade.addEventListener('click', openClick);

console.log(choiceUpgrade)


function openClick() {
    document.querySelector('.upgrade-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');

};

const choiceUpgradeBtn = document.querySelector('#openUpgrade');
choiceUpgradeBtn.addEventListener('click', openClickBtn);


function openClickBtn() {
    document.querySelector('.upgrade-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');

};


const closeUpgrade = document.querySelector('#closeUp');
closeUpgrade.addEventListener('click', closeClick);

function closeClick() {
    document.querySelector('.upgrade-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const openContacts = document.querySelector('#openContacts');
openContacts.addEventListener('click', openCont);

function openCont() {
    document.querySelector('.contacts-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const closeContacts = document.querySelector('#closeContacts');
closeContacts.addEventListener('click', closeCont);

function closeCont() {
    document.querySelector('.contacts-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const openRegistration = document.querySelector('#openRegistration');
openRegistration.addEventListener('click', openReg);

function openReg() {
    document.querySelector('.registration-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const closeRegistration = document.querySelector('#closeRegistration');
closeRegistration.addEventListener('click', closeReg);

function closeReg() {
    document.querySelector('.registration-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const openSubscription = document.querySelector('#openSubscription');
openSubscription.addEventListener('click', openSub);

function openSub() {
    document.querySelector('.subscription-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

const closeSubscription = document.querySelector('#closeSubscription');
closeSubscription.addEventListener('click', closeSub);

function closeSub() {
    document.querySelector('.subscription-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}



const burgerOpen = document.querySelector('.header__nav-button-burger');
burgerOpen.addEventListener('click', () => {
    burgerOpen.classList.toggle('active');
    document.querySelector('.mobile-visible').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');

});
