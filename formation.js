let projet = document.querySelector('.projet')

let projetbtn = document.querySelector('.projet1')

let projetShow = document.querySelector('.projet-1')

let lastScrollTop = 0;
const navbar = document.getElementById("sticky");

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Défilement vers le bas
        navbar.classList.add("hidden");
    } else {
        // Défilement vers le haut
        navbar.classList.remove("hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour gérer le défilement sur les appareils mobiles
}, false);



document.querySelectorAll('.projetbtn').forEach(btn =>{




btn.addEventListener('click', ()=>{
    
    document.querySelectorAll('.projet-1').forEach(element =>{


})

    btn.parentElement.parentElement.querySelector('.projet-1').classList.toggle('visible')

})

})