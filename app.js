

function callButton(){
    var botonContacto;

    botonContacto = document.getElementById("boton-contacto");
    botonContacto.addEventListener("click", function() {
        window.alert('En desarrollo');
    });
}

function enDesarrollo(){
    var text = 'Página en desarrollo \nÚltima actualización: 18/Feb/2022'
    alert(text)
}