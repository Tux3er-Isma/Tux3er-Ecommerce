

//General Variables
const body = document.body;
const DISPLAY_TYPES = {
    NONE: "none",
    FLEX: "flex",
    BLOCK: "block"
}
let username;
let email;
let password;
let userimg;
let imgUrl;
let arrayContainer = [];

//Log Page
const logPage = document.querySelector('.log-page');
const logPageMenu = document.querySelector('.log-page__menu');
const dotsArray = document.querySelectorAll('.log-page__menu__link');
let dot1 = document.querySelector('.log-page__menu__link--1');
let dot2 = document.querySelector('.log-page__menu__link--2');
let dot3 = document.querySelector('.log-page__menu__link--3');
//Page One
const pageOne = document.querySelector('.log-page__page--one');
let pageOneTitle = document.querySelector('.log-page__page--one__title');
let pageOneLogo = document.querySelector('.log-page__page--one__logo');
//Page Two
const pageTwo = document.querySelector('.log-page__page--two');
const pageTwoMarqueeArr = document.querySelectorAll('.log-page__page--two__products-container__marquee');
//Page Three
const pageThree = document.querySelector('.log-page__page--three');
const pageThreeBtnContainer = document.querySelector('.log-page__page--three__btn-container');
let pageThreeBtnContainerLogin = document.querySelector('.log-page__page--three__btn-container__login');
let pageThreeBtnContainerSignUp = document.querySelector('.log-page__page--three__btn-container__account__sign-up');


//Log Form
let loader = document.querySelector('.lds-ripple');
const logForm = document.querySelector('.log-form');
let logFormTitle = document.querySelector('.log-form__title');
let logFormNameTitle = document.querySelector('.log-form__name--title');
let logFormNameInpt = document.querySelector('.log-form__name');
let logFormPasswordTitle = document.querySelector('.log-form__password--title');
let logFormPasswordInpt = document.querySelector('.log-form__password');
const logFormRemember = document.querySelector('.log-form__remember');
let logFormError = document.querySelector('.log-form__error');
const logFormBtnContainer = document.querySelector('.log-form__btn-container');
let logFormBtn = document.querySelector('.log-form__btn');
let logFormForgotPassword = document.querySelector('.log-form__forgot-password');
let logFormLine = document.querySelector('.log-form__line');
let logFormAccount = document.querySelector('.log-form__account');
let logFormAccountSignUp = document.querySelector('.log-form__account__sign-up');

//Sign Up Form
const signUpForm = document.querySelector('.sign-up-form');
let signUpFormTitle = document.querySelector('.sign-up-form__title');
let signUpFormNameTitle = document.querySelector('.sign-up-form__name--title');
let signUpFormNameInpt = document.querySelector('.sign-up-form__name');
let signUpFormEmailTitle = document.querySelector('.sign-up-form__email--title');
let signUpFormEmailInpt = document.querySelector('.sign-up-form__email');
let signUpFormPasswordTitle = document.querySelector('.sign-up-form__password--title');
let signUpFormPasswordInpt = document.querySelector('.sign-up-form__password');
const signUpFormVerificationPasswordContainer = document.querySelector('.sign-up-form__password-verification-container');
const signUpVerificationBarsArr = signUpFormVerificationPasswordContainer.childNodes;
const signUpFormAccept = document.querySelector('.sign-up-form__accept');
let signUpFormAcceptCheckbox = document.querySelector('.sign-up-form__accept__checkbox');
let signUpFormError = document.querySelector('.sign-up-form__error');
const signUpFormBtnContainer = document.querySelector('.sign-up-form__btn-container');
let signUpFormBtn = document.querySelector('.sign-up-form__btn');
let signUpFormLine = document.querySelector('.sign-up-form__line');
let signUpFormAccount = document.querySelector('.sign-up-form__account');
let signUpFormAccountLogin = document.querySelector('.sign-up-form__account__login');

