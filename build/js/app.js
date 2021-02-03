document.addEventListener("DOMContentLoaded", function(){
    if(window.screen.width > 480){
        document.querySelector(".navegacion-principal").classList.add("show");
    }
});

document.querySelector(".menu-toggle a").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".navegacion-principal").classList.toggle("show");
    
});