function validate() {
    var Forename = document.forms["register"]["forename"].value; 
    var Surname = document.forms["register"]["surname"].value;
    var Username = document.forms["register"]["username"].value;
    var Pass1 = document.forms["register"]["pass1"].value;
    var Pass2 = document.forms["register"]["pass2"].value;
    var Age = document.forms["register"]["age"].value;
    var Email = document.forms["register"]["email"].value;

    // Forname
    if (Forename.length < 3) {
        alert("Forename must have at least 3 characters");
        return false; 
    } else if (hasWhiteSpace(Forename)) {
        alert("Forname cannot be blank");
        return false;
    }

    //Surname
    if (Surname.length < 3) {
        alert("Surname must have at least 3 characters");
        return false;
    } else if (hasWhiteSpace(Surname)) {
        alert("Surname cannot be blank");
        return false;
    }

    //Username
    if (Username.length < 5) {
        alert("Username must have at least 5 characters");
        return false;
    }

    //Password
    if (!checkPassword(Pass1)){
        alert("Must be at least 8 characters, containing both upper and lower case letters, numbers and symbols.");
        return false;
    }
    if (Pass1!=Pass2) {
        alert("Passwords must match!");
        return false; 
    }

    //Age
    if(Age == '') {
        alert("Age cannot be blank");
        return false;
    }
    if (Age < 18 || Age > 110){
        alert("Your age must be between 18 and 110");
        return false; 
    }

    //Email
    if(Email == '') {
		alert("Email cannot be empty");
        return false;
	} else if (!isEmail(emailValue)) {
		alert("Email must be of the form abc@def.ghi");
        return false;
	}

    //Function Zone
    function isEmail(email) { //Use for validate email
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    function hasWhiteSpace(s) { //Use for validate the space
        return s.includes(' ')
    }
    function checkPassword(str) { //Use for validate passwords 
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
    }
}


