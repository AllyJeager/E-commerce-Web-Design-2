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

document.addEventListener('DOMContentLoaded', function() {
  //Initialize Swiper
  var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


//Initialize Swiper2
     var swiper = new Swiper(".mySwiper2", {
       slidesPerView: 1,
       spaceBetween: 10,
       pagination: {
         el: ".swiper-pagination2",
         clickable: true,
       },
       breakpoints: {
         640: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 40,
         },
         1024: {
           slidesPerView: 3,
           spaceBetween: 50,
         },
       },
     });

//scrolltop
function scrollToTop() {
  window.scrollTo(0, 0);
}


document.addEventListener('DOMContentLoaded', function() {
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');

  cookieAccept.addEventListener('click', function() {
      cookieBanner.style.display = 'none';
      localStorage.setItem('cookieConsent', 'true');
  });

  if (!localStorage.getItem('cookieConsent')) {
      cookieBanner.style.display = 'block';
  }
});

 
