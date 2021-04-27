function validate() {
    var Forename = document.forms["register"]["forename"].value; 
    var Surname = document.forms["register"]["surname"].value;
    var Username = document.forms["register"]["username"].value;
    var Pass1 = document.forms["register"]["pass1"].value;
    var Pass2 = document.forms["register"]["pass2"].value;
    var Age = document.forms["register"]["age"].value;
    var Email = document.forms["register"]["email"].value;

    if (Forename.length < 3) {
        alert("Forename must have at least 3 characters");
        return false; 
    }
    if (Surname.length < 3) {
        alert("Surname must have at least 3 characters");
        return false;
    }
    if (Username.length < 5) {
        alert("Username must have at least 5 characters");
        return false;
    }
    if (Pass1!=Pass2) {
        alert("Passwords must match!");
        return false; }
        if(pass1.length<8) {
        alert("Passwords must have 8 characters");
        return false; 
    }
    if (Age.value < 18 || Age.value > 110){
        alert("Your age must be between 18 and 110");
        return false; 
    }if(Age.value == '') {
        alert("Age cannot be blank");
        return false;
    }
    if(Email == '') {
		alert("Email cannot be blank");
        return false;
	} else if (!isEmail(emailValue)) {
		alert("Email must be of the form abc@def.ghi");
        return false;
	}

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}


