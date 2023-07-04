// Elenco prodotti
let products = [
  {
    id: 1,
    nome: "Chainsaw Man 12",
    prezzo: 5.0,
    immagine: "immagini/shounen/cm12.jpg",
    categoria: "shounen",
    descrizione: "La nuova stagione di Chainsaw Man! L’attesa è finita: la serie di culto di Tatsuki Fujimoto torna con nuovi avvincenti capitoli. Il diavolo-motosega, detestato dai suoi simili e paladino degli esseri umani, è sulla bocca di tutti. Una nuova minaccia si profila all’orizzonte, ma che fine ha fatto Chainsaw Man?",
  },
  {
    id: 2,
    nome: "Alice in Borderland 8",
    prezzo: 12.0,
    immagine: "immagini/shounen/aib8.jpg",
    categoria: "shounen",
    descrizione: "Arisu, un ex studente disoccupato e appassionato dei videogiochi, si ritrova improvvisamente catapultato nella Tokyo alternativa di una “Terra di confine” identica in tutto e per tutto a quella reale, ma deserta e di roccata. In compagnia di due amici, il duro Karube e l’erotomane Chota, Arisu sarà costretto ad affrontare in quello scenario desolato un vero e proprio survival game, nella forma di una sequenza di giochi dalla difficoltà potenzialmente... mortale. Riusciranno i tre ragazzi a sopravvivere a questo nuovo, pericoloso mondo? Chi ha creato tutto questo? Ma, soprattutto, c’è un modo, per loro, di tornare alle loro vite originali? Dalla mente del creatore di Zombie 100 e Hyde & Closer, Haro Aso, arriva il manga di culto che ha ispirato i popolari adattamenti anime e live action!",
  },
  {
    id: 3,
    nome: "Oshi no Ko 7",
    prezzo: 7.0,
    immagine: "immagini/seinen/onk7.webp",
    categoria: "seinen",
    descrizione: "La splendida idol Ai Hoshino, celeberrima pop star di soli sedici anni, sembra davvero rappresentare l’adolescente ideale. Ma non è tutto oro ciò che luccica e anche nella sua vita all’apparenza perfetta si annida uno scandalo: pur così acerba, la ragazza è infatti incinta! Raggiunta un’area rurale per partorire con maggiore privacy, Ai dà alla luce due gemelli, aiutata da Goro, un ginecologo che è anche un grande fan della giovane idol. Tuttavia, dopo il parto, il dottore perde la vita misteriosamente... per risvegliarsi in grembo alla sua adorata cantante, reincarnato in uno dei figli di lei! Attraverso gli occhi di Goro, scopriremo così le verità che si nascondono all’interno della scintillante industria dello spettacolo. Quali torbidi misteri si celano dietro le quinte? è possibile raggiungere la vetta del successo senza che il mondo del glamour ti inghiotta completamente? Fin dove sarà disposto a spingersi Goro per proteggere la sua amata, ehm, mamma, Ai? Si alza il sipario sullo spettacolo 2.5D del manga best seller “Tokyo Blade”. In scena infuria lo scontro fra l’ex bambina prodigio Kana Arima e l’asso della compagnia Lalalai Akane Kurokawa, legate fin da piccole dal filo rosso del destino. E poi, riuscirà Aqua a diventare un attore in tutto e per tutto, affrontando il proprio trauma per caricare la sua recitazione di emotività? L’arco dello spettacolo 2.5D sta per concludersi.",
  },
  {
    id: 4,
    nome: "My Dress Up Darling 9",
    prezzo: 7.0,
    immagine: "immagini/seinen/mdud9.jpeg",
    categoria: "seinen",
    descrizione: "Wakana Gojou è un liceale molto introverso e timido, che evita di aprirsi ai suoi coetanei per paura che scoprano la sua passione per le bambole giapponesi e la sua incredibile bravura nella sartoria. Un giorno, però, la sua maestria con ago e filo viene scoperta da Kitagawa, una bellissima e socievole gyaru con una passione altrettanto insospettabile: il cosplay. Nasce così un’amicizia atipica, creativa e molto... movimentata! Dopo aver accettato una maggiore quantità di ingaggi, Marin può finalmente permettersi una reflex a obiettivo singolo, ed è ora in grado di partecipare alle fiere di cosplay cimentandosi anche nella fotografia. Nel frattempo, Wakana inizia a nutrire un’ammirazione particolare nei confronti di una persona conosciuta attraverso i social network e si accinge a incontrarla durante uno di questi eventi… Dopo essersi avventurato tra sartoria e locali da host, il nostro eroe sta per rivolgere lo sguardo verso un nuovo e affascinante mondo: quale sarà la sua reazione?",
  },
  {
    id: 5,
    nome: "A Sign of Affection 5",
    prezzo: 4.0,
    immagine: "immagini/shoujo/a-sign-of-affection-5.jpg",
    categoria: "shoujo",
    descrizione: "Un giorno, in un momento di difficoltà, una studentessa universitaria di nome Yuki viene aiutata da Itsuomi, un senpai che frequenta il suo stesso istituto. Il giovane la tratta con grande naturalezza e non si scompone minimamente quando capisce che la ragazza è sorda. Ben presto, Yuki scoprirà di provare qualcosa per quel ragazzo, grazie al quale ha cominciato a percepire la realtà in maniera del tutto nuova...",
  },
  {
    id: 6,
    nome: "Weekly Shounen Jump 2023 n15",
    prezzo: 30.0,
    immagine: "immagini/giappone/weekly-shonen-jump-15-2023-blue-box.webp",
    categoria: "dalgiappone",
    descrizione: "Il numero 15 di Weekly Shonen Jump in uscita in Giappone si apre con la serie manga Blue Box di Miura Kouji.",
  },
];

