<?php
// Get a list of all MP3 files in the directory
$mp3Files = glob("*.mp3");

// Return the list as JSON
echo json_encode($mp3Files);
?>
