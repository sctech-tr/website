(function(){
    emailjs.init("cBNzAwZunI-sqz1Ng");
})();

function sendMail(e) {
    e.preventDefault(); // prevent default form submission
    if (typeof hcaptcha !== 'undefined') {
        const response = hcaptcha.getResponse();
        if (response.length === 0) {
            alert("please complete the hcaptcha.");
            return false;
        }
    } else {
        alert("hcaptcha is not loaded properly. contact me!! sctech@sctech.qzz.io or refresh the page");
        return false;
    }
    emailjs.sendForm('service_khnxrpa', 'template_ro64laf', '#emailForm')
        .then(function(response) {
            alert('email sent successfully!');
            window.location.href = "/home";
        })
        .catch(function(error) {
            alert('failed to send email. error: ' + JSON.stringify(error));
    });
}