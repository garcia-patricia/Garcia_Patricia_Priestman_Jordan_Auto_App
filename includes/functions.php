<?php
include 'connect.php';


function get_all_videos($pdo) {
    $query = "SELECT * FROM tbl_car_spec";

    $get_video = $pdo->query($query);
    $results = array();

    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

?>