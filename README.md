# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Caynalin Bedoya (vervangen door jouw naam)

  #### Je startniveau:
  Blauw (kies uit zwart, rood óf blauw)

  #### Je focus:
  Surface Plane (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
  https://studio-lofigirl.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Lofi Studio - Home
  <img src="readme-images/studio-lofigirl.com-HOME-MOBILE.png" width="375px" alt="Lofi Studio is een groep animators, illustrators en andere artiesten die zich focusen op het creeren van mooie visuals en partneren met bekende brands als Disney en Psyonix">

  #### Screenshot(s) van de tweede pagina (small screen):
   Lofi Studio - Projects  
  <img src="readme-images/studio-lofigirl.com-PROJECTS-MOBILE.png" width="375px" alt="In deze pagina kun je alle projecten vinden waar leden van Lofi Studios aan hebben gewerkt.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  <img src="readme-images/Lofi Studios - validator.w3.org.png">

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/BREAKDOWN SCHETS - MOBILE - HOME.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1: Caynalin    |
  - Is mn Html goed so far?
  - Hoe doe ik de logo animatie?
  - font toevoegen?
  - Is de website challenging genoeg?
  - Doe ik de services als grid of UL?
  - Hoe creer ik de banner? 
  - Moet de titel als H1 of als Img?
  - Ja ik moet nog alt texten toevoegen voor e reader.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Span, hoe ik dingen kan verbergen die ik wel wil horen in een screen reader. Bij het maken van de lofi titel die een png op de originele website is. Src = https://www.a11yproject.com/posts/how-to-hide-content/ 
  - geen articles gebruiken als je niet weet wat het zijn.
  - Grid is css

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  - Volgensmij ging de opstelling van de content in mijn  website goed. Het meeste kon ik wel geordend er alvast in zetten.
  - De theorie van de les (hamburger menu oefenig) gaat iets minder goed. Ik probeer een hamburger menu te coderen op mijn website, maar dit moet ik wat vaker oefenen om het werkend te krijgen.

  ### Agenda voor meeting
  samen met je groepje opstellen

  ### Vragen voor 2e voortgang gesprek
  | student 1: Caynalin    |
  - Waar kan ik het beste de HOME_BACKGROUND_ART.JPG plaatsen? Header? Main?

Main/Sectie 3
- mag je meerdere h2 hebben in 1 section? (relevant voor section 3)
- Hoe kan ik er voor zorgen dat een e-reader weet welke H2 hoort bij welke p binnen dezelfde sectie als er meerdere h2 en p’s zijn? (relevant voor section 3)
- Heb ik bij sectie 3 correct de SPAN  en IMG gebruikt in de h2’s?
- kan ik voor sectie 3 de volgende methode toepassen voor de iconen https://fontawesome.com/docs/web/dig-deeper/accessibility
Zijn de iconen decoratief of een semantisch element?

Main/sectie 4
- kan ik <b> en <br> gebruiken voor readability en hoe accessable is het?
- heb ik sectie 4 goed opgesteld? Img, h2, h3 , br, b, etc.

 | student 2: Zineb    |
 Mag ik 2 classes gebruiken voor 2 pagina’s (home & shop) Zodat mijn css niet kapot gaat op de andere pagina en mijn codes worden overschrijdt door elkaar omdat de andere pagina ook een body, main heeft. 
Veel css code voor 1 section, nodig of overbodig? Is mijn manier :nt-first-of-type handig? Of kan het overzichtelijker met andere selectoren?
“Shop producten” (h1) komt niet boven mijn grid layout te staan, van alles geprobeerd. 
Grid layout mobile first > hoe kan ik het op desktop anders laten zien. 
Blokje “the lift kit” wil ik position:absolute gebruiken maar kan ik dit in een div doen of bijvoorbeeld section in een section? Omdat het een aparte content blokje is in de section.  

Hidde van der Plaat
- Is het gebruik van een media query voor responsive font sizes een goed idee?
- Hoe kan ik het beste het main element indelen? ik heb nu een section met kleinere sections erin.
- Hoe kan ik het beste het grid-template vormgeven zodat deze responsive is? ik probeer namelijk een max-height te gebruiken maar dit lukt niet helemaal.
- Ik gebruik nu veel percentages als schaal. Is dat wenselijk?

Danisha Kreuning
Mijn achtergrond heeft een soort overlay foto, hoe kan ik dit het beste toepassen?
Hoe kan ik de afbeelding groottes aanpassen zonder de hele foto gelijk te vervormen?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

Geholpen met...
  - het ordenen van de home background image. 


  

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Afgelopen week ik heb ik ivm mentale klachten als gevolg van persoonlijke omstandigheden wat minder voortgang geboekt vergeleijken met voorgaande weken. Ik heb bij de decaan aan de bel getrokken en heb een afspraak met Casper Riekwel op 31 October om 9:30.
  Ik zal zeker mijn best doen om komend recess wat grotere sprongen te maken met mijn voortgang.

  Wel heb ik in code pen een hamburger menu geanimeerd en ik wil deze code graag in mijn bestand verwerken samen wat animeer technieken die we vorige week hebben behandeld: https://codepen.io/CaynaCanCode/pen/mdaQJZY

  Er was een verandering in de UI design van de originele website sinds vorige week
  <img src="readme-images/NieuweUI-19:10:23-studio-lofigirl.com_(iPhone 12 Pro).png" width="375px" >


  ### Agenda voor meeting
  samen met je groepje opstellen

| student 1: Cayna |     
  - Hoe kan ik mijn code pen Hamburger menu code in mijn bestand verwerken.https://codepen.io/CaynaCanCode/pen/mdaQJZY
  - Hoe zorg ik ervoor dat de animatie gecentreerd in he scherm verschijnt.

  Main/Sectie 3
  - mag je meerdere h2 hebben in 1 section? (relevant voor section 3)
  - Hoe kan ik er voor zorgen dat een e-reader weet welke H2 hoort bij welke p binnen dezelfde sectie als er meerdere h2 en p’s zijn? (relevant voor section 3)
  - Heb ik bij sectie 3 correct de SPAN  en IMG gebruikt in de h2’s?
  - kan ik voor sectie 3 de volgende methode toepassen voor de iconen https://fontawesome.com/docs/web/dig-deeper/accessibility
  Zijn de iconen decoratief of een semantisch element?

  Main/sectie 4
  - kan ik <b> en <br> gebruiken voor readability en hoe accessable is het? Nee is nooit goed
  - heb ik sectie 4 goed opgesteld? Img, h2, h3 , br, b, etc.

| student 2:  |        
| student 3:  |
| student 4:  |

Main/sectie 4
- kan ik <b> en <br> gebruiken voor readability en hoe accessable is het?
- heb ik sectie 4 goed opgesteld? Img, h2, h3 , br, b, etc.


### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Geholpen met [aria-current="page"] styling, je moest display: block; toevoegen (Let wel op dat je kan uitleggen waarom je dit nodig had)
  - Section 1: zet img in list. Je hebt een meta queery nodig

</details>



## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes
- Ik heb custom properties leren gebruiken.
- ik heb media queries leren gebruiken! Al ging ik for een wat meer surface level website. Ik heb het toch wel hier en daar responsive kunnen maken met de media queries.
- Een image banner plaatens, centreren en responsive maken
- Ik heb een hamburgeren leren maken, ik vind het nog steeds moeijlijk te begrijpen, maar door stappen te volgen lukt het prima en ik leer resourcefull naar informatie te zoeken en het effectief toe te passen.
- Ik heb heb tools als AI beter leren gebruiken om zowel te spelende wijze te leren als efficient moderne tools gebruiken. Door met de ai te comuniceren alsof het mijn leeraar is, heb ik veel beter de stof tot me kunnen nemnen. Ik vroeg dingen als "can you explain to me step by step" en vroeg waarom een element nodig was.

  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

Dingen waar ik tegen aan liep:
- Het plaatsen van een achtergrond banner, ik heb veel moeten zoeken, en ik kwam op gegevn uit bij een methode die divs gebruikte. Eerst dacht ik dat het niet anders kon. Ik heb daarna toch een beetje verder gezocht en ik kwam en leerde dat je niet perse een image container nodig heb maar het ook direct in de <header style="background-image: url('images/Home_Background_Art.jpg');"> kan zetten.

- Ik liep ook vast met mijn drop down menu vaak. Ik merkte dat ik soms conflicterende codes had, maar door te blijven proberen en goed te lezen via de inspecteer functie van Chrome, kwam ik er steeds sneller achter als dit gebeurde. 
- Ik ging voorral voor een surface level mobiel website, maar ik wilde ook een paar responsive features toe te voegen. Ik heb dit voorraal in het menu gedaan. Door hier aan te knutselen heb ik veel geleerd over media queries! Het koste me eerst veel moeite om uit te vogelen hoe ik "contact us" op verschillende plekken in de bar zichtbaar kon maken bij varierende scherm breedtes. Ik kan nu met vertrouwen zeggen dat ik hier een beetje handigheid mee heb ontwikkeld. Ik wilde ook het menu verder uitwerken en kompleet in dekstop width laten uitklappen, maar daar had ik wel wat meer tijd voor nodig gehad. Het kost mij meestal wel tijd maar uit eindelijk kom ik er
- Het lastigste vond ik uiteindelijk wel de GRIDS en flexbox. Hier moest ik het vaakst voor spieken. Maar zlefs als ik het volgend de stappen deed die online staan, lukte het me niet om de content in de rechter kolommen te krijgen en ik weet nogsteeds niet wat ik daar fout deed. Ik ga me er wel verder in verdiepen want nu wil ik het weten haha.
  <img src="readme-images/lofi websit 1.png" width="375px" alt="bummer">
  <img src="readme-images/lofi websit 2.png" width="375px" alt="bummer">
   <img src="readme-images/lofi websit 3.png" width="375px" alt="bummer">

</details>





###### Bronnenlijst ######

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

 ### Please help me center <a href="Our-services.html">See all services</a> in the middle of the screen in a responsive way.

- **Chat GPT’S answer**
    
    You can use a combination of Flexbox and media queries to center the "See all services" link in a responsive way. Add the following CSS rule to your existing styles:
    
    ```css
    /* Center the "See all services" link */
    section:nth-of-type(3) a[href="Our-services.html"] {
        display: block;
        margin: 0 auto;
        text-align: center;
        padding: 1em; /* Add some padding for better visibility and touch target */
        border-radius: var(--my-radius);
        background-color: var(--third-color);
        color: var(--secondary-color);
        text-decoration: none;
        font-weight: bold;
    }
    
    /* Adjust padding and styles as needed */
    @media (max-width: 768px) {
        section:nth-of-type(3) a[href="Our-services.html"] {
            padding: 0.75em; /* Adjust padding for smaller screens */
        }
    }
    
    ```
    
    This CSS code targets the "See all services" link in the third section, applying styles to center it on the screen. The `@media` query adjusts the padding for smaller screens to ensure a good user experience. Feel free to adjust the padding and styles based on your design preferences.
    

### Please help me center the <a href="Our-projects.html">See all projects</a>

- **Chat GPT’S answer**
    
    To center the "See all projects" link in the footer, you can apply a CSS style. Add the following CSS rule to your stylesheet:
    
    ```css
    footer a[href="Our-projects.html"] {
        display: block;
        margin: 0 auto;
        text-align: center;
    }
    
    ```
    
    This CSS rule targets the specific link with the href attribute set to "Our-projects.html" within the footer. It sets the display property to "block" to make it a block-level element, and then it uses `margin: 0 auto;` to center it horizontally. Finally, `text-align: center;` ensures the text inside the link is centered.
    
    Remember to adjust the href attribute in the CSS selector if the link changes.
    

- **SAVE THIS CSS FOR SECTION 1 AND 1 INCASE ALL FAILS**
    
    ```css
    /***************/
    /*  SECTION 1: GET TO KNOW US */
    /***************/
    
    section:first-of-type li {
    	display: flex;
        flex-direction: column;
    	margin-top: 2em;
    }
    
    /***************/
    /*  SECTION 2: THEY TRUST US */
    /***************/
    
    section:nth-of-type(2) {
    	display: grid;
    	grid-template-columns: 1fr;
    	gap: 1em;
    	background-color: var(--third-color);
    	text-align: center;
    	padding: 2em;
      }
      
      section:nth-of-type(2) h3 {
    	font-size: 1em;
      }
      
      section:nth-of-type(2) ul {
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: center;
    	list-style: none;
    	padding: 0;
      }
      
      section:nth-of-type(2) li {
    	flex: 1 1 calc(50% - 1em);
    	max-width: calc(50% - 1em);
    	text-align: center;
      }
      
      section:nth-of-type(2) img {
    	width: 100%;
    	padding: 1.5625em;
    	margin-left: 0.625em;
    	border-radius: 0;
      }
      
      @media (min-width: 32em) {
    	section:nth-of-type(2) {
    	  display: grid;
    	  grid-template-columns: 1fr 1fr;
    	  text-align: left;
    	}
      
    	section:nth-of-type(2) h2,
    	section:nth-of-type(2) h3 {
    	  grid-column: 1 / -1; /* Span both columns */
    	  text-align: left; /* Align text to the left within the grid cell */
    	}
      
    	section:nth-of-type(2) ul {
    	  justify-content: flex-start; /* Align the list to the start (top) of its container */
    	}
      }
    ```
    

### Can you explain to me step for step please how to make a two column grid within a section?

- **Chat GPT’S answer**
    
    Certainly! Here's a step-by-step explanation of how to create a two-column grid within a section:
    
    ### Step 1: Identify the Section
    
    First, identify the `section` in your HTML where you want to create the two-column grid.
    
    ```html
    <section>
      <!-- Your content goes here -->
    </section>
    
    ```
    
    ### Step 2: Apply CSS for Grid Layout
    
    Apply CSS to the identified `section` to create a two-column grid.
    
    ```css
    section {
      display: grid;            /* Set the display property to grid */
      grid-template-columns: 1fr 1fr;  /* Define two columns with equal width */
      gap: 20px;                /* Add a gap between columns (adjust as needed) */
    }
    
    ```
    
    In this example, `1fr` stands for 1 fraction unit, and it will distribute the available space equally between the two columns.
    
    ### Step 3: Adjust Content Styles
    
    You might want to adjust the styles for the content within the section. For example:
    
    ```css
    section h2, section h3, section p {
      /* Styles for headings and paragraphs in the first column */
    }
    
    section img {
      /* Styles for images in the second column */
    }
    
    ```
    
    ### Step 4: Responsive Design (Optional)
    
    Consider adding a media query for responsive design, especially if you want to change the layout on smaller screens.
    
    ```css
    @media (max-width: 767px) {
      section {
        grid-template-columns: 1fr;  /* Change to a single column on smaller screens */
      }
    }
    
    ```
    
    This is a basic guide to creating a two-column grid within a section. Adjust the styles and sizes according to your design preferences. If you have specific content or layout in your `section`, you may need to adapt the CSS accordingly.
    

### How do I organize the section:nth-of-type(2) in a responsive flexbox?

- **Chat GPT’S answer**
    
    To organize `section:nth-of-type(2)` as a responsive flexbox, you can make a few adjustments to your CSS. It looks like you want to switch between grid and flexbox based on the screen width.
    
    Here's the updated CSS:
    
    ```css
    /***************/
    /*  SECTION 2: THEY TRUST US */
    /***************/
    
    section:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2em;
      gap: 1em;
      background-color: var(--third-color);
    }
    
    section:nth-of-type(2) h3 {
      font-size: 1em;
    }
    
    section:nth-of-type(2) ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1em;
      list-style: none;
      padding: 0;
    }
    
    section:nth-of-type(2) li {
      flex: 1 1 calc(50% - 1em);
      max-width: calc(50% - 1em);
      text-align: center;
    }
    
    section:nth-of-type(2) img {
      width: 100%;
      border-radius: var(--my-radius);
      padding: 1.5625em;
      margin-left: 0.625em;
    }
    
    ```
    
    Here are the changes:
    
    1. I set `display: flex;` on `section:nth-of-type(2)` to make it a flex container.
    2. I set `flex-direction: column;` to stack the child elements vertically on smaller screens.
    3. I adjusted styles for `ul` and `li` to create a responsive layout. `flex-wrap: wrap;` allows items to wrap onto the next line on smaller screens, and `flex: 1 1 calc(50% - 1em);` and `max-width: calc(50% - 1em);` control the width of each item.
    
    This should make `section:nth-of-type(2)` responsive using a flexbox layout. Adjust the values as needed for your design.
    

### How do I make  <li><a href="Contact.html" >Contact us</a></li> appear with a smoot transition?

- **Chat GPT’S answer**
    
    To make the appearance or disappearance of elements smoother, you can use CSS transitions. In your case, you want to make the `<li>` containing "Contact us" disappear when the screen width is above 34em. Here's how you can do it:
    
    CSS:
    
    ```css
    nav ul li {
        transition: opacity 0.3s ease; /* Add a transition property for opacity */
    }
    
    /* Apply different styles for screens above 34em */
    @media (min-width: 34em) {
        nav ul li {
            opacity: 0;
            pointer-events: none; /* Disable pointer events to make it unclickable */
            max-height: 0; /* Optionally, set max-height to 0 to fully collapse the element */
            overflow: hidden; /* Hide any overflowing content */
        }
    }
    
    ```
    
    This CSS code adds a transition effect on the `opacity` property for smooth fading. The `pointer-events: none;` property ensures that the hidden element is not clickable, and `max-height: 0; overflow: hidden;` can be used if you want to collapse the element fully.
    
    This should make the "Contact us" item smoothly disappear when the screen width is above 34em. Adjust the transition duration (`0.3s` in this example) and other properties as needed for your design.
    

### How do I put a background image in the
main > header > img

- **Chat GPT’S answer**
    
    To add a background image to the `main > header > img` element, you can use the `background-image` property in your CSS. Since you're trying to set a background image on an `img` element, you should use an additional container (like a `div`) to act as the background container. Here's an example:
    
    HTML:
    
    ```html
    <main>
        <header>
            <div class="background-image-container">
                <img src="images/Home_Background_Art.jpg" alt="Background Image">
            </div>
            <!-- De titel: Lofi Studio, text logo -->
            <h1><span class="visually-hidden"> Welcome to the home page of Lofi Studio </span><img src="images/Lofi_Studio_Logo-1024x577.png" alt="Go to homepage"></h1>
        </header>
        <!-- Rest of your content -->
    </main>
    
    ```
    
    CSS:
    
    ```css
    main > header {
        position: relative; /* Make the container relative for absolute positioning */
    }
    
    .background-image-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* Place the background container behind other content */
    }
    
    .background-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure the image covers the container */
    }
    
    ```
    
    This code creates a container (`background-image-container`) around the `img` element and sets the background image on this container. The `z-index: -1;` ensures that the background container is placed behind the other content. The `object-fit: cover;` property ensures that the background image covers the entire container.
    
    Adjust the paths and styles as needed based on your project's structure and design requirements.
    

Mijn code na:

```css
/* Ik heb chat gpt gevraagd om mij te helpen met de BG Image, prompt: How do I put a background image in the
main > header > img */
.background-image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
}
/* Ik heb chat gpt gevraagd om mij te helpen met de BG Image, prompt: How do I put a background image in the
main > header > img */
.background-image-container img {
    width: auto; /* behoudt de aspect ratio */
    height: 100%;
    max-width: 100%; /* Ensure the image doesn't exceed the container's width */
    object-fit: cover;
}
```

### What can I use instead of a div…

what can I use instead of a div with <div class="background-image-container">
<img src="images/Home_Background_Art.jpg" alt="Background Image showing girl in raincoat spalishing in puddles during autumn">
</div> ?

- **Chat GPT’S answer**
    
    HTML:
    
    ```html
    htmlCopy code
    <header style="background-image: url('images/Home_Background_Art.jpg');">
        <!-- Your header content goes here -->
    </header>
    
    ```
    
    This way, the background image is set directly on the **`<header>`** element, and you don't need an additional **`<div>`** just for the background image.
    
    CSS:
    
    ```css
    cssCopy code
    /* Remove the styles related to the background-image-container */
    
    main > header {
        position: relative;
        overflow: hidden;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    /* Adjust the styles for the background image directly on the header */
    main > header {
        background-image: url('images/Home_Background_Art.jpg');
        background-position: center;
        background-size: cover;
    }
    
    /* You can keep or adjust other styles as needed */
    h1 {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ; /* Add your background color if needed */
    }
    
    h1 img {
        width: 70%;
    }
    
    .background-image-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    
    .background-image-container img {
        width: auto;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    
    ```

</details>