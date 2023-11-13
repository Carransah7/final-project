document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        let isValid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Message is required";
            isValid = false;
        }

        if (isValid) {
            // Create a new FormData object
            let formData = new FormData(form);

            // Create a new XMLHttpRequest
            let xhr = new XMLHttpRequest();

            // Configure the request
            xhr.open("POST", "process.php", true);

            // Set up a handler for when the request finishes
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // success
                    alert(xhr.responseText);
                } else {
                    // Error
                    alert('An error occurred!');
                }
            };

            // Send the request
            xhr.send(formData);
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
