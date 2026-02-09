let productoSeleccionado = "";
let precioSeleccionado = "";

function seleccionarProducto(producto, precio) {
  productoSeleccionado = producto;
  precioSeleccionado = precio;
  alert("Producto seleccionado: " + producto);
}

function enviarFormulario() {
  if (productoSeleccionado === "") {
    alert("Selecciona un producto primero");
    return;
  }

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;

  const urlFormulario = "https://docs.google.com/forms/d/e/1FAIpQLSf1DotDgbjPC-M85-00ohAnSxJPfFdbncG5pj-QA5AbssIrGg/viewform?usp=sharing&ouid=104625987190807694275";

  const urlFinal =
    urlFormulario +
    "?entry.1111111111=" + encodeURIComponent(nombre) +
    "&entry.2222222222=" + encodeURIComponent(correo) +
    "&entry.3333333333=" + encodeURIComponent(direccion) +
    "&entry.4444444444=" + encodeURIComponent(productoSeleccionado) +
    "&entry.5555555555=" + encodeURIComponent(precioSeleccionado);

  window.open(urlFinal, "_blank");
}
