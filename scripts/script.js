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
  hetMenu.classList.add("open");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var deSluitButton = document.querySelector("nav button");

deSluitButton.onclick = sluitMenu;

// stap 2 - laat die button luisteren naar kliks
function sluitMenu() {
  hetMenu.classList.remove("open") ;
}

// stap 3 - in de functie verwijder de class van de nav


