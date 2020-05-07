$(document).ready(function () {
  let tab = $('.tab');
  let tabItem = $('.tab-item');
  let itemContainer = $('.img-container');


    tab.on('click', function (e) {
        let tab = $('.tab');
        for(i=0; i<tab.length; i++){
            tab[i].className= tab[i].className.replace('active', '');
        };

        e.target.classList.add('active');

        let dataTab = $(this).attr('data-tab');
        tabItem.removeClass('active');

        if(tabItem.hasClass(dataTab)) {
            itemContainer.find('.' + dataTab).addClass('active')
        } else {
            tabItem.addClass('active')
        }

    })

});

const number = 15/5+20
console.log(number/0);
// gallery


// let tabTitles =document.querySelectorAll(".tabs-title");
// console.log(tabTitles);

// let tabImage = document.querySelectorAll(".last-img");

// tabTitles.forEach(function (el) {
//         el.addEventListener('click',openTabs);
// });
// console.log(tabLinks);
// function openTabs(el) {

//     let liTarget = el.currentTarget;
//     let  tab = liTarget.dataset.tab;


//     tabTitles.forEach(function (el) {
//         el.classList.remove('active');
//     });

//     tabImage.forEach(function(el){
//       el.classList.remove('active');
//     });

//     document.querySelector("#"+ tab).classList.add("active");


//     liTarget.classList.add("active");
// }
