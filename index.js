// ================================ // 
// Raphael Andrei M. Meneses        //
// JavaScript Password validation   //
// ================================ // 


// Function Definitions

// validatePassword(pass1, pass2)
// returns true 
// if
//      the two given passwords match
//      both have at least 8 characters
//      at least 1 uppercase letter, 1 lowercase letter, & 1 number
// otherwise
// returns false
function validatePassword(){
    console.log("Invalid password!");
}


// reverse(str)
// returns the reverse of the given string
function reverse(str){
    console.log(str);
}

// storePassword(name, pass1, pass2)
// returns an object
// if the passwords are valid 
//  Object = {
//      name: name,
//      newpassword: reverse(pass1)
// }
// otherwise
//  Object = {
//      name: name,
//      newpassword: pass1
// }
function storePassword(name, pass1, pass2) {
    console.log(name,pass1,pass2)
}

// End of Function Definitions

// function calls
validatePassword();
reverse("Montelli");
storePassword("Za","n","i");