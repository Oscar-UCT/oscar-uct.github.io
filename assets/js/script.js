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