// Ottieni i riferimenti agli elementi del DOM
const searchIcon = document.getElementById("search-icon");
const searchInput = document.querySelector(".search-input");

// Aggiungi un gestore di eventi al clic sull'icona di ricerca
searchIcon.addEventListener("click", function () {
  // Verifica se il campo di input di ricerca ha la classe 'show-search-input'
  if (searchInput.classList.contains("show-search-input")) {
    // Rimuovi la classe 'show-search-input' per nascondere il campo di input di ricerca
    searchInput.classList.remove("show-search-input");
  } else {
    // Aggiungi la classe 'show-search-input' per mostrare il campo di input di ricerca
    searchInput.classList.add("show-search-input");
    searchInput.focus(); // Facoltativo: mette il focus sul campo di input
  }
});

searchInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    if(searchInput.value == "")
      return;
    window.location.href=`prodotti.html?s=${searchInput.value}`;
  }
});

//prodotti loading
document.addEventListener("DOMContentLoaded", function () {
  var Path=window.location.pathname;
  var Page = Path.substring(Path.lastIndexOf("/") + 1);
  var Search =window.location.search
  var Query = Search.substring(Search.lastIndexOf("?s=") + 3);

  if(Page!="prodotti.html" && Query=="")
    return;

  let html="";
  products.forEach((product) => {
    if (
      product.nome.toLowerCase().includes(Query.toLowerCase())
    ) {
      html += `<div class="col col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
               <div class="product ${product.categoria}" data-price="${
      product.prezzo
    }">
                   <img class="prodottoimg" alt="place" src="${
                     product.immagine
                   }">
                   <div>
                    <a class="nome" href="prodotto.html?p=${product.nome}">
                      <p class="nome">${product.nome}</p>
                    </a>
                    <b>${product.prezzo.toFixed(2)}€</b>
                    <br>
                    <a class="btn btn-danger">Aggiungi al carrello</a>
                   </div>
               </div>
           </div>`;
    }
  });
  document.getElementById("rigacontenitore").innerHTML = html;
});

//prodotto singolo
document.addEventListener("DOMContentLoaded", function () {
  var Path=window.location.pathname;
  var Page = Path.substring(Path.lastIndexOf("/") + 1);
  var Search = window.location.search
  var Query = Search.substring(Search.lastIndexOf("?p=") + 3);

  if(Page!="prodotto.html" && Query=="")
    return;

  let html="";
  products.forEach((product) => {
    if (product.nome.toLowerCase()== decodeURIComponent(Query).toLowerCase()) {
      html += `
      <div class="row">
        <div class="col-md-6">
          <img src="${product.immagine}" alt="Immagine di esempio" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h2 class="mb-4">${product.nome}</h2>
          <p id="story" class="mb-4">${product.descrizione}</p>
          <h4 class="mb-3">Prezzo:${product.prezzo.toFixed(2)}€</h4>
          <form>
            <div class="mb-3">
              <label for="quantita" class="form-label">Quantità:</label>
              <input type="number" class="form-control" id="quantita" min="1" value="1">
            </div>
            <span class="btn btn-danger">Aggiungi al carrello</span>
          </form>
        </div>
      </div>`;
    }
  });
  document.getElementById("cambiabileHAHA").innerHTML = html;
});


