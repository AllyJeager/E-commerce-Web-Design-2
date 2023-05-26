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
      "nome": "Prodotto 1",
      "prezzo": 10.00,
      "descrizione": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus nec ante sagittis ultrices vel vitae justo. Fusce at erat neque. Nunc ultrices risus sed sapien faucibus, a elementum nibh vestibulum. Sed ut metus nulla. Nulla in nisi in elit consectetur mollis. ",
      "immagine": "https://via.placeholder.com/600x400",
     "categoria": "xxxx"
    },
    {
      "id": 2,
      "nome": "Prodotto 2",
      "prezzo": 20.00,
      "descrizione": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus nec ante sagittis ultrices vel vitae justo. Fusce at erat neque. Nunc ultrices risus sed sapien faucibus, a elementum nibh vestibulum. Sed ut metus nulla. Nulla in nisi in elit consectetur mollis. ",
      "immagine": "https://via.placeholder.com/600x400",
     "categoria": "xxxx"
    },
    {
      "id": 3,
      "nome": "Prodotto 3",
      "prezzo": 30.00,
      "descrizione": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus nec ante sagittis ultrices vel vitae justo. Fusce at erat neque. Nunc ultrices risus sed sapien faucibus, a elementum nibh vestibulum. Sed ut metus nulla. Nulla in nisi in elit consectetur mollis. ",
      "immagine": "https://via.placeholder.com/600x400",
     "categoria": "xxxx"
    }
    ];
     

     let html = "";
      for (var i = 0; i < products.length; i++) {
        var productPrice = products[i].prezzo;
        var categoryMatch = selectedCategory === 'tutti' || products[i].categoria.contains(selectedCategory);
        var priceMatch = productPrice <= priceRangeValue;

        if (categoryMatch && priceMatch) {
          html += " divxxx ";
        }
      }
     document.getElementById("rigacontenutore").innerHTML = html;
    }
