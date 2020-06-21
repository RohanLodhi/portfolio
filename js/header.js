const header = document.querySelector('.navbar');
const links = document.querySelectorAll('a');


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
    }
    
})
