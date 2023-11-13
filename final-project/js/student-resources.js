//Show which file is ready to upload
function updateLabel() {
    let inputFile = document.getElementById('fileToUpload');
    let label = document.getElementById('fileLabel');
    label.textContent = 'Selected file: ' + inputFile.files[0].name;
}