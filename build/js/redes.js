document.addEventListener("DOMContentLoaded", () =>{
        if(document.querySelector(".home-page")){
            document.addEventListener("scroll", ()=>{
                menuFijo();
                colorRedes();
            });
        }
        else{
            var iconos = document.querySelectorAll(".redes-sociales i");
            for(var i = 0; i < iconos.length; i++){
                iconos[i].classList.add("color");
            }
        }
    
});

function colorRedes(){

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
}

function menuFijo(){
    
    if(window.scrollY >= 100){
        document.querySelector(".barra").classList.add("fijo");
    }else{
        document.querySelector(".barra").classList.remove("fijo");
    }
}