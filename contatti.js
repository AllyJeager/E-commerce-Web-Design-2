// Ottieni i riferimenti agli elementi del DOM
const searchIcon = document.getElementById('search-icon');
const searchInput = document.querySelector('.search-input');

// Aggiungi un gestore di eventi al clic sull'icona di ricerca
searchIcon.addEventListener('click', function() {
  // Verifica se il campo di input di ricerca ha la classe 'show-search-input'
  if (searchInput.classList.contains('show-search-input')) {
    // Rimuovi la classe 'show-search-input' per nascondere il campo di input di ricerca
    searchInput.classList.remove('show-search-input');
  } else {
    // Aggiungi la classe 'show-search-input' per mostrare il campo di input di ricerca
    searchInput.classList.add('show-search-input');
    searchInput.focus(); // Facoltativo: mette il focus sul campo di input
  }
});
//checkbox
document.querySelector('form').addEventListener('submit', function(event) {
  var checkbox = document.getElementById('myCheck');
  if (!checkbox.checked) {
      event.preventDefault(); // Previene l'invio del modulo
      var errorSpan = document.querySelector('.checkbox-error');
      errorSpan.style.display = 'block'; // Mostra il messaggio di avviso
  }
});
//messaggio inviato
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Previeni l'invio del modulo
  var checkboxChecked = document.getElementById("myCheck").checked;
  
  if (checkboxChecked) {
    // Nascondi il modulo di contatto
    document.getElementById("contact-form").style.display = "none";

    // Mostra il messaggio di conferma
    document.getElementById("confirmation-message").style.display = "block";
  }
});

//scrolltop
function scrollToTop() {
  window.scrollTo(0, 0);
}
