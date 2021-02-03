document.addEventListener("DOMContentLoaded", function(){
    
});

document.querySelector(".menu-toggle a").addEventListener("click", function(e){

    e.preventDefault();
    if(document.querySelector(".navegacion-principal").classList.contains("show")){
        document.querySelector(".navegacion-principal").classList.remove("show");    
    }else{
        document.querySelector(".navegacion-principal").classList.add("show");
    }
});