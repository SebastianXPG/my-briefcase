// Obtenemos el elemento del rastreador del cursor
const cursorTracker = document.querySelector(".cursor-tracker");

// Escuchamos el evento "mousemove" en el documento para rastrear el cursor
document.addEventListener("mousemove", (e) => {
  // Obtenemos las coordenadas X e Y del cursor
  const x = e.clientX;
  const y = e.clientY;

  // Actualizamos la posición del rastreador del cursor
  cursorTracker.style.left = x + "px";
  cursorTracker.style.top = y + "px";
});

// Escuchamos el evento "mouseenter" en el elemento principal
// para mostrar el rastreador del cursor cuando el cursor entra
// en el elemento principal
document.querySelector(".content-svg-skills").addEventListener("mouseenter", () => {
  cursorTracker.style.opacity = 1;
});

// Escuchamos el evento "mouseleave" en el elemento principal
// para ocultar el rastreador del cursor cuando el cursor sale
// del elemento principal
document.querySelector(".content-svg-skills").addEventListener("mouseleave", () => {
  cursorTracker.style.opacity = 0;
});