//Ecommerce
const ecommerce = document.querySelector('.ecommerce');
const ecommerceMenu = document.querySelector('.ecommerce__menu');
const ecommerceMenuListContainer = document.querySelector('.ecommerce__menu__list-container');
const ecommerceMain = document.querySelector('.ecommerce__main');
let ecommerceMainTitle = document.querySelector('.ecommerce__main__title');
const ecommerceMainProductsContainer = document.querySelector('.ecommerce__main__products-container');
let ecommerceAdminIcon = document.querySelector('.ecommerce-menu__list-container__item--1');
let ecommerceAdminIconTwo = document.querySelector('.ecommerce-menu__list-container__item--2');
const ecommerceAdmin = document.querySelector('.ecommerce__admin');


//Scroll Reveal
window.sr = ScrollReveal();

sr.reveal(pageOneTitle, {
    delay: 500, 
})
sr.reveal(pageOneLogo, {
    delay: 800
})
sr.reveal(dot1, {
    delay: 1100
})
sr.reveal(dot2, {
    delay: 1200
})
sr.reveal(dot3, {
    delay: 1300
})

//Arrays

//Functions
function logIn(){
    logPage.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() =>{
        //Hidding and Appearing Elements
        loader.style.display = 'none';
        logForm.style.display = 'flex';

        //Scroll Reveal
        sr.reveal(logFormTitle, {
            delay: 500
        })
        sr.reveal(logFormNameTitle, {
            delay: 800
        })
        sr.reveal(logFormNameInpt, {
            delay: 1100
        })
        sr.reveal(logFormPasswordTitle, {
            delay: 1400
        })
        sr.reveal(logFormPasswordInpt, {
            delay: 1700
        })
        sr.reveal(logFormRemember, {
            delay: 2000
        })
        sr.reveal(logFormBtnContainer, {
            delay: 2300
        })
        sr.reveal(logFormForgotPassword, {
            delay: 2600
        })
        sr.reveal(logFormLine, {
            delay: 2900
        })
        sr.reveal(logFormAccount, {
            delay: 3200
        })
    }, 1000)
}

function signUp(){
    logPage.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() =>{
        //Hiding and appearing elements
        loader.style.display = 'none';
        signUpForm.style.display = 'flex';

        //Scroll Reveal
        sr.reveal(signUpFormTitle, {
            delay: 500
        })
        sr.reveal(signUpFormNameTitle, {
            delay: 800
        })
        sr.reveal(signUpFormNameInpt, {
            delay: 1100
        })
        sr.reveal(signUpFormEmailTitle, {
            delay: 1400
        })
        sr.reveal(signUpFormEmailInpt, {
            delay: 1700
        })
        sr.reveal(signUpFormPasswordTitle, {
            delay: 2000
        })
        sr.reveal(signUpFormPasswordInpt, {
            delay: 2300
        })
        sr.reveal(signUpFormVerificationPasswordContainer, {
            delay: 2600
        })
        sr.reveal(signUpFormAccept, {
            delay: 2900
        })
        sr.reveal(signUpFormBtnContainer, {
            delay: 3200
        })
        sr.reveal(signUpFormLine, {
            delay: 3500
        })
        sr.reveal(signUpFormAccount, {
            delay: 3800
        })
    }, 1000)
}

