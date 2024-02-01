document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    sendEmail();
});

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const bodymessage = `Full Name: ${name} <br> Email: ${email} <br> Message: ${message}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "marcadriancbernales699@gmail.com",
        Password: "B6E77F570F631596B123F37EF650F7383EDC",
        To: 'marcadriancbernales699@gmail.com',
        From: 'marcadriancbernales699@gmail.com',
        Subject: "This is the subject",
        Body: bodymessage,
        ContentType: "text/html; charset=utf-8"
    }).then(
        message => alert(message)
    );
}