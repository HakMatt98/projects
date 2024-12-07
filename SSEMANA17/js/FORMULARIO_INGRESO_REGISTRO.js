//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const signUpButton=document.getElementById("signUp"); // boton de registro
const signInButton=document.getElementById("signIn"); //boton de inicio de sesion
const container=document.getElementById("container");
const boost=document.getElementById("boost");

// PROGRAMAR EVENTO CLICK MOSTRAR FORMULARIO DE REGISTRO
signUpButton.addEventListener("click", () =>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
})

//PROGRAMAR EVENTO CLICK OCULTAR FORMULARIO DE REGISTRO
signInButton.addEventListener("click", () =>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
})

//MOSTRAR CONSTRASEÑA
function mostrarSeña()
{
    var tipo = document.getElementById("seña");
    if(tipo.type=="password")
    {
        tipo.type="text";
    }else{
        tipo.type="password";
    }
}