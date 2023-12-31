<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$fileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Array of allowed file types
$allowed_file_types = array("pdf", "docx", "pptx", "xlsx", "txt", "jpeg", "jpg", "png", "svg");

// Check if file already exists
if (file_exists($target_file)) {
    echo " Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo " Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow certain file formats
if(!in_array($fileType, $allowed_file_types)) {
    echo " Sorry, only PDF, DOCX, PPTX, XLSX, TXT, JPEG, JPG, PNG & SVG files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo " Your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
    } else {
        echo " There was an error uploading your file.";
    }
}
?>
