document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app-container');
  
  // Pequeño retraso para que la transición sea visible
  setTimeout(() => {
    appContainer.classList.remove('opacity-0');
    appContainer.classList.add('opacity-100');
  }, 100); 
});