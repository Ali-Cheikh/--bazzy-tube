

const scriptURL = 'https://script.google.com/macros/s/AKfycby1zuasNNH-2V19qLpazYxre154j35hotmZsP9DyOhSQbXMDgRnbQDMeOJGo8sjcNDg/exec';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Show SweetAlert immediately when the submit button is clicked
        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Sending your message',
            willOpen: () => {
                Swal.showLoading();
              },
            showConfirmButton: false,
            allowOutsideClick: false,
            background:"hsla(231, 10%, 14%, 1)"
        });

        // Make the fetch request to the server
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // Handle response here
            Swal.fire({
                imgUrl:"assets/images/logo.png",
                imageAlt: "Custom Success Icon",
                title: 'Success!',
                text: 'Your message is sent. Thank you for reaching out.',
                width: 600,
                padding: "3em",
                timer: 5000, // Set timer for 5 seconds
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false,
                color: "#000",
                background: "#60c0e0",
                backdrop: `
                    hsla(231, 10%, 14%, 1)
                    url("assets/images/logo.png")
                    center top
                    no-repeat
                `,
            }).then(() => {
                form.submit();
                window.location.reload(); }); // Reload the page after successful submission
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Show an error alert if there's an issue with sending the message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
            });
        });
    });
});