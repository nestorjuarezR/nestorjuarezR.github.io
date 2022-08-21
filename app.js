

function callButton(){
    var botonContacto;

    botonContacto = document.getElementById("boton-contacto");
    botonContacto.addEventListener("click", function() {
        window.alert('En desarrollo');
    });
}

function enDesarrollo(){
    var text = 'Página en desarrollo \nÚltima actualización: 21/Ago/2022'
    alert(text)
}

window.addEventListener("mousedown", function(event) {
    if(event.button == 0){
        console.log('Click Izquierdo');
    } else if (event.button == 1){
        console.log('Boton de enmedio');
    } else if (event.button == 2){
        console.log('Click Derecho');
    }
})
