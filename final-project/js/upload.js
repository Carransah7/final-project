document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('status').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
