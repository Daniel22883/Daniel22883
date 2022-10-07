

const sender = document.getElementById('email').value;
const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const otherName = document.getElementById('other-name').value;
const address = document.getElementById('address').value;
const tel = document.getElementById('tel').value;
const qualification = document.getElementById('qualification').value;
const qualification = document.getElementById('reg-type').value;



Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : sender,
    Subject : "This is the subject",
    firstName: 
    lastName:
    otherName:
    phone:
    address:
}).then(
  message => alert(message)
);