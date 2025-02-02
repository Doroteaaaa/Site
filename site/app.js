let inpSearch = false;

function openSearch (){
  if(!inpSearch){
    document.getElementById('fly').classList.remove('hidden');
    document.getElementById('box-shadow').classList.remove('hidden');
    inpSearch = true
  }else{
    document.getElementById('fly').classList.add('hidden');
    document.getElementById('box-shadow').classList.add('hidden');
    inpSearch = false
  }
};

let dropdownMenu = document.querySelector('.fly-2');

dropdownMenu.addEventListener('click',function(event){
    event.stopPropagation();
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

