<?php
function CONNECT(){
    $servername = "mydb.ics.purdue.edu";
    $username = "g1124542";
    $password = "IE332G24";
    $dbname = "g1124542";

    global $conn;
    //Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    //Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "
        SELECT *
        FROM Stocks
    ";

    $result = mysqli_query($conn, $sql);
    print('testing');

    print($result);

    return $conn;
}

print('test');

CONNECT();
    ?>