function displayAdminDahsboard(){
    ecommerceMain.style.display = 'none';
    ecommerceMenu.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() =>{
        loader.style.display = 'none';
        ecommerceAdmin.style.display = 'flex';
    }, 1000)
    //NAV
    function displayAdminNav(){
        //Variables
        let lr = document.createElement('HR');
        const nav = document.createElement('NAV');
        let navReturn = document.createElement('I');
        let navTitle = document.createElement('H3');
        const navCredentials = document.createElement('DIV');
        const navImgContainer = document.createElement('DIV');
        let navImg = document.createElement('IMG');
        const navImgContainerInptContainer = document.createElement('DIV');
        let navImgIcon = document.createElement('I');
        let navImgInpt = document.createElement('INPUT');
        const navCredentialsInfo = document.createElement('DIV');
        let navEmail = document.createElement('SPAN');
        let navName = document.createElement('P')

        //Classes and ID's
        nav.classList.add('ecommerce__admin__nav');
        nav.id = 'ecommerce__admin__nav';
        navReturn.classList.add('ecommerce__admin__nav__return');
        navReturn.classList.add('fa-solid');
        navReturn.classList.add('fa-arrow-left');
        navTitle.classList.add('ecommerce__admin__nav__title');
        navCredentials.classList.add('ecommerce__admin__nav__credentials');
        navImgContainer.classList.add('ecommerce__admin__nav__credentials__img-container');
        navImg.classList.add('ecommerce__admin__nav__credentials__img-container__img');
        navImgContainerInptContainer.classList.add('ecommerce__admin__nav__credentials__img-container__inpt-container');
        navImgInpt.classList.add('ecommerce__admin__nav__credentials__img-container__inpt-container__inpt');
        navImgIcon.classList.add('ecommerce__admin__nav__credentials__img-container__inpt-container__icon');
        navImgIcon.classList.add('fa-solid');
        navImgIcon.classList.add('fa-camera');
        navCredentialsInfo.classList.add('ecommerce__admin__nav__credentials__info');
        navEmail.classList.add('ecommerce__admin__nav__credentials__info__email');
        navName.classList.add('ecommerce__admin__nav__credentials__info__name');

        //Attributes and Content
        navTitle.textContent = "Profile";
        navImgInpt.setAttribute('type', 'file');
        navImgInpt.setAttribute('accept', 'image/*');
        navEmail.innerHTML = email;
        navName.innerHTML = username;

        navCredentialsInfo.appendChild(navEmail);
        navCredentialsInfo.appendChild(navName);
        navImgContainer.appendChild(navImg);
        navImgContainerInptContainer.appendChild(navImgInpt);
        navImgContainerInptContainer.appendChild(navImgIcon);
        navImgContainer.appendChild(navImgContainerInptContainer);
        navCredentials.appendChild(navImgContainer);
        navCredentials.appendChild(navCredentialsInfo);
        nav.appendChild(navReturn);
        nav.appendChild(navTitle);
        nav.appendChild(lr);
        nav.appendChild(navCredentials);
        ecommerceAdmin.appendChild(nav);

        //Conditions
        if (imgUrl != undefined){
            navImg.setAttribute('src', imgUrl);
            navImgIcon.style.opacity = '0';
        }

        //Event Listeners
        navReturn.addEventListener('click', () =>{
            while (ecommerceAdmin.firstChild){
                ecommerceAdmin.removeChild(ecommerceAdmin.firstChild);
            }
            ecommerceAdmin.style.display = 'none';
            loader.style.display = 'block';
            setTimeout(() =>{
                loader.style.display = 'none';
                ecommerceMenu.style.display = 'flex';
                ecommerceMain.style.display = 'flex';
            }, 600)
        })
        navImgInpt.addEventListener('click', () =>{
            navImgInpt.addEventListener('change', () =>{
                let file = navImgInpt.files[0];
                imgUrl = URL.createObjectURL(file);
                console.log(file);
                console.log(imgUrl);
                navImgIcon.style.opacity = '0';
                navImg.setAttribute('src', imgUrl);
            })
        })
    }
    function displayAdminMain(){
        //MAIN
        //Variables
        const main = document.createElement('MAIN');
        let mainTitle = document.createElement('H3');
        const changeContainer = document.createElement('DIV');
        const changePage = document.createElement('DIV');
        let changePageReturn = document.createElement('I');
        let changePageTitle = document.createElement('H2');
        const changePageForm = document.createElement('FORM');
        let changePageFormInfo = document.createElement('P');
        let changePageFormInfoValue = document.createElement('SPAN');
        let changePageFormInpt = document.createElement('INPUT');
        let changePageFormBtn = document.createElement('BUTTON');

        let mainTitleTwo = document.createElement('H3');
        const changeContainerTwo = document.createElement('DIV');
        let changeContainerTwoTxt = document.createElement('P');
        let changeContainerTwoBtn = document.createElement('BUTTON');
        let changeContainerTwoBtnIcon = document.createElement('A');


        //Classes and IDs
        main.classList.add('ecommerce__admin__main');
        mainTitle.classList.add('ecommerce__admin__main__title');
        changeContainer.classList.add('ecommerce__admin__main__change-container');
        changePage.classList.add('ecommerce__admin__change-page');
        changePage.id = 'ecommerce__admin__main__change-page';
        changePageTitle.classList.add('ecommerce__admin__change-page__title');
        changePageReturn.classList.add('ecommerce__admin__change-page__return');
        changePageReturn.classList.add('fa-solid');
        changePageReturn.classList.add('fa-arrow-left');
        changePageForm.classList.add('ecommerce__admin__change-page__form');
        changePageFormInfo.classList.add('ecommerce__admin__change-page__form__info');
        changePageFormInfoValue.classList.add('ecommerce__admin__change-page__form__info__value');
        changePageFormInpt.classList.add('ecommerce__admin__change-page__form__inpt');
        changePageFormBtn.classList.add('ecommerce__admin__change-page__form__btn');

        mainTitleTwo.classList.add('ecommerce__admin__main__title--two');
        changeContainerTwo.classList.add('ecommerce__admin__main__change-container--two');
        changeContainerTwoTxt.classList.add('ecommerce__admin__main__change-container--two__txt');
        changeContainerTwoBtn.classList.add('ecommerce__admin__main__change-container--two__btn');
        changeContainerTwoBtnIcon.classList.add('ecommerce__admin__main__change-container--two__btn__icon');
        changeContainerTwoBtnIcon.classList.add('fa-solid');
        changeContainerTwoBtnIcon.classList.add('fa-chevron-down');

        //Attributes and Content
        mainTitle.textContent = "Settings";
        changePageTitle.textContent = "Change your credentials";
        changePageFormInpt.setAttribute('required', true);
        changePageFormBtn.setAttribute('type', 'submit');
        changePageFormBtn.innerHTML = "Change";

        mainTitleTwo.innerHTML = "General";
        changeContainerTwoTxt.innerHTML = "Terms and Conditions";
        changeContainerTwoBtnIcon.setAttribute('href', '/public/assets/Documents/Terms_and_Conditions.pdf');
        changeContainerTwoBtnIcon.setAttribute('download', 'Terms and Conditions');

        //Functions
        function createChangeCredentials(txt){
            //Variables
            const container = document.createElement('DIV');
            let changeTxt = document.createElement('P');
            let nextBtn = document.createElement('BUTTON');
            let nextBtnIcon = document.createElement('I');

            //Attributes and Content
            changeTxt.textContent = txt;

            //Classes
            container.classList.add('ecommerce__admin__main__change-container__container');
            changeTxt.classList.add('ecommerce__admin__main__change-container__container__txt');
            nextBtn.classList.add('ecommerce__admin__main__change-container__container__next-btn');
            nextBtnIcon.classList.add('ecommerce__admin__main__change-container__container__next-btn__icon');
            nextBtnIcon.classList.add('fa-solid');
            nextBtnIcon.classList.add('fa-chevron-right')

            //Append Child
            nextBtn.appendChild(nextBtnIcon);
            container.appendChild(changeTxt);
            container.appendChild(nextBtn);
            changeContainer.appendChild(container);

            //Event Listeners
            nextBtnIcon.addEventListener('click', (evt) =>{
                // nextBtnIcon.style.animation = 'double 1s forwards';
                main.style.display = DISPLAY_TYPES.NONE;
                document.querySelector('.ecommerce__admin__nav').style.display = DISPLAY_TYPES.NONE;
                loader.style.display = DISPLAY_TYPES.BLOCK;
                setTimeout(() =>{
                    loader.style.display = DISPLAY_TYPES.NONE;
                    changePage.style.display = DISPLAY_TYPES.FLEX;
                    // nextBtnIcon.classList.remove('fa-chevron-right');
                    // nextBtnIcon.addEventListener('animationend', () =>{
                    //     nextBtnIcon.style.animation = 'double-finish 1s forwards';
                    //     nextBtnIcon.classList.add('fa-angles-right');
                    // })
                    let changePageTxt = evt.target.parentNode.parentNode.childNodes[0].textContent;
                    let changePageTxtArr = changePageTxt.split(" ");
                    changePageFormInfo.innerHTML = `Your actual ${changePageTxtArr[1]} is: `;
                    changePageFormInpt.setAttribute('placeholder', `Change your ${changePageTxtArr[1]}`)
                    if (changePageTxtArr[1] == 'Name'){
                        console.log(1);
                        changePageFormInfoValue.innerHTML = username;
                        console.log(changePageFormInfoValue.innerHTML);
                        changePageFormBtn.addEventListener('click', () =>{
                            username = changePageFormInpt.value;
                            while (ecommerceAdmin.firstChild){
                                ecommerceAdmin.removeChild(ecommerceAdmin.firstChild);
                            }
                            ecommerceAdmin.style.display = 'none';
                            loader.style.display = 'block';
                            setTimeout(() =>{
                                loader.style.display = 'none';
                                ecommerceMenu.style.display = 'flex';
                                ecommerceMain.style.display = 'flex';
                            }, 600)
                        })
                    } else if (changePageTxtArr[1] == 'Password'){
                        console.log(2);
                        changePageFormInfoValue.innerHTML = password;
                        console.log(password);
                        changePageFormBtn.addEventListener('click', () =>{
                            password = changePageFormInpt.value;
                            while (ecommerceAdmin.firstChild){
                                ecommerceAdmin.removeChild(ecommerceAdmin.firstChild);
                            }
                            ecommerceAdmin.style.display = 'none';
                            loader.style.display = 'block';
                            setTimeout(() =>{
                                loader.style.display = 'none';
                                ecommerceMenu.style.display = 'flex';
                                ecommerceMain.style.display = 'flex';
                            }, 600)
                        })
                    } else if (changePageTxtArr[1] == 'Email') {
                        console.log(3);
                        changePageFormInfoValue.innerHTML = email;
                        changePageFormBtn.addEventListener('click', () =>{
                            email = changePageFormInpt.value;
                            while (ecommerceAdmin.firstChild){
                                ecommerceAdmin.removeChild(ecommerceAdmin.firstChild);
                            }
                            ecommerceAdmin.style.display = 'none';
                            loader.style.display = 'block';
                            setTimeout(() =>{
                                loader.style.display = 'none';
                                ecommerceMenu.style.display = 'flex';
                                ecommerceMain.style.display = 'flex';
                            }, 600)
                        })
                    }
                }, 400)
            })
        }

        function submitChangePageFormData(){
            changePageFormInpt.value = '';
        }

        //Event Listeners
        changePageReturn.addEventListener('click', () =>{
            changePage.style.display = DISPLAY_TYPES.NONE;
            loader.style.display = DISPLAY_TYPES.BLOCK;
            setTimeout(() =>{
                loader.style.display = DISPLAY_TYPES.NONE;
                main.style.display = DISPLAY_TYPES.BLOCK;
                document.querySelector('.ecommerce__admin__nav').style.display = DISPLAY_TYPES.FLEX;
            }, 400)
        })

        changePageForm.addEventListener('submit', (evt) =>{
            return false;
        })

        changeContainerTwoBtnIcon.addEventListener('click', () =>{
            changeContainerTwoBtnIcon.style.animation = 'icon-down 1s forwards';
        })
        changeContainerTwoBtnIcon.addEventListener('animationend', () =>{
            changeContainerTwoBtnIcon.style.animation = 'finish-icon-down 1s forwards';
        })

        //Calling Functions
        createChangeCredentials("Change Name");
        createChangeCredentials("Change Password");
        createChangeCredentials("Change Email");

        //Append Child
        changePageForm.appendChild(changePageFormInfo);
        changePageForm.appendChild(changePageFormInfoValue);
        changePageForm.appendChild(changePageFormInpt);
        changePageForm.appendChild(changePageFormBtn);
        changePage.appendChild(changePageReturn);
        changePage.appendChild(changePageTitle);
        changePage.appendChild(changePageForm);
        changeContainerTwoBtn.appendChild(changeContainerTwoBtnIcon);
        changeContainerTwo.appendChild(changeContainerTwoTxt);
        changeContainerTwo.appendChild(changeContainerTwoBtn);
        main.appendChild(mainTitle);
        main.appendChild(changeContainer);
        main.appendChild(mainTitleTwo);
        main.appendChild(changeContainerTwo);
        ecommerceAdmin.appendChild(main);
        ecommerceAdmin.appendChild(changePage);
    }
    displayAdminNav();
    displayAdminMain();
}
function displayCartDashboard(){
    //Appearing and Hidding elements
    ecommerceMenu.style.display = DISPLAY_TYPES.NONE;
    ecommerceMain.style.display = DISPLAY_TYPES.NONE;
    loader.style.display = DISPLAY_TYPES.BLOCK;

    setTimeout(() =>{
        loader.style.display = DISPLAY_TYPES.NONE;
        buyDashboard.style.display = DISPLAY_TYPES.FLEX;
    }, 400)

    //Variables
    const buyDashboard = document.createElement('DIV');
    const productsContainer = document.createElement('DIV');
    let title = document.createElement('H2');
    let buyReturn = document.createElement('I');

    //Classes
    buyDashboard.classList.add('ecommerce__buy');
    productsContainer.classList.add('ecommerce__buy__products-container');
    title.classList.add('ecommerce__buy__title');
    buyReturn.classList.add('ecommerce__buy__return');
    buyReturn.classList.add('fa-solid');
    buyReturn.classList.add('fa-arrow-left');

    //Content and Attributes
    title.innerHTML = "Added to Cart"

    //Childs
    buyDashboard.appendChild(buyReturn);
    buyDashboard.appendChild(title);
    buyDashboard.appendChild(productsContainer);
    ecommerce.appendChild(buyDashboard);

    //Functions
    for (let i = 0; i < arrayContainer.length; i++){
        productsContainer.appendChild(arrayContainer[i]);
    }

    //Event Listeners
    buyReturn.addEventListener('click', () =>{
        buyDashboard.style.display = DISPLAY_TYPES.NONE;
        loader.style.display = DISPLAY_TYPES.BLOCK;
        setTimeout(() =>{
            loader.style.display = DISPLAY_TYPES.NONE;
            ecommerceMenu.style.display = DISPLAY_TYPES.FLEX;
            ecommerceMain.style.display = DISPLAY_TYPES.FLEX;
        }, 400)
    })
}

