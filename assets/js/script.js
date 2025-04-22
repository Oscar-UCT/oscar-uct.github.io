const navbar = document.getElementById("navbar-appear")
const navbarBtn = document.getElementById("navbar-btn")
navbarBtn.addEventListener("click", ()=>
{
    if (navbar.style.visibility == "hidden")
    {
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
    }
    else
    {
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
    }
})

function CerrarVentanaCorreo()
{
    document.getElementById("ventana-correo").style.display = "none"
}
function MostrarVentanaCorreo()
{
    document.getElementById("ventana-correo").style.display = "flex"
}

const form = document.getElementById('formulario-contacto');

form.addEventListener('submit', function(event) {
    // Función "mock" de lo que sería una función para enviar correo
    if (!form.checkValidity()) { // Revisa si los campos están, si no es así, no continua la función.
        return;
    }
    event.preventDefault();
    alert('Correo enviado');
    window.location.href = 'index.html';
});

// Este archivo Javascript no se "minificó" por su tamaño reducido.