var elementoBoton = document.getElementById("boton")
var elementoTitulo = document.getElementById("titulo")

elementoBoton.addEventListener("click", CambiarTexto)

function CambiarTexto()
{
  if(elementoTitulo.classList.contains("bienvenida"))
  {
    elementoTitulo.innerText = "¡Bienvenido a mi web!"
    elementoTitulo.classList.remove("bienvenida")
    elementoTitulo.classList.add("despedida")
  }
  else if(elementoTitulo.classList.contains("despedida"))
  {
    elementoTitulo.innerText = "¡Muchas gracias, hasta luego!"
    elementoTitulo.classList.remove("despedida")
    elementoTitulo.classList.add("bienvenida")
  }
}
