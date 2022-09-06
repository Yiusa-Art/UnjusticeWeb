    
    window.addEventListener('scroll', revealM);

    function revealM(){
        var reveals = document.querySelectorAll('.revealM');
    
        for(var i = 0; i < reveals.length; i++) {
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;
    
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('activated');
        }
        else {
            reveals[i].classList.remove('activated'); 
        }
      }

    }


    window.addEventListener('scroll', revealMC);

    function revealMC(){
        var reveals = document.querySelectorAll('.revealMC');
    
        for(var i = 0; i < reveals.length; i++) {
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;
    
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('activated');
        }
        else {
            reveals[i].classList.remove('activated'); 
        }
      }

    }

    window.addEventListener('scroll', revealMCH);

    function revealMCH(){
        var reveals = document.querySelectorAll('.revealMCH');
    
        for(var i = 0; i < reveals.length; i++) {
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 400;
    
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('activated');
        }
        else {
            reveals[i].classList.remove('activated'); 
        }
      }

    }

    window.addEventListener('scroll', revealMS);

    function revealMS(){
        var reveals = document.querySelectorAll('.revealMS');
    
        for(var i = 0; i < reveals.length; i++) {
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 450;
    
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('activated');
        }
      }

    }

    window.addEventListener('scroll', imgMS);

    function imgMS(){
        var reveals = document.querySelectorAll('.imgMS');
    
        for(var i = 0; i < reveals.length; i++) {
    
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 450;
    
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('activated');
        }

      }

    }
  

    // ------------------------------------------------------------------------ //

    let intro = document.querySelector('.intro');
    let introTextContainer = document.querySelector('.intro-text-container');
    let introSpan = document.querySelectorAll('.intro-text');
    let textHeader = document.querySelector('.text-header')
    let headerH3 = document.querySelector('.header-h3');
    let btnH = document.querySelector('.btnH');

    window.addEventListener('DOMContentLoaded', ()=>{

        setTimeout(()=>{

            introSpan.forEach((span, idx) =>{
                setTimeout(()=>{
                    span.classList.add('activeLoad');
                }, 50)
            });

            setTimeout(() =>{
                introSpan.forEach((span, idx) => {

                    setTimeout(() => {
                        span.classList.remove('activeLoad');
                        span.classList.add('adioz');
                    }, (idx + 1) * 50)
         
                })
            }, 2500);

            setTimeout(() =>{
                intro.style.top = '-100vh';
            }, 3100);
            
            setTimeout(() =>{
                textHeader.classList.add('activeLoad');
                headerH3.classList.add('activeLoad');
            }, 3600);

            setTimeout(() =>{
                btnH.classList.add('activeLoad');
            }, 6000)

            setTimeout(() =>{
                btnH.classList.add('activeSingleAnimation');
            }, 7000)

            setTimeout(() =>{
                btnH.classList.remove('activeSingleAnimation')
            }, 8300)

        })

    })

    // (idx + 1) *

// ------------------------------------------------------------------------ //

// (function() {
//     document.addEventListener("mousemove" , parallax);
//     const elem = document.querySelector("#parallax");

//     function parallax(e) {
//         let w = window.innerWidth / 2;
//         let h = window.innerHeight / 2;
//         let mouseX = e.clientX;
//         let mouseY = e.clientY;
//         let depth1 = `${50-(mouseX-w)*0.06}% ${50-(mouseY-h)*0.06}%`;
//         let depth2 = `${50-(mouseX-w)*0.06}% ${50-(mouseY-h)*0.06}%`;
//         let depth3 = `${50-(mouseX-w)*0.06}% ${50-(mouseY-h)*0.06}%`;
//         let x = `${depth1}, ${depth2}, ${depth3}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }
// })();
