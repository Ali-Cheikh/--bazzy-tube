
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


document.getElementById('age').addEventListener('blur', function () {
    var age = parseInt(this.value);
    if (!isNaN(age) && age < 16) {
        Swal.fire({
            imageUrl: "assets/images/logo.png",
            imageAlt: "Custom Warning Icon",
            title: 'Requires Parent Permission!',
            text: `You are under 16 years old. Are you sure you want to proceed?`,
            width: 600,
            padding: "3em",
            showCancelButton: true,
            confirmButtonText: 'Yes, Proceed',
            cancelButtonText: 'No, Cancel',
            allowOutsideClick: false,
            color: "white",
            background: "#262626",
            backdrop: "rgba(0,0,0,0.4)",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    // Allow the form to be submitted
                } else {
                    // Reload the page
                    location.reload();
                }
            });
    }
});

// Remove duplicate code in fetch error handling
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('payment-method').value;

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

    fetch('https://script.google.com/macros/s/AKfycbxN9zEA2zvabVwnJevyaBPvddZa0NJt0Zvbhh7Ty7QWgYY_OtRBITeWSpNv0YS1REk/exec', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                Swal.fire({
                    imageUrl: "assets/images/logo.png",
                    imageAlt: "Custom Success Icon",
                    title: 'Success!',
                    text: `Your Registration is complete download the code Download your Ticket `,
                    width: 600,
                    padding: "3em",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    color: "white",
                    background: "#262626",
                    backdrop: "rgba(0,0,0,0.4)",
                });

                generateTicket(name, age, phone);
            } else {
                Swal.fire({
                    imageUrl: "assets/images/logo.png",
                    imageAlt: "Custom Success Icon",
                    title: 'Success!',
                    text: `Your Registration is complete download the code Download your Ticket `,
                    width: 600,
                    padding: "3em",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    color: "white",
                    background: "#262626",
                    backdrop: "rgba(0,0,0,0.4)",
                });
                generateTicket(name, age, phone);
            }
        })
        .catch(error => {
            console.error('Error!', error);
            Swal.fire({
                imageUrl: "assets/images/logo.png",
                imageAlt: "Custom Success Icon",
                title: 'Success!',
                text: `Your Registration is complete download the code Download your Ticket `,
                width: 600,
                padding: "3em",
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                allowOutsideClick: false,
                color: "white",
                background: "#262626",
                backdrop: "rgba(0,0,0,0.4)",
            });
            generateTicket(name, age, phone);
        });
});

function generateTicket(name, age, phone) {
    const qrCodeContainer = document.getElementById('qr-code');
    const ticketName = document.getElementById('ticket-name');
    const ticketContainer = document.getElementById('ticket-container');

    // Create a canvas element for the QR code
    const canvas = document.createElement('canvas');
    qrCodeContainer.innerHTML = ''; // Clear previous content
    qrCodeContainer.appendChild(canvas); // Append canvas to qr-code container

    // Generate QR code
    QRCode.toCanvas(canvas, `Name: ${name}, Phone: ${phone}, Age: ${age}`, { width: 200 }, function (error) {
        if (error) {
            console.error('QR Code Generation Error:', error);
            return;
        }
        console.log('QR code generated successfully!');
    });

    // Display ticket name
    ticketName.innerHTML = `<span class="text-green-200 text-lg font-bold"><br>${name}</span>`;

    // Show ticket container
    ticketContainer.classList.remove('hidden');
}

function downloadTicket() {
    html2canvas(document.getElementById('ticket')).then(function (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'ticket.png';
        link.click();
    });
}