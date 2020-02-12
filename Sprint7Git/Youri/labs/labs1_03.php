<!DOCTYPE html>
<html lang="nl">
<head>
    <meta http-equiv="Content-Type"
        content="text/html";
        charset="UTF-8" />
    <title>lab1_03</title>
</head>
<body>
    <?php
        $breedte = 10;
        $lengte = 11;
        $hoogte = 5;
        $oppervlaktebasis = $lengte * $breedte;
        $volume = $lengte * $breedte * $hoogte;
        echo "Oppervlakte = " . $oppervlaktebasis;
        echo "<br> volume = " . $volume;
    ?>
</body>
</html>