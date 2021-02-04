document.addEventListener("DOMContentLoaded", function(){
    maquinaEscribir();
});


document.querySelector(".menu-toggle a").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".navegacion-principal").classList.toggle("show");
    
});


if(window.screen.width > 480){
    document.querySelector(".navegacion-principal").classList.add("show");
}


var i = 0,
    texto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

function maquinaEscribir(){
    if(i < texto.length){
        document.querySelector("#texto-bienvenida").innerHTML += texto.charAt(i);
        i++;
        setTimeout(maquinaEscribir, 200);
    }
}