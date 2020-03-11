
var vragen = ["vraag1", "vraag2", "vraag3","vraag4", "vraag5", "vraag6","vraag7", "vraag8", "vraag9","vraag10"];
var antwoord = ["antwoord1", "antwoord2", "antwoord3", "antwoord4","antwoord5", "antwoord6","antwoord7", "antwoord8","antwoord9", "antwoord10",];

function kennis1() {

    var vraag = [ "Wat is een Call to undefined function-error?", "Wat is de phpinfo-function?", "Waar kun je de Apache-server fouten traceren?",
                    "Wat is de Rootmap van de Apache-Server?",
                 "Benoem alle error-logs van XAMPP", "Wat is een CMS?","Wat is Joomla?", "Wat is Syntaxis?", "Wat doet de echo-opdracht?", 
                 "Waar kunnen we een PHP-script embedden in een HTML-script?"];
    var antwoorden = ["Het programma kent de functie niet dat aangemaakt is.", "Hier krijg je een site vol met alle ogelijke informatie over PHP.", 
                     "In de Logs.","HTdocs", "Apache, mySQL en PHP", "een Content Manager System", "Een open source CMS","niet beantwoord", 
                     "Laat tekst zien", "In de head en onderaan de body"];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.02";

        document.getElementById("uitleg").innerHTML = "<i>Beantwoord deze vragen.</i>";

        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
    };

function kennis2() {

var vraag = ["$auto2", "$auto's", "$auto/onderdelen","$thuis&tuin?" ,"$naw", "$n-a-w", "$n_a_w", "$22", "$$auto", "$autokleur" ];
var antwoorden = ["ja", "nee", "nee", "nee", "ja", "nee", "ja", "ja", "nee", "ja" ];

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
    var antwoorden = ["int", "233,31", "21,21", "21", "Tarief is: 22,21", "Tarief: $tarief",
                "21,21", "string", "21,21", "21,21"];
    
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
    var antwoorden = ["Verwijderd een naar keuze", "Print een array", "Zoekt in een array naar een bepaald iets.",
                    "Voegt een getal aan het einde toe.", "Je kijkt of er iets in zit en bij de ander kijk je wat er in zin op een bepaalde plek.",
                    "Kijkt of er een bepaald iets in je array zit", "Array_search", "Haalt een ding uit een array",
                    "pop", "Voegt een waarde toe aan een array."];
    
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
    var antwoorden = ["niet beantwoord", "implode", "Object methode", "Array_walk_recursive", "Recursive kan gebruik maken van meerdere methodes",
                    "Random nummer", "Hij maakt van twee arrays een array.", "count", "'ding 1'=>'dieper ingaande'",
                    "Arrays deels kopieren."];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.06"

        document.getElementById("uitleg").innerHTML = "<i>Beantwoord deze vragen.</i>";
    
        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
};


    