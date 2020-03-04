
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
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.03";

        document.getElementById("uitleg").innerHTML = "Beantwoord deze vragen.";

        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
    };

function kennis2() {

var vraag = ["$auto2", "$auto's", "$auto/onderdelen","$thuis&tuin?" ,"$naw", "$n-a-w", "$n_a_w", "$22", "$$auto", "$autokleur" ];
var antwoorden = ["ja", "nee", "nee", "nee", "ja", "nee", "ja", "ja", "nee", "ja" ];

    document.getElementById("titelKennis").innerHTML = "Kennistoets 1.03";

    document.getElementById("uitleg").innerHTML = "Kunnen deze variabele namen zijn?";
    for (let index = 0; index < vragen.length; index++) {
        document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
        document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
        
    };
   
};

function kennis3() {

    var vraag = [];
    var antwoorden = [];
    
        document.getElementById("titelKennis").innerHTML = "Kennistoets 1.03"
    
        for (let index = 0; index < vragen.length; index++) {
            document.getElementById(vragen[index]).innerHTML = "<strong>" + vraag[index] + "</strong>";
            document.getElementById(antwoord[index]).innerHTML = antwoorden[index];
            
        };
       
    };

    