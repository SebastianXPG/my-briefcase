// JavaScript para el botón de scroll
const scrollTopButton = document.querySelector('#scrollTopButton');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});
