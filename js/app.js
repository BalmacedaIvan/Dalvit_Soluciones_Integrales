/*background-color navbar scrolling*/
function changeBg(){
    let navbar = document.getElementById('navbar');
    let scrollValue = window.scrollY;

    if( scrollValue < 150 ){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor')
    }

}

window.addEventListener('scroll', changeBg);



/*copiar numero de telefono al portapapeles*/
const button = document.querySelector('i.hola')
const input = document.querySelector('.clipboard')
const copy = document.querySelector('.message')

button.addEventListener('click', function(){

    input.focus();

    document.execCommand('selectAll');

    document.execCommand('copy');

    /*sweetAlert telefono copiado*/
    Swal.fire(
        '¡Telefono Copiado!',
        'Numero copiado al portapapeles',
        'success'
      )

})

