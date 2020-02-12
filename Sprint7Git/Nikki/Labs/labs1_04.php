<!DOCTYPE html>
<html lang="nl">
<head>
    <meta http-equiv="Content-Type"
        content="text/html";
        charset="UTF-8" />
    <title>lab1_04</title>
</head>
<body>
    <h3>php lab 1.4</h3>
    <?php
        $naam = "Karim";
        $nederlands = "8.5";
        $engels = "7.7";
        $rekenen = "6.7";
        $programmeren = "8.5";
        $databases = "9.4";
        $totaal = $nederlands + $engels + $rekenen + $programmeren + $databases;
        $gemiddelde = $totaal / 5;

        $naam2 = "Sophie";
        $nederlands2 = "8.9";
        $engels2 = "8.7";
        $rekenen2 = "9.7";
        $programmeren2 = "9.5";
        $databases2 = "9.2";
        $totaal2 = $nederlands2 + $engels2 + $rekenen2 + $programmeren2 + $databases2;
        $gemiddelde2 = $totaal2 / 5;

        $totaalgemiddelde = ($gemiddelde + $gemiddelde2) / 2;

        echo "<table border='1'>
        <caption>
            <strong>Rapport</strong>
        </caption>
        <thead>
            <tr>
                <th>Naam</th><th>Nederlands</th><th>Engels</th>
                <th>Rekenen</th><th>Programmeren</th>
                <th>Databases</th><th>Gemiddeld</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$naam</td><td>$nederlands</td><td>$engels</td>
                <td>$rekenen</td><td>$programmeren</td>
                <td>$databases</td><td>$gemiddelde</td>
            </tr>
            <tr>
                <td>$naam2</td><td>$nederlands2</td><td>$engels2</td>
                <td>$rekenen2</td><td>$programmeren2</td>
                <td>$databases2</td><td>$gemiddelde2</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan='6'>Groep gemiddeld</td><td>$totaalgemiddelde</td>
            </tr>
        </tfoot>
        </table>";
    ?>
</body>
</html>