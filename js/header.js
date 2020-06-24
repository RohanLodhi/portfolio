const header = document.querySelector('.navbar');
const links = document.querySelectorAll('a');
const bars = document.querySelector('.list');
const body = document.querySelector('.body');
const card = document.querySelector('.profile-card');
let isScrolled = false;

window.addEventListener('scroll', e => {
    if(window.pageYOffset === 0){
        isScrolled = false;
        header.classList.add('navbar');
        header.classList.remove('stick');

        links.forEach(link =>{
            link.classList.remove('nav-link');
        })
    } else{
        body.style.height = '100%';
        header.classList.add('stick');
        header.classList.remove('navbar');
    
        links.forEach(link => {
            link.classList.add('nav-link');
        });
    }
    if(window.pageYOffset > 2600 && !isScrolled){
        bars.innerHTML = `<li class="js">JavaScript</li>
        <div class="bar js"></div>
        <li class="py">Python</li>
        <div class="bar py"></div>
        <li class="html">HTML & CSS</li>
        <div class="bar html"></div>
        <li class="c">C & C++</li>
        <div class="bar c"></div>
        <li class="java">Java</li>
        <div class="bar java"></div>`;
        isScrolled = true;
    }
    
})
