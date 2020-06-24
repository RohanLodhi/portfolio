const header = document.querySelector('.navbar');
const links = document.querySelectorAll('a');
const bars = document.querySelector('.list');
const body = document.querySelector('.body');
let isScrolled = true;
let first = true;

const addAnimation = () =>{
    if(!isScrolled){
        console.log('yeet')
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
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

const observer = new IntersectionObserver(addAnimation, options);
observer.observe(bars);
  
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
        if(first){ 
            isScrolled = false;
            first = false;
        }
    }
    
})
