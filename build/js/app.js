document.addEventListener("DOMContentLoaded", function () {
    
    if(document.querySelector(".home-page")){
        //Typing animation script 
        var typed = new Typed("#texto-bienvenida", {

        strings: ["Bienvenido a nuestro Hotel", "Welcome to our Hotel", "Bienvenue dans notre Hôtel", "Bem vindo ao nosso Hotel", "Willkommen in unserem Hotel", "Benvenuti nel nostro Hotel"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
        });
    }
    else if(document.querySelector(".rooms-page")){
        cargarImagenes();    
    }
    else if(document.querySelector(".service-page")){
        //Slider servicios
        $('.single-item').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            height: "300px"
        });
    }
});



//Menu Toggle
document.querySelector(".menu-toggle a").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".navegacion-principal").classList.toggle("show");

});
if (window.screen.width > 480) {
    document.querySelector(".navegacion-principal").classList.add("show");
}


//Preloader
window.addEventListener("load", () => {
    const loader = document.querySelector(".preloaded");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
})


//Funcion cargar imagenes
function cargarImagenes() {
    const galeria = document.querySelector(".galeria-imagenes");

    for (let i = 1; i <= 8; i++) {
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/habitaciones/${i}.webp`;
        imagen.dataset.imagenId = i;

        //Añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement("LI");

        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}
function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    //Generar la imagen
    const imagen = document.createElement("IMG");
    imagen.src = `build/img/habitaciones/${id}.webp`;
    imagen.style.width = "800px";
    imagen.style.height = "500px";

    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    //Boton cerrar imagen
    const cerrarImagen = document.createElement("P");
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add("btn-cerrar");

    //Cuando se cierra la imagen
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    //Boton se cierra la imagen
    cerrarImagen.onclick = function () {
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");

}



