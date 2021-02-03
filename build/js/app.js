document.addEventListener("DOMContentLoaded", function(){
    
});


document.querySelector(".menu-toggle a").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".navegacion-principal").classList.toggle("show");
    
});


if(window.screen.width > 480){
    document.querySelector(".navegacion-principal").classList.add("show");
}