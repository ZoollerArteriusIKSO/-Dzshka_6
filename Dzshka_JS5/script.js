let arrowTop = document.querySelector('#arrowT')
let arrowDown = document.querySelector('#arrowD')


arrowTop.addEventListener('click', (event) =>{
    window.scrollTo(0, 0);
});


arrowDown.addEventListener('click', (event) =>{
    window.scrollTo(0, document.body.scrollHeight)
});


window.addEventListener('scroll', (event) =>{
    if(window.scrollY > document.body.scrollHeight / 2){
        arrowTop.style.display = 'block';
        arrowDown.style.display = 'none';

        
    }else{
        arrowTop.style.display = 'none';
        arrowDown.style.display = 'block';
    }


});