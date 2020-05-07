// tabs
let tabLinks =document.querySelectorAll(".tabs_title");
// console.log(tabLinks);
let  tabContent = document.querySelectorAll(".tab-content");
// console.log(tabContent);
let tabImages = document.querySelectorAll(".tab-img");

tabLinks.forEach(function (el) {
        el.addEventListener('click',openTabs);
});
// console.log(tabLinks);
function openTabs(el) {

    let liTarget = el.currentTarget;
    let  tab = liTarget.dataset.tab;


    tabContent.forEach(function (el) {
        el.classList.remove('active');

    });

    tabLinks.forEach(function (el) {
        el.classList.remove('active');
    });

    tabImages.forEach(function(el){
      el.classList.remove('active');
    });

    document.querySelector("#"+ tab).classList.add("active");


    liTarget.classList.add("active");
}




let loadButton = document.getElementById('load-more');
let loadImages=document.querySelectorAll('.load-more .tab-item');
for(let i=0; i<loadImages.length; i++){
    loadImages[i].style.display="none";
    loadButton.addEventListener('click', function(){
        loadImages[i].style.display='flex';
        loadButton.style.display='none';

    });
}






