$mail = $_POST["mail"];
$message = $_POST["message"];


require("sqldata.php");

/*
* Dieser teil des Scripts ist ausdokumentiert, da es sehr umständlich wäre ein seperate
* Datenbank inklusive Tabelle anzulegen. Daher ist das Skript so geschrieben, dass es funktionieren würde,
* wenn es mit einer Datenbank verbunden wäre.

$con = new PDO(SQLSERVER, USER, PASSWORD);

$quotedmail = $con->quote($mail);
$quotedmessage = $con->quote($message);
$processedmail = htmlentities($quotedmail, ENT_QUOTES, "UTF-8");
$processedmessage = htmlentities($quotedmessage, ENT_QUOTES, "UTF-8");

$stmt = $con->prepare("INSERT INTO messages ('id', 'mail', 'message') VALUES (NULL, ' ".$processedmail." ', ' ".$processedmessage." ');");
$stmt->execute();

$con = null;
*/