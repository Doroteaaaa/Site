function konto(){
    document.getElementById('fly-ulu').style.display = "none";
    document.getElementById('fly-konto').style.display = "flex";
}

function close_konto(){
    document.getElementById('fly-konto').style.display = "none";
    document.getElementById('fly-ulu').style.display = "none";
}

function ulubione(){
    document.getElementById('fly-konto').style.display = "none";
    document.getElementById('fly-ulu').style.display = "flex";
}

function close_ulubione(){
    document.getElementById('fly-ulu').style.display = "none";
    document.getElementById('fly-konto').style.display = "none";
}

const button_konto = document.getElementById('konto');
const box_konto = document.getElementById('fly-konto');

document.addEventListener('click', (event) => {
    if (!box_konto.contains(event.target) && !button_konto.contains(event.target)) {
        box_konto.classList.add('hidden');
    }
});

const button_ulu = document.getElementById('heart');
const box_ulu = document.getElementById('fly-ulu');

document.addEventListener('click', (event) => {
    if (!box_ulu.contains(event.target) && !button_ulu.contains(event.target)) {
        box_ulu.classList.add('hidden');
    }
});


document.getElementById('heart').addEventListener("mouseenter", function(){
    document.getElementById('heart').classList.add('hidden');
    document.getElementById('full-heart').classList.remove('hidden')
})

document.getElementById('heart').addEventListener("mouseleave", function(){
    document.getElementById('heart').classList.remove('hidden');
    document.getElementById('full-heart').classList.add('hidden')
})


document.getElementById('heart-reverse').addEventListener("mouseenter", function(){
    document.getElementById('heart-reverse').classList.remove('hidden');
    document.getElementById('heart-reverse-full').classList.add('hidden')
})

document.getElementById('heart-reverse').addEventListener("mouseleave", function(){
    document.getElementById('heart-reverse').classList.add('hidden');
    document.getElementById('heart-reverse-full').classList.remove('hidden')
})