//pagina contatti
//checkbox
document.querySelector("form").addEventListener("submit", function (event) {
  var checkbox = document.getElementById("myCheck");
  if (!checkbox.checked) {
    event.preventDefault(); // Previene l'invio del modulo
    var errorSpan = document.querySelector(".checkbox-error");
    errorSpan.style.display = "block"; // Mostra il messaggio di avviso
  }
});
//messaggio inviato
if (document.getElementById("contact-form") != null) {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Previeni l'invio del modulo
      var checkboxChecked = document.getElementById("myCheck").checked;

      if (checkboxChecked) {
        // Nascondi il modulo di contatto
        document.getElementById("contact-form").style.display = "none";

        // Mostra il messaggio di conferma
        document.getElementById("confirmation-message").style.display = "block";
      }
    });
}

// filtro
if (document.getElementById("priceRange") != null) {
  var priceRange = document.getElementById("priceRange");
  var priceDisplay = document.getElementById("priceDisplay");

  priceRange.oninput = function () {
    priceDisplay.innerHTML = "€" + priceRange.value;
  };
}

function filterProducts() {
  var selectedCategory = document.getElementById("categoryDropdown").value;
  var priceRangeValue = document.getElementById("priceRange").value;
// prodotti dinamici
  let html = "";
  products.forEach((product) => {
    console.log(selectedCategory);
    if (
      product.prezzo <= parseInt(priceRangeValue) &&
      (product.categoria == selectedCategory || selectedCategory == "tutti")
    ) {
      html += `
      <div class="col col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="product ${product.categoria}" data-price="${product.prezzo}">
          <img class="prodottoimg" alt="place" src="${product.immagine}">
          <div>
            <a class="nome" href="prodotto.html?p=${product.nome}">
              <p class="nome">${product.nome}</p>
            </a>
            <b>${product.prezzo.toFixed(2)}€</b>
            <br>
            <a class="btn btn-danger">Aggiungi al carrello</a>
          </div>
        </div>
      </div>`;
    }
  })

  document.getElementById("rigacontenitore").innerHTML = html;
}

//scrolltop
function scrollToTop() {
  window.scrollTo(0, 0);
}
//cookie
document.addEventListener("DOMContentLoaded", function () {
  var cookieBanner = document.getElementById("cookie-banner");
  var cookieAccept = document.getElementById("cookie-accept");

  cookieAccept.addEventListener("click", function () {
    cookieBanner.style.display = "none";
    localStorage.setItem("cookieConsent", "true");
  });

  if (!localStorage.getItem("cookieConsent")) {
    cookieBanner.style.display = "block";
  }
});
//home loading
document.addEventListener("DOMContentLoaded", function () {
  var sPath=window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
  if(sPage!="index.html")
    return;

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
// prodotti dinamici home
  html = "";
  products.forEach((product) => {
    html += `
<div class="swiper-slide img">
  <div class="card">
    <img
      class="card-img-top"
      alt="place"
      src=${product.immagine}
    >
    <div class="card-body">
      <a class="nome" href="prodotto.html?p=${product.nome}">
        <p class="nome">${product.nome}</p>
      </a>
      <b>${product.prezzo.toFixed(2)}€</b>
      <br>
      <a class="btn btn-danger">Aggiungi al carrello</a>
    </div>
  </div>
</div>`;
  });
  document.getElementById("TEST").innerHTML = html;
});
//carrello
function calculateTotal() {
  var priceElement = document.querySelector(".card-text.price");
  var quantityElement = document.querySelector(".form-control.quantity");
  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (priceElement && quantityElement && subtotalElement && shippingCostElement && totalAmountElement) {
    var priceString = priceElement.textContent;
    var price = parseFloat(priceString.replace("Prezzo: ", "").replace("€", "").replace(",", "."));
    var quantity = parseInt(quantityElement.value);
    var total = price * quantity;

    var totalElement = quantityElement.parentNode.nextElementSibling;
    totalElement.textContent = "Totale: €" + total.toFixed(2);

    subtotalElement.textContent = "€" + total.toFixed(2);

    var shippingCost = 2.00; // Inserisci il valore effettivo dei costi di spedizione
    shippingCostElement.textContent = "€" + shippingCost.toFixed(2);

    var totalAmount = total + shippingCost;
    totalAmountElement.textContent = "€" + totalAmount.toFixed(2);
  }
}

function removeProduct(event) {
  var card = event.target.closest(".card");
  card.remove();

  var subtotalElement = document.getElementById("subtotal");
  var shippingCostElement = document.getElementById("shippingCost");
  var totalAmountElement = document.getElementById("totalAmount");

  if (subtotalElement && shippingCostElement && totalAmountElement) {
    subtotalElement.innerHTML = "€0,00";
    shippingCostElement.innerHTML = "€0,00";
    totalAmountElement.innerHTML = "€0,00";
  }
}
