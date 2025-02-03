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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//notatka

let inpGs= false;

function noteGs (){
  if(!inpGs){
    document.getElementById(`note`).classList.add('overlay');
    inpGs = true
  }else{
    document.getElementById(`note`).classList.remove('overlay');
    inpGs = false
  };
};


//dropdownMenu

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