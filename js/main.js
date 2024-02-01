// бургер меню
document.getElementById('burger').onclick = function() {
    document.querySelector(".header__burger").classList.toggle('header__burger--active');
    document.querySelector(".header__nav").classList.toggle('header__nav--active');
    document.getElementById('body').classList.toggle('lock');
};

// убирает меню при переходе по якорю
const linkItems = document.querySelectorAll('.link');

linkItems.forEach(function(link){
    link.addEventListener('click', function (event) {
        document.querySelector(".header__burger").classList.remove('header__burger--active');
        document.querySelector(".header__nav").classList.remove('header__nav--active');
        document.getElementById('body').classList.remove('lock');
    });
})

// табы
const tabsBtn = document.querySelectorAll(".gallery__btn");
const tabsItems = document.querySelectorAll(".gallery__tab");

tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("gallery__btn--active")){
            tabsBtn.forEach(function(item){
                item.classList.remove("gallery__btn--active")
            })
    
            tabsItems.forEach(function(item){
                item.classList.remove("gallery__tab--active")
            })
    
            currentBtn.classList.add("gallery__btn--active")
            currentTab.classList.add("gallery__tab--active");
        }
    })
})