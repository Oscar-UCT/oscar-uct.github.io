// Navbar que aparece en cierto tamaño de pantalla
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

// Funciones para controlar la visualización de la ventana de enviar mensaje
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
    // Función "mock" de lo que sería una función para enviar un mensaje
    if (!form.checkValidity()) { // Revisa si los campos están, si no es así, no continua la función.
        return;
    }

    event.preventDefault(); // Evita que se redireccione a la página con un query string
    alert('Correo enviado');
    window.location.href = 'index.html'; // Redirije a la página inicial, lo que se haría por defecto pero una query string
});

// Este archivo Javascript no se "minificó" por su tamaño reducido.