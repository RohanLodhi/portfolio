const header = document.querySelector('.navbar');
const links = document.querySelectorAll('a');
const bars = document.querySelector('.list');

window.addEventListener('scroll', e => {
    if(window.pageYOffset === 0){
        header.classList.add('navbar');
        header.classList.remove('stick');

        links.forEach(link =>{
            link.classList.remove('nav-link');
        })
    } else{
        header.classList.add('stick');
        header.classList.remove('navbar');
    
        links.forEach(link => {
            link.classList.add('nav-link');
        });
        console.log('scrolled');
        console.log(pageYOffset)
    }
    if(window.pageYOffset > 2600){
        bars.innerHTML = `<li class="js">JavaScript</li>
        <div class="bar js"></div>
        <li class="py">Python</li>
        <div class="bar py"></div>
        <li class="html">HTML & CSS</li>
        <div class="bar html"></div>
        <li class="c">C & C++</li>
        <div class="bar c"></div>
        <li class="java">Java</li>
        <div class="bar java"></div>`
    }
    
})
