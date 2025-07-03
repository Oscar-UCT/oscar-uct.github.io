// Navbar que aparece en cierto tamaño de pantalla
const navbar = document.getElementById("navbar-appear")
const navbarBtn = document.getElementById("navbar-btn")
navbarBtn.addEventListener("click", () => {
    if (navbar.style.visibility == "hidden") {
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
    }
    else {
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
    }
})

// Oculta popup si la pantalla cambia de tamaño
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("show");
    navbar.style.visibility = "hidden";
    navbar.style.opacity = "0";
  }
});


// Ventana de contacto falsa con elemento "dialog"
const contactDialog = document.getElementById("contact-dialog")

const contactDialogBtns = document.querySelectorAll(".contacto-btn")
contactDialogBtns.forEach(contactoBtn => {
    contactoBtn.addEventListener("click", () => {
        contactDialog.showModal();
    })
}
)

const cerrarDialogoBtn = document.getElementById("cerrarDialogoBtn")
const enviarBtnDialogo = document.getElementById("enviarBtnDialogo")

cerrarDialogoBtn.addEventListener("click", () => {
    contactDialog.close();
})

const dialogForm = document.getElementById('mockForm');
dialogForm.addEventListener('submit', function () {
    // Función "mock" de lo que sería una función para enviar un mensaje
    if (!dialogForm.checkValidity()) { // Revisa si los campos están, si no es así, no continua la función.
        return;
    }

    dialogForm.reset() // Elimina toda información ingresada

    alert('¡Gracias por tu mensaje!');
});

function updateChileTime() {
    const chileTime = new Date().toLocaleString("es-CL", {
        timeZone: "America/Santiago",
        hour12: false, // Usa formato 24 horas
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    document.getElementById("chile-time").textContent = "🇨🇱 " + chileTime;
}

// Actualizar cada segundo
setInterval(updateChileTime, 1000);

// Carga inicial
updateChileTime();


// Código de https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
    observer.observe(el);
});


// Este archivo Javascript no se "minificó" por su tamaño reducido.