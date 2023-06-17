// Function to handle form submission
function generateCertificate(event) {
    event.preventDefault(); // Prevent form submission
    const nicknameInput = document.getElementById('nickname-input');
    const nickname = nicknameInput.value;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    // Generate the certificate HTML
    const certificateHTML = `
    <div id="certificate-content">
        <h3>👑 명예의 칠푸딩 🏅</h3>
        <p>💚${nickname}💚님은<br>NCT127의 무궁한 발전을 위해<br>명예의 칠푸딩에 가입하였으므로<br>이 인증서를 수여합니다.</p>
        <br>
        <p>${today}</p>
        <p>NCT 127 STRM</p>
    </div>
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
