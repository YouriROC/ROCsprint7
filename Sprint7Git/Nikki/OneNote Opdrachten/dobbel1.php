<!DOCTYPE html>
<html lang="nl">
<head>
    <meta http-equiv="Content-Type"
        content="text/html";
        charset="UTF-8" />
    <title>lab1_05</title>
</head>
<body>
    <?php
        for ($i=0; $i<5; $i+=1){
           $getallen[$i] = rand(1,6);
           $dobbelsteennummer = $i + 1;
           echo "Dobbelsteen " . $dobbelsteennummer . " = " . $getallen[$i] . "<br>";
       }
        $totaal = array_sum($getallen);
        echo "<br>";
        echo "het totaal aantal punten is: " . $totaal;
    ?>
</body>
</html>