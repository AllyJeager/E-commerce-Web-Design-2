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


var priceRange = document.getElementById('priceRange');
   var priceDisplay = document.getElementById('priceDisplay');

   priceRange.oninput = function() {
     priceDisplay.innerHTML = '€' + priceRange.value;
   };

   function filterProducts() {
     var selectedCategory = document.getElementById('categoryDropdown').value;
     var priceRangeValue = document.getElementById('priceRange').value;
     //var products = document.getElementsByClassName('product');
    
    // Elenco prodotti
   let products = [{
     "id": 1,
     "nome": "Chainsaw Man 12",
     "prezzo": 5.00,
     "immagine": "immagini/shounen/cm12.jpg",
    "categoria": "shounen"
   },
   {
     "id": 2,
     "nome": "Alice in Borderland 8",
     "prezzo": 12.00,
     "immagine": "immagini/shounen/aib8.jpg",
    "categoria": "shounen"
   },
   {
     "id": 3,
     "nome": "Oshi no Ko 7",
     "prezzo": 7.00,
     "immagine": "immagini/seinen/onk7.webp",
    "categoria": "seinen"
   },
                   {
     "id": 4,
     "nome": "My Dress Up Darling 9",
     "prezzo": 7.00,
     "immagine": "immagini/seinen/mdud9.jpeg",
    "categoria": "seinen"
   },
   {
     "id": 5,
     "nome": "A Sign of Affection 5",
     "prezzo": 4.00,
     "immagine": "immagini/shoujo/a-sign-of-affection-5.jpg",
    "categoria": "shoujo"
   },
{
     "id": 6,
     "nome": "Weekly Shounen Jump 2023 n15",
     "prezzo": 30.00,
     "immagine": "immagini/giappone/weekly-shonen-jump-15-2023-blue-box.webp",
    "categoria": "giappone"
   }
   ];
    
   let html = "";
   for (var i = 0; i < products.length; i++) {
     var product = products[i];
     html += `<div class="col col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                 <div class="product ${product.categoria}" data-price="${product.prezzo}">
                     <img class="prodottoimg" alt="place" src="${product.immagine}">
                     <div>
                         <h5>${product.nome}</h5>
                         <b>${product.prezzo.toFixed(2)}€</b>
                         <br>
                         <a class="btn btn-primary">Aggiungi al carrello</a>
                     </div>
                 </div>
             </div>`;
   }
   
   document.getElementById("rigacontenutore").innerHTML = html;
}
