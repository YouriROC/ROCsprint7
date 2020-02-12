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
$testarray = array("een", "twee", 3 , "vier");
$testarray[4] = 5;
print_r($testarray);
echo 'Datatype van 5: ' . gettype($testarray[4]);
array_pop($testarray);
echo "<br>";
print_r($testarray);
array_unshift($testarray, "nul");
echo "<br>";
print_r($testarray);
unset($testarray[0]);
echo "Datatype van 0: " . gettype($testarray[0]);
echo "<br>";
print_r($testarray);
unset($testarray[2]);
echo "<br>";
print_r($testarray);
if (array_key_exists(4, $testarray)) {
    unset($testarray[4]);
}
echo "<br>";
print_r($testarray);

?>
</body>
</html>