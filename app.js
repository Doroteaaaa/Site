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

function openImage() {
  document.getElementById("overlay").style.display = "flex";
}

function closeImage() {
  document.getElementById("overlay").style.display = "none";
}

let dropdownMenu = document.querySelector('.fly-2');

dropdownMenu.addEventListener('click',function(event){
    event.stopPropagation();
})

if (window.matchMedia("(max-width: 500px)").matches){
  var swiper = new Swiper(".mySwiper",{
    slidesPerView: 3,
    spaceBetween: 5,
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })
}else{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

//dropdownMenu

//fly-phone//

function openFly() {
  document.getElementById("pfly").style.display = "flex";
  document.getElementById("more").style.display = "none";
  document.getElementById("close-more").style.display = "flex";
}

function closeFly() {
  document.getElementById("pfly").style.display = "none";
  document.getElementById("more").style.display = "flex";
  document.getElementById("close-more").style.display = "none";
}
//fly-phone//

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".list-header");

  headers.forEach(header => {
      header.addEventListener("click", function (e) {
          if (window.innerWidth <= 768) {
              e.preventDefault();
              this.classList.toggle("active");
          }
      });
  });
});