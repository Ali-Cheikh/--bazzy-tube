
const scriptURL = 'https://script.google.com/macros/s/AKfycbwD-1HAICMUuiSnXEFwB9mJiv8_ozoFEQxDsA7pgMkmUM-CxB99z8dX4THH6cInr0Vt/exec';

$(document).ready(function () {
    $('.app-form').on('submit', function (e) {
        e.preventDefault();

        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Sending your message',
            willOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false,
            allowOutsideClick: false,
            background: "hsla(231, 10%, 14%, 1)"
        });

        const formData = new FormData(this);

        $.ajax({
            url: scriptURL,
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log("Response from Google Sheets:", data);

                if (data.result === 'success') {
                    Swal.fire({
                        imageUrl: "assets/images/logo.png",
                        imageAlt: "Custom Success Icon",
                        title: 'Success!',
                        text: 'Your message is sent. Thank you for reaching out.',
                        width: 600,
                        padding: "3em",
                        timer: 5000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        color: "#000",
                        background: "#60c0e0",
                        backdrop: "rgba(0,0,0,0.4)",
                    }).then(() => {
                        window.location.reload();
                    });
                } else {
                    console.error('Error:', data.error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again later.',
                    });
                }
            },
            error: function (error) {
                console.error('Error!', error);
                Swal.fire({
                        imageUrl: "assets/images/logo.png",
                        imageAlt: "Custom Success Icon",
                        title: 'Success!',
                        text: 'Your message is sent. Thank you for reaching out.',
                        width: 600,
                        padding: "3em",
                        timer: 5000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        color: "#000",
                        background: "#60c0e0",
                        backdrop: "rgba(0,0,0,0.4)",
                    }).then(() => {
                        window.location.reload();
                    });
            }
        });
    });
});



/*============================================================================================================================================================= */

