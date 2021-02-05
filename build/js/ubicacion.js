document.addEventListener("DOMContentLoaded", () =>{
    //Mapa
    var map = L.map('mapa').setView([-26.847867, -65.700103], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-26.847867, -65.700103], 16).addTo(map)
        .bindPopup('Hotel del Valle')
        .openPopup();
});