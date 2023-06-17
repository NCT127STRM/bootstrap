// Function to handle form submission
function generateCertificate(event) {
    event.preventDefault(); // Prevent form submission
    const nicknameInput = document.getElementById('nickname-input');
    const nickname = nicknameInput.value;

    // Generate the certificate HTML
    const certificateHTML = `
        <h2>Certificate of Awesomeness</h2>
        <p>This is to certify that ${nickname} is awesome!</p>
    `;

    const certificateContainer = document.getElementById('certificate-container');
    certificateContainer.innerHTML = certificateHTML;

    // Convert the certificate HTML to an image using a library like html2canvas
    html2canvas(certificateContainer).then(function(canvas) {
        const certificateImage = canvas.toDataURL('image/png');

        // Create a download link for the image
        const downloadLink = document.createElement('a');
        downloadLink.href = certificateImage;
        downloadLink.download = 'certificate.png';
        downloadLink.innerHTML = '인증샷 저장하기💚';
        certificateContainer.appendChild(downloadLink);

        // Display the certificate image
        const certificateImageElement = document.createElement('img');
        certificateImageElement.src = certificateImage;
        certificateImageElement.id = 'certificate-image';
        certificateContainer.appendChild(certificateImageElement);
    });

    // Reset the form
    nicknameInput.value = '';
}

// Attach the form submission handler
const nicknameForm = document.getElementById('nickname-form');
nicknameForm.addEventListener('submit', generateCertificate);
