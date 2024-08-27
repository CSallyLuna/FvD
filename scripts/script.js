// JavaScript Document
console.log("hihi");

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

/* SURFACE PLANE FEATURES */

/******************************/
/******************************/

/********************************************************/
/* ♪ ♪ ♪ ♪ ♪ ♪ ♪ 1. ACHTERGROND MUZIEK ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪*/
/********************************************************/
//bron: GPT BOT, FRONTEND DEVELOPMENT TEACHER,https://chatgpt.com/share/e2618cf0-7c38-4cab-bd2d-e1854b12e153

// Wacht tot de pagina helemaal geladen is
document.addEventListener('DOMContentLoaded', function() {

  // Zoek het audio-element, de knop en slider in de HTML
  
  var music = document.getElementById('background-music');
  var toggleMusicButton = document.getElementById('toggle-music');
  var volumeSlider = document.getElementById('volume-slider');
  const musicControls = document.getElementById('music-controls');

  // Verberg de volumeregelaar standaard wanneer de pagina wordt geladen
  volumeSlider.classList.add('hidden'); //doet niet wat ik wil, Ik wil dat de volume slider niet zichtbaar is als de pagina laadt. 
  

  // Als er op de knop wordt geklikt, moet deze code uitgevoerd worden
  toggleMusicButton.addEventListener('click', function() {

    // Als de muziek pauzeert, speel de muziek af en verander de knoptekst naar 'Pause Music'
      if (music.paused) {
        music.play();
        toggleMusicButton.textContent = 'Pause Music'; // verander de tekst en speelt muziek
        toggleMusicButton.classList.add('is-playing'); // Styling: niet ingedrukt kleur
        musicControls.classList.add('playing'); // Styling: Voeg de playing class toe aan de music controls om de achtergrond zichtbaar te maken
        volumeSlider.classList.remove('hidden'); // Toon de slider wanneer de muziek speelt
        volumeSlider.classList.add('visible'); // Toon de slider wanneer de muziek speelt
      } else {
        music.pause();
        toggleMusicButton.textContent = 'Play Music'; // verander de tekst en stopt muziek
        toggleMusicButton.classList.remove('is-playing'); // Styling: ingedrukt kleur
        musicControls.classList.remove('playing'); // Styling: Verwijder de playing class om de achtergrond te verbergen
        volumeSlider.classList.remove('visible'); // Verberg de slider wanneer de muziek stopt
        volumeSlider.classList.add('hidden'); // Verberg de slider wanneer de muziek stopt
    }
  });


  /*************************************************************/
  /* ♪ ♪ ♪ ♪ ♪ 2. ACHTERGROND MUZIEK - VOLUME SLIDER ♪ ♪ ♪ ♪ ♪ ♪ */
  /*************************************************************/
  //bron: GPT BOT, FRONTEND DEVELOPMENT TEACHER,https://chatgpt.com/share/b51247dd-f5d1-4bae-9ec3-6133d757c4cd 
  //bron 2: https://www.a11ywithlindsey.com/blog/creating-accessible-range-slider-css

  // Event listener om het volume aan te passen wanneer de gebruiker de schuifregelaar beweegt
  volumeSlider.addEventListener('input', function() {
    music.volume = this.value / 100; //Zet het volume van de muziek op basis van de slidewaarde
    this.setAttribute('aria-valuenow', this.value);
  });
});

/********************************************************/
/* ♪ ♪ ♪ ♪ ♪ ♪ ♪ 3. CONTACT FORM  ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪ ♪   */
/********************************************************/
//bron: GPT BOT, FRONTEND DEVELOPMENT TEACHER, https://chatgpt.com/share/c82a3156-bdab-4753-b6cc-0bcb975b65af

// Stap 1: Zoek het formulier op de pagina en sla het op in een variabele.
// We gebruiken 'getElementById' om het formulier te selecteren via zijn unieke ID.
var form = document.querySelector('form');

// Stap 2: Voeg een 'event listener' toe aan het formulier.
// Een 'event listener' zorgt ervoor dat er iets gebeurt wanneer de gebruiker een bepaalde actie uitvoert, zoals het verzenden van het formulier.
form.addEventListener('submit', function(event) {

    // Stap 3: Voorkom dat het formulier de standaardactie uitvoert.
    // Normaal gesproken zou het formulier worden verzonden naar een server en zou de pagina worden vernieuwd.
    // 'event.preventDefault()' voorkomt dat dit gebeurt, zodat we eerst onze eigen acties kunnen uitvoeren.
    event.preventDefault();

    // Stap 4: Zoek het element met de bevestigingsboodschap op de pagina.
    // We gebruiken 'getElementById' om dit element te selecteren via zijn unieke ID.
    var confirmationMessage = document.querySelector('output');

    // Stap 5: Verwijder de 'hidden' class van de bevestigingsboodschap.
    // Hierdoor wordt de bevestigingsboodschap zichtbaar voor de gebruiker.
    confirmationMessage.classList.remove('hidden');

    // Stap 6: Verwijder/Reset het formulier.
    // form.reset() Hiermee worden alle velden in het formulier geleegd, zodat het weer klaar is voor nieuwe invoer.
    form.remove();
});