function displayEcommerce(){
    loader.style.display = 'block';
    setTimeout(() =>{
        loader.style.display = 'none';
        ecommerce.style.display = 'flex';
        sr.reveal(ecommerceMenu, {
            delay: 300
        })
        sr.reveal(ecommerceMainTitle, {
            delay: 600
        })
    }, 1000) 
}


//Event Listeners
logPage.addEventListener('scroll', () =>{
    const pageWidth = logPage.clientWidth;
    const currentPage = Math.floor(logPage.scrollLeft / pageWidth);
    
    dotsArray.forEach((dot, index) => {
      if (index === currentPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
})
})

pageThreeBtnContainerLogin.addEventListener('click', logIn);
logFormAccountSignUp.addEventListener('click', () =>{
    logForm.style.display = 'none';
    signUp();
})

pageThreeBtnContainerSignUp.addEventListener('click', signUp);
signUpFormAccountLogin.addEventListener('click', () =>{
    signUpForm.style.display = 'none';
    logIn();
});

logFormBtn.addEventListener('click', () =>{
    if (logFormNameInpt.value == '' && logFormNameInpt.value == ''){
        logFormError.innerHTML = "You can not put empty results"
    } else if (logFormPasswordInpt.value.length < 6){
        logFormError.innerHTML = "At least 6 characters for the password";
    } else {
        username = "John Doe";
        email = logFormNameInpt.value;
        password = logFormPasswordInpt.value;
        logForm.style.display = 'none';
        displayEcommerce();
    }
})

signUpFormPasswordInpt.addEventListener('keyup', (evt) =>{
    let password = evt.target.value;
    if (password.length < 2){
        signUpVerificationBarsArr[1].style.backgroundColor = '#f00';
        signUpVerificationBarsArr[3].style.backgroundColor = '#ddd';
        signUpVerificationBarsArr[5].style.backgroundColor = '#ddd';
        signUpVerificationBarsArr[7].style.backgroundColor = '#ddd'
    } else if (password.length < 4){
        signUpVerificationBarsArr[1].style.backgroundColor = '#f70';
        signUpVerificationBarsArr[3].style.backgroundColor = '#f70';
        signUpVerificationBarsArr[5].style.backgroundColor = '#ddd';
    } else if (password.length < 6){
        signUpVerificationBarsArr[1].style.backgroundColor = '#ff0';
        signUpVerificationBarsArr[3].style.backgroundColor = '#ff0';
        signUpVerificationBarsArr[5].style.backgroundColor = '#ff0';
        signUpVerificationBarsArr[7].style.backgroundColor = '#ddd';
    } else if (password.length >= 8){
        signUpVerificationBarsArr[1].style.backgroundColor = '#4f0';
        signUpVerificationBarsArr[3].style.backgroundColor = '#4f0';
        signUpVerificationBarsArr[5].style.backgroundColor = '#4f0';
        signUpVerificationBarsArr[7].style.backgroundColor = '#4f0';
    }
})

signUpFormBtn.addEventListener('click', () =>{
    if (signUpFormAcceptCheckbox.checked == false){
        signUpFormError.innerHTML = "You haven't accepted the Terms and Conditions!";
    } else if (signUpFormPasswordInpt.value.length < 6){
        signUpFormError.innerHTML = "At least 6 characters for the password";
    } else {
        username = signUpFormNameInpt.value;
        email = signUpFormEmailInpt.value;
        password = signUpFormPasswordInpt.value;
        signUpForm.style.display = 'none';
        displayEcommerce();
    }
})


//Fetch
const getProducts = async () =>{
    return fetch('https://fakestoreapi.com/products').then((res) =>{
        res.json().then((res) =>{
            for (let i = 0; i < 4; i++){
                let img = document.createElement('IMG');
                img.classList.add('log-page__page--two__products-container__marquee__img');
                img.setAttribute('src', res[i].image);
                document.querySelector('.log-page__page--two__products-container__marquee--1').appendChild(img);
            }
            for (let i = 5; i < 9; i++){
                let img = document.createElement('IMG');
                img.classList.add('log-page__page--two__products-container__marquee__img');
                img.setAttribute('src', res[i].image);
                document.querySelector('.log-page__page--two__products-container__marquee--2').appendChild(img);
            }
            console.log(res);
        })
    }).catch((err) =>{
        console.log(err);
    })
}

const getEcommerceProducts = async () =>{
    return fetch('https://fakestoreapi.com/products').then((res) =>{
        res.json().then((res) =>{
            body.style.overflow = 'scroll';
            for (let i = 0; i < 20; i++){
                //Creating Elements
                const container = document.createElement('DIV');
                const description = document.createElement('DIV');
                let descriptionName = document.createElement('H3');
                let descriptionText = document.createElement('P');
                let img = document.createElement('IMG');
                const nav = document.createElement('DIV');
                let price = document.createElement('P');
                let trolley = document.createElement('I');
                let chat = document.createElement('I');

                //Giving them classes
                container.classList.add('ecommerce__main__products-container__item-container');
                container.id = res[i].id;
                description.classList.add('ecommerce__main__products-container__item-container__description');
                descriptionName.classList.add('ecommerce__main__products-container__item-container__description__name');
                descriptionText.classList.add('ecommerce__main__products-container__item-container__description__text');
                img.classList.add('ecommerce__main__products-container__item-container__img');
                nav.classList.add('ecommerce__main__products-container__item-container__nav');
                price.classList.add('ecommerce__main__products-container__item-container__nav__price');
                trolley.classList.add('ecommerce__main__products-container__item-container__nav__trolley');
                trolley.classList.add('fa-solid');
                trolley.classList.add('fa-cart-shopping');
                chat.classList.add('ecommerce__main__products-container__item-container__nav__chat');
                chat.classList.add('fa-solid');
                chat.classList.add('fa-comment');
                
                //Giving them content
                descriptionName.innerHTML = res[i].title;
                descriptionText.innerHTML = res[i].description;
                img.setAttribute('src', res[i].image);
                price.innerHTML = res[i].price + '$';

                //Giving them parents
                description.appendChild(descriptionName);
                description.appendChild(descriptionText);
                nav.appendChild(price);
                nav.appendChild(trolley);
                nav.appendChild(chat);
                container.appendChild(description);
                container.appendChild(img);
                container.appendChild(nav);
                ecommerceMainProductsContainer.appendChild(container);

                //Event Listeners
                ecommerceAdminIcon.addEventListener('click', displayAdminDahsboard);
                ecommerceAdminIconTwo.addEventListener('click', displayCartDashboard);

                trolley.addEventListener('click', (evt) =>{
                    const succsefulContainer = document.createElement('DIV');
                    let succesfulTitle = document.createElement('H2');
                    let succesfulIcon = document.createElement('I');

                    succsefulContainer.classList.add('succesful-container');
                    succesfulTitle.classList.add('succesful-container__title');
                    succesfulIcon.classList.add('succesful-container__icon');
                    succesfulIcon.classList.add('fa-solid');
                    succesfulIcon.classList.add('fa-check');

                    succesfulTitle.innerHTML = "Product Added to cart";

                    succsefulContainer.appendChild(succesfulTitle);
                    succsefulContainer.appendChild(succesfulIcon);
                    body.appendChild(succsefulContainer);

                        succsefulContainer.style.animation = `succesful 2s forwards`;

                        setTimeout(() =>{
                            succsefulContainer.style.display = DISPLAY_TYPES.NONE;
                        }, 2000)

                    let img = evt.target.parentNode.parentNode.childNodes[1].src;
                    let productName = evt.target.parentNode.parentNode.childNodes[0].childNodes[0].innerHTML;
                    let price = evt.target.parentNode.parentNode.childNodes[2].childNodes[0].innerHTML;
                    let productId = evt.target.parentNode.parentNode.id;

                    function createCartProductContainer(){
                        //Variables
                        const container = document.createElement('DIV');
                        let productImg = document.createElement('IMG');
                        let title = document.createElement('H3');
                        let productPrice = document.createElement('P');

                        //Classes
                        container.classList.add('ecommerce__buy__products-container__container');
                        productImg.classList.add('ecommerce__buy__products-container__container__img');
                        title.classList.add('ecommerce__buy__products-container__container__title');
                        productPrice.classList.add('ecommerce__buy__products-container__container__price');
                    
                        //Content and Attributes
                        productImg.setAttribute('src', img);
                        productImg.setAttribute('alt', productName);
                        title.innerHTML = productName;
                        productPrice.innerHTML = price;
                
                        //Append Child
                        container.appendChild(productImg);
                        container.appendChild(title);
                        container.appendChild(productPrice);
                        
                        arrayContainer.push(container);
                    }

                    createCartProductContainer();

                })

                //Scroll Reveal
                sr.reveal(container, {
                    delay: 300,
                    reset: true
                })
            }
        })
    }).catch((err) =>{
        console.log(err);
    })
}

getProducts();
getEcommerceProducts();