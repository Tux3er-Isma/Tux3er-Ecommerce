

//General Variables
const body = document.body;
const sellersNames = ['jessica'];
const sellersSeudonims = ['Jess_.']
const statusOp = ['online', 'offline'];
const apiKey = "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";

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
const ecommerceMainProductsContainerItemsArr = ecommerceMainProductsContainer.childNodes;
const ecommerceChat = document.querySelector('.ecommerce__chat');


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
        ecommerceMainProductsContainerItemsArr.forEach((element) =>{
            sr.reveal(element, {
                delay: 500,
                reset: true
            })
        })
    }, 1000) 
}

function displayChat(){
    ecommerceMenu.style.display = 'none';
    ecommerceMain.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() =>{
        loader.style.display = 'none';
        ecommerceChat.style.display = 'block';
    }, 1000)
    const sellerInformationContainer = document.createElement('DIV');
    let sellerImg = document.createElement('IMG');
    let sellerNameContainer = document.createElement('DIV');
    let sellerSeudonim = document.createElement('P');
    let sellerName = document.createElement('P');
    const status = document.createElement('DIV');
    let statusDot = document.createElement('DIV');
    let statusInfo = document.querySelector('P');

    const ecommerceChatMain = document.createElement('DIV');

    const inptContainer = document.createElement('DIV');
    let inpt = document.createElement('INPUT');
    let btn = document.createElement('BUTTON');

    sellerInformationContainer.classList.add('ecommerce__chat__s-info-container');
    sellerImg.classList.add('ecommerce__chat__s-info-container__img');
    sellerNameContainer.classList.add('ecommerce__chat__s-info-container__name-container')
    sellerSeudonim.classList.add('ecommerce__chat__s-info-container__name-container__seudonim');
    sellerName.classList.add('ecommerce__chat__s-info-container__name-container__name');
    status.classList.add('ecommerce__chat__s-info-container__status');
    statusDot.classList.add('ecommerce__chat__s-info-container__status__dot');
    statusInfo.classList.add('ecommerce__chat__s-info-container__status__info');

    ecommerceChatMain.classList.add('ecommerce__chat__main');

    inptContainer.classList.add('ecommerce__chat__inpt-container');
    inpt.classList.add('ecommerce__chat__inpt-container__inpt');
    btn.classList.add('ecommerce__chat__inpt-container__btn');

    for (let i = 0; i < sellersNames.length; i++){
        sellerImg.setAttribute('src', `${location.href}/public/assets/img/${sellersNames[i]}.png`);
        sellerName.textContent = sellersNames[i];
        sellerSeudonim.textContent = sellersSeudonims[i];
    }

    statusInfo.innerHTML = statusOp[Math.floor(Math.random()*1)];
    if (statusInfo.innerHTML == 'online'){
        statusDot.classList.add('ecommerce__chat__s-info-container__status__dot--online');
    } else {
        statusDot.classList.add('ecommerce__chat__s-info-container__status__dot--offline');
    }

    inpt.setAttribute('type', 'text');
    inpt.setAttribute('placeholder', 'Send a message...');
    btn.setAttribute('type', 'submit');

    btn.innerHTML = "Send";
    btn.addEventListener('click', async  () =>{
                let preText;
                        for (let i = 0; i < sellersNames.length; i++){
                            preText = `Your name is jessica, you are selling a blue bagpack that costs 109.99$ if the user tells you to get a lower price you can do it. Don't tal for we talk about you.`
                        }
                const buyerRes = document.createElement('DIV');
                buyerRes.classList.add('ecommerce__chat__main__buyer')
                let buyerResText = document.createElement('P');
                buyerResText.classList.add('ecommerce__chat__main__buyer__text');
                buyerResText.innerHTML = inpt.value;
                const mes = inpt.value;
                buyerRes.appendChild(buyerResText)
                ecommerceChatMain.appendChild(buyerRes);
                inpt.value = '';
                const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                  prompt: preText + `${mes}`,
                  model: "text-davinci-003",
                  temperature: 0,
                  max_tokens: 1000,
                  top_p: 1,
                  frequency_penalty: 0.0,
                  presence_penalty: 0.0,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                  },
                }
              );
            const chatbotResponse = response.data.choices[0].text;
            let chatBot = document.createElement('DIV');
            chatBot.classList.add('ecommerce__chat__main__bot')
            chatBot.innerHTML = chatbotResponse;
            console.log(chatbotResponse);
            ecommerceChatMain.appendChild(chatBot);
              });

    status.appendChild(statusDot);
    status.appendChild(statusInfo);
    sellerNameContainer.appendChild(sellerSeudonim);
    sellerNameContainer.appendChild(sellerName);
    sellerInformationContainer.appendChild(sellerImg);
    sellerInformationContainer.appendChild(sellerNameContainer);
    sellerInformationContainer.appendChild(status);
    inptContainer.appendChild(inpt);
    inptContainer.appendChild(btn);
    ecommerceChat.appendChild(sellerInformationContainer);
    ecommerceChat.appendChild(ecommerceChatMain);
    ecommerceChat.appendChild(inptContainer);
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
        signUpFormError.innerHTML = "You haven't accepted the Terms and Conditions!"
    } else if (signUpFormPasswordInpt.value.length < 6){
        signUpFormError.innerHTML = "At least 6 characters for the password";
    } else {
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
                chat.addEventListener('click', displayChat);
            }
        })
    }).catch((err) =>{
        console.log(err);
    })
}

getProducts();
getEcommerceProducts();