console.log("Funcionando");

var email = document.querySelector("#email").textContent;
var subject = document.querySelector("#subject").textContent;
var body = document.querySelector("#message").textContent;

function sendEmail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "vybe_stdudio@gmail.com", 
      Password: "Enter your password", 
      To: 'vybe_stdudio@gmail.com', 
      From: email, 
      Subject: subject, 
      Body: body, 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  } 