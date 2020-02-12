<?php
/*
 * De suit 1-4 is 1: harten, 2: schoppen, 3: klaver, 4: ruiten
 * En de value 1-13 is alle mogelijkheden voor een kaart
*/



//alle opties van kaarten worden opgeslagen in de arrays $suit en $value
$suit = array("harten_","schoppen_","klaveren_","ruiten_");
$value = array("1","2","3","4","5","6","7","8","9","10","boer","vrouw","heer");

//Pakt een random suit en value en stored het in $cardID
$cardID = array(array_rand($suit), array_rand($value));

//cardID word als kaart image weergegeven
include_once("kaarten/". $suit[$cardID[0]].$value[$cardID[1]] . ".svg");
