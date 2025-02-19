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
function validatePassword(pass1, pass2){
    // guard clause for password length
    if (pass1.length < 8 || pass2.length < 8) {
        console.log("Invalid password length!");
        return false;
    }
    // guard clause for matching
    if (pass1 !== pass2) {
        console.log("Passwords do not match!");
        return false;
    }
    // checking for the required character types
    // initializing values used for checking
    let isValidFlag = false;
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lowercase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let numbers = ['1', '2', '3', '4', '5', '6', '9', '0']
    // console.log(uppercase)
    // console.log(lowercase)
    // console.log(numbers)

    // Password Conversion to array
    // to be able to use .some for checking
    pass1 = pass1.split('');
    pass2 = pass2.split('');
    
    // checking
    // NOTE: array to array checking taken from 
    //          https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
    // Uppercase checking
    // if ( pass1.some((char) => {return uppercase.includes(char);}) ){
    if ( pass1.some((char) => {return uppercase.includes(char);}) && pass2.some((char) => {return uppercase.includes(char);}) ){
        hasUpper = true;
    }
    // lowercase checking
    if ( pass1.some((char) => {return lowercase.includes(char);}) && pass2.some((char) => {return lowercase.includes(char);}) ){
        hasLower = true;
    }
    
    // number checking
    if ( pass1.some((char) => {return numbers.includes(char);}) && pass2.some((char) => {return numbers.includes(char);}) ){
        hasNumber = true;
    }

    // totality checking
    if (hasUpper && hasLower && hasNumber){
        return true;
    }
    // console.log("Invalid password!");
    return false;
}


// reverse(str)
// returns the reverse of the given string
function reverse(str){
    // return str.split('').reverse().join('')
    let rev = [];
    for (let i = str.length; i > -1; i--) {
        rev.push(str[i]);
    }
    // console.log(rev);
    return rev.join('')
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
if(validatePassword("Password", "Password")){
    console.log("test 1 pass")
} 
else console.log("test 1 fail")

if(validatePassword("Passwor", "Password")){
    console.log("test 2 pass")
} 
else console.log("test 2 fail")

if(validatePassword("Password", "Passwor")){
    console.log("test 3 pass")
} 
else console.log("test 3 fail")

if(validatePassword("password", "password")){
    console.log("test 4 pass")
} 
else console.log("test 4 fail")

if(validatePassword("passworD1", "passworD1")){
    console.log("test 5 pass")
} 
else console.log("test 5 fail")

if(validatePassword("passworD1", "passworD2")){
    console.log("test 6 pass")
} 
else console.log("test 6 fail")


console.log(reverse("Montelli"));
storePassword("Za","n","i");