
var vragen = ["vraag1", "vraag2", "vraag3","vraag4", "vraag5", "vraag6","vraag7", "vraag8", "vraag9","vraag10"];
var antwoord = ["antwoord1", "antwoord2", "antwoord3", "antwoord4","antwoord5", "antwoord6","antwoord7", "antwoord8","antwoord9", "antwoord10",];

function kennis1() {

    var vraag = [ "Wat is een Call to undefined function-error?", "Wat is de phpinfo-function?", "Waar kun je de Apache-server fouten traceren?",
                    "Wat is de Rootmap van de Apache-Server?",
                 "Benoem alle error-logs van XAMPP", "Wat is een CMS?","Wat is Joomla?", "Wat is Syntaxis?", "Wat doet de echo-opdracht?", 
                 "Waar kunnen we een PHP-script embedden in een HTML-script?"];
    var antwoorden = ["Het programma kent de functie niet.", "Alle info over het programma.", 
                     "error logs","htdocs.", "php_error.log", "Content Management System", "Een soort opensource CMS.","Goede vraag. Ik heb er geen goed antwoord op.", 
                     "Print tekst op het scherm.", "<?php ?> onderaan de body of in de head."];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.02";

        document.getElementById("uitleg").innerHTML = "<i>Beantwoord deze vragen.</i>";

        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
    };

function kennis2() {

var vraag = ["$auto2", "$auto's", "$auto/onderdelen","$thuis&tuin?" ,"$naw", "$n-a-w", "$n_a_w", "$22", "$$auto", "$autokleur" ];
var antwoorden = ["ja", "nee", "nee", "nee", "ja", "nee", "ja", "nee", "nee", "ja" ];

    document.getElementById("titelKennis").innerHTML = "Kennistoets 1.03";

    document.getElementById("uitleg").innerHTML = "<i>Kunnen deze variabele namen zijn?</i>";
    for (let index = 0; index < vragen.length; index++) {
        document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
        document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
        
    };
   
};

function kennis3() {

    var vraag = ["$type = gettype($tarief)", "$euros = $tarief * $11", "$tarief = round($tarief,2)", "$tarief = round($tarief)", 
                    "printf(' .br. tarief is: %.2f', tarief) ", "echo 'tarief: $tarief'", "settype(tarief, 'string')"
                , "$type = gettype($tarief)", "echo $tarief", "echo $tarief"];
    var antwoorden = ["Int", "233,31", "21,20", "20", "Tarief is: ...", "Tarief: 21,20",
                "21,20", "int", "21,20", "21,20"];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.04"

        document.getElementById("uitleg").innerHTML = "<i>Als $tarief = 21.21 wat is het resultaat van de codes?</i>";
    
        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
};

function kennis4() {

    var vraag = ["Wat doet de methode unset?", "Wat doet de methode print_r?", "Wat doet de methode array_search?", "Wat doet de methode array_push?",
                "Wat is het verschil tussen array_search en in_array?", "wat doet de methode array_key_exist?",
                "Welke methode gebruik je om een element op te zoeken?", "Wat doet de methode unset?", 
                "Welke methode gebruik je om het laatste element te verwijderen?", "Wat doet de methode array_shift?"];
    var antwoorden = ["Haalt een getal uit een array", "Print een array", "Zoekt naar een bepaalde value in een array",
                    "Voeg een getal toe aan een array", "Array_search zoekt naar een value in 1 bepaalde array en in_array zoekt naar een array",
                    "Geeft true als er een bepaalde key in een array zit", "Array_search", "Verwijdert een waarde van een array",
                    "Array Pop", "Voeg een waarde toe aan een array"];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.05"

        document.getElementById("uitleg").innerHTML = "<i>Beantwoord deze vragen.</i>";
    
        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
};

function kennis5() {

    var vraag = ["Wat doet de methode explode?", "Welke methode converteerd een array naar een string?", "Wat is een callback-function?",
                "Welke methodes maken gebruik van callback-functions?", "Wat is het verschil tussen array_walk en array_walk_recursive?", 
                "Wat doet de methode array_rand?", "wat doet de methode array_merge?", "Welke methode gebruik je om het aantal woorden in een tekst te tellen?",
                "Wat is een associatieve array?", "Wat doet de methode array_slice?"];
    var antwoorden = ["String -> array", "Implode", "Object methodes", "Array_walk_recursive", "Array_walk_recursive geeft meer",
                    "Pakt een random value van een array", "Voegt 2 arrays bij elkaar toe", "Array.count", "'Woord => woord1, woord2'",
                    "Verdeelt de array in meerdere delen"];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.06"

        document.getElementById("uitleg").innerHTML = "<i>Beantwoord deze vragen.</i>";
    
        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
};


    