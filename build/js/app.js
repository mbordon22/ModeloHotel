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
    texto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

function maquinaEscribir(){
    if(i < texto.length){
        document.querySelector("#texto-bienvenida").innerHTML += texto.charAt(i);
        i++;
        setTimeout(maquinaEscribir, 100);
    }
}
window.addEventListener("load", () => {
    const loader = document.querySelector(".preloaded");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
})