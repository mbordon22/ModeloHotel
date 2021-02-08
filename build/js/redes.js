document.addEventListener("DOMContentLoaded", () =>{
    document.addEventListener("scroll", ()=>{
        console.log(window.scrollY);
        
        if(window.scrollY < 500){
            var iconos = document.querySelectorAll(".redes-sociales i");
            for(var i = 0; i < iconos.length; i++){
                iconos[i].classList.remove("color");
            }
        }
        else if(window.scrollY >= 500){
            var iconos = document.querySelectorAll(".redes-sociales i");
            for(var i = 0; i < iconos.length; i++){
                iconos[i].classList.add("color");
            }
        }
        if(window.scrollY >= 1595){
            var iconos = document.querySelectorAll(".redes-sociales i");
            for(var i = 0; i < iconos.length; i++){
                iconos[i].classList.remove("color");
            }
        }
    })
});

