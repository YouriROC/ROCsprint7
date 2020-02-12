<?php
/*
 * Handige info voor eventueel later:
 * invoer standen in de array gaan als volgt: positie, naam club, stad waar de club vandaan komt, gespeelde wedstrijden, gewonnen, gelijk, verloren, logofile
 * Een logo invoegen is extra.
*/

//Hier is een multi-dimensional array, genaamd $clubs, met alle clubs en de stats van de clubs er in. (Er hoeften maar 2 clubs voor deze opdracht gebruikt te worden, dus het zijn FC Twente en Heracles geworden)
$clubs = array(
array(9, "Heracles", "Almelo", 22, 8, 5, 9, "heracles.svg"),
array(12, "FC Twente", "Enschede", 21, 6, 6, 9, "twente.svg")
);

//Hier word in de variabele $clubID een random club gepakt van de $clubs arrays.
$clubID = array_rand($clubs);

//Één flink lange regel aan code. Dit plaatst de statistieken van de club van $clubID onder elkaar op de pagina.
print_r("Naam van de club: " .$clubs[$clubID][1]. "<br>Deze club komt uit: " .$clubs[$clubID][2] ."<br>Momentele club positie: " .$clubs[$clubID][0] ."<br>Aantal gespeelde wedstrijden: " .$clubs[$clubID][3] ."<br>Aantal wedstrijden gewonnen: " .$clubs[$clubID][4] ."<br>Aantal wedstrijden gelijk gespeeld: " .$clubs[$clubID][5] ."<br>Aantal wedstrijden verloren: " .$clubs[$clubID][6] ."<br>");

//Deze regel plaatst het logo onderaan de site. Voor nu gebruiken we voor logos een 400x400 SVG file.
include_once("logos/". $clubs[$clubID][7]);