function registerMe() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let emailAddress = document.getElementById("emailAddress").value;
  if (firstName != "" && lastName != "" && emailAddress != "") {
    let fullName = firstName + ' ' + lastName;

    let randomNum = Math.floor(Math.random() * 11);
    let imageArray = ['avatars/Avengers/Agent Coulson-01.png', 'avatars/Avengers/Black Widow-01.png', 'avatars/Avengers/Captain America-01.png', 'avatars/Avengers/Giant Man-01.png', 'avatars/Avengers/Hawkeye-01.png', 'avatars/Avengers/Hulk-01.png', 'avatars/Avengers/Iron Man-01.png', 'avatars/Avengers/Loki-01.png', 'avatars/Avengers/Nick Fury-01.png', 'avatars/Avengers/Thor-01.png', 'avatars/Avengers/War Machine-01.png'];

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://web.cse.unsw.edu.au/~z5205060/grrroup/api/create/user', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        facebook_details: '',
        name: fullName,
        email: emailAddress,
        avatar: 'http://z52505060.web.cse.unsw.edu.au/~z5205060/grrroup_static/' + imageArray[randomNum],
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
