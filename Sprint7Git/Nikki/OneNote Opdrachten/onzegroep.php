<?php

// Hier word alle informatie opgeslagen in een "lijst"

    $leerlingen = array(
        array("leerlingnummer" => "0316641", "voornaam" => "Nikki", "achternaam" => "van Braam", "woonplaats" => "Nijverdal", "Leeftijd" => 18),
        array("leerlingnummer" => "2345345", "voornaam" => "Youri", "achternaam" => "Schuilenburg", "woonplaats" => "Boekelo", "Leeftijd" => 17),
        array("leerlingnummer" => "0328934", "voornaam" => "Ronan", "achternaam" => "Haveman", "woonplaats" => "Enschede", "Leeftijd" => 16),
        array("leerlingnummer" => "5674238", "voornaam" => "Bas", "achternaam" => "Roethof", "woonplaats" => "Oldenzaal", "Leeftijd" => 17),
        array("leerlingnummer" => "2358943", "voornaam" => "Cedric", "achternaam" => "Arends", "woonplaats" => "Hengelo", "Leeftijd" => 20)
    );

    //rand(); word gebruikt om een random nummer te kiesen tussen 2 aangegeven getallen.
    //$nummer heeft nu een random getal van 1 t/m 4.
    $nummer = rand(0,4);

    //hier word de informatie uit de $leerlingen 'lijst' gehaalt.
    $llngnummer = $leerlingen[$nummer]["leerlingnummer"];
    $voornaam = $leerlingen[$nummer]["voornaam"];
    $achternaam = $leerlingen[$nummer]["achternaam"];
    $woonplaats = $leerlingen[$nummer]["woonplaats"];
    $leeftijd = $leerlingen[$nummer]["Leeftijd"];

    echo "leerlingnummer: " .$llngnummer. 
            "<br>voornaam: " .$voornaam.
            "<br>achternaam: " .$achternaam.
            "<br>woonplaats: " .$woonplaats.
            "<br>leeftijd: " .$leeftijd;
