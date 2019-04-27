function registerMe() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let emailAddress = document.getElementById("emailAddress").value;
  if (firstName != "" && lastName != "" && emailAddress != "") {
    let fullName = firstName + ' ' + lastName;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://web.cse.unsw.edu.au/~z5205060/grrroup/api/create/user', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        facebook_details: '',
        name: fullName,
        email: emailAddress,
    }));
    window.location.href = "http://localhost:3000/index.html";
  } else {
    if (firstName == "") {
      document.getElementById("firstName").style.borderColor = 'red';
    }
    if (lastName == "") {
      document.getElementById("lastName").style.borderColor = 'red';
    }
    if (emailAddress == "") {
      document.getElementById("emailAddress").style.borderColor = 'red';
    }
  }
}
