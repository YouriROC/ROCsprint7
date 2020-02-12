<?php
$playlist = array(
    array("genre" => "Hiphop", "auteur" => "John Williams", "titel" => "My Girl"),
    array("genre" => "Jazz", "auteur" => "John Coltrane", "titel" => "Ney York"),
    array("genre" => "Hiphop", "auteur" => "Shakira", "titel" => "Obsession")
);

function printArray($item, $key){
    echo "<br>".$key.": "."<i>$item</i>";
}

array_walk_recursive($playlist,"printArray");


$playlist = addTrack($playlist);

printTracks($playlist);




function addTrack($playlist){
    $playlist2 = array(
        array("genre" => "Latin", "auteur" => "Caetano Veloso", "titel" => "Cafe Atlantico")
    );
    $playlist = array_merge($playlist, $playlist2);
    return $playlist;
}


function printTracks($playlist){
    for($i=0; $i< sizeof($playlist); $i++){
        echo "<br>Track " .$i.": " .$playlist[$i]['genre']. "|" .$playlist[$i]['auteur']. "|" .$playlist[$i]['titel'];
    }
}