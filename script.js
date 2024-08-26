// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var deOpenButton = document.querySelector("header > button")
var hetMenu = document.querySelector("nav")

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deOpenButton.onclick = openNav;

// stap 3: voeg in de functie een class toe aan de nav

function openNav() {
  hetMenu.classList.toggle("open");
  deOpenButton.classList.toggle("open")
}

/******************************/
/******************************/

/* 5 SURFACE PLANE FEATURES */

/******************************/
/******************************/

/********************************************************/
/* ♪ ♪ ♪ ♪ ♪ ♪ ♪ 1. ACHTERGROND MUZIEK ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪   */
/********************************************************/
// Wacht tot de pagina helemaal geladen is
document.addEventListener('DOMContentLoaded', function() {

    // Zoek het audio-element, de knop en slider in de HTML
    var music = document.getElementById('background-music');
    var toggleMusicButton = document.getElementById('toggle-music');
    var volumeSlider = document.getElementById('volume-slider')

    // Als er op de knop wordt geklikt, moet deze code uitgevoerd worden
    toggleMusicButton.addEventListener('click', function() {

        // Als de muziek pauzeert, speel de muziek af en verander de knoptekst naar 'Pause Music'
        if (music.paused) {
          music.play();
          toggleMusicButton.textContent = 'Pause Music';
          toggleMusicButton.classList.add('is-playing');
        } else {
          music.pause();
          toggleMusicButton.textContent = 'Play Music';
          toggleMusicButton.classList.remove('is-playing');
      }
    });

    /*************************************************************/
    /* ♪ ♪ ♪ ♪ ♪ 2. ACHTERGROND MUZIEK - VOLUME SLIDER ♪ ♪ ♪ ♪ ♪ ♪ */
    /*************************************************************/
    // Event listener om het volume aan te passen wanneer de gebruiker de schuifregelaar beweegt
    volumeSlider.addEventListener('input', function() {
      music.volume = this.value / 100; //Zet het volume van de muziek op basis van de slidewaarde
      this.setAttribute('aria-valuenow', this.value);
    });
});

/********************************************************/
/* ♪ ♪ ♪ ♪ ♪ ♪ ♪ 3. CONTACT FORM  ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪   */
/********************************************************/

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Voorkom dat het formulier echt wordt verzonden, anders 404 page

  // Toon de bevestigingsboodschap
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.classList.remove('hidden');

  // Reset het formulier
  event.target.reset();
});
