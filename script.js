function mostrarIdioma() {
  var idioma = navigator.language || navigator.userLanguage;
  var idiomaMostrado = "";

  // Diccionario de regiones y etiquetas de idioma
  var regiones = {
    "es-419": "Español (Latinoamérica)",
    "es-ES": "Español (España)",
    // Agrega más regiones y sus etiquetas de idioma aquí
  };

  // Verificar si el idioma tiene una etiqueta específica para la región
  if (idioma in regiones) {
    idiomaMostrado = regiones[idioma];s
  } else {
    // Si no hay una etiqueta específica, mostrar solo el idioma
    idiomaMostrado = idioma;
  }

  document.getElementById("idioma").textContent = idiomaMostrado;
}

// Espera a que se cargue completamente la página antes de ejecutar el código
window.addEventListener("load", function() {
  // Obtiene la referencia al contenedor del doodle y a la imagen del doodle
  var doodleContainer = document.getElementById("doodle-container");
  var doodleImage = document.getElementById("doodle-image");
  
  // Genera un número aleatorio para seleccionar un doodle de la lista
  var randomIndex = Math.floor(Math.random() * doodles.length);
  // Obtiene la ruta del doodle seleccionado
  var randomDoodle = doodles[randomIndex];
  
  // Actualiza la fuente de la imagen con la ruta del doodle seleccionado
  doodleImage.src = randomDoodle;
});

mostrarIdioma();
