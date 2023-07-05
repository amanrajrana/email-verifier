/**
 * Checks if a string includes the '@' symbol.
 *
 * @param {string} email - The string to check.
 * @returns {boolean} - True if the string includes '@', false otherwise.
 */
const checkAtTheRate = (email) => {
    return email.includes("@");
}

/**
 * Checks if a given string is a valid email address based on certain rules.
 *
 * @param {string} str - The string to validate.
 * @returns {Object} - An object with two keys: isValid (boolean) and message (string) based on the validation rules.
 */
function validSyntax(str) {
    const alphaNumericRegex = /^[A-Za-z0-9]+$/;
    const alphaNumericSpecialRegex = /^[A-Za-z0-9-._]+$/;

    // Check if the string starts with an alphanumeric character
    if (!alphaNumericRegex.test(str.charAt(0))) {
        return {
            isValid: false,
            message: `User Name cannot start with "${str.charAt(0)}"`
        };
    }

    // Check if the string ends with an alphanumeric character
    if (!alphaNumericRegex.test(str.charAt(str.length - 1))) {
        return {
            isValid: false,
            message: `Domain Name cannot end with "${str.charAt(str.length - 1)}"`
        };
    }

    // Check if the rest of the string contains only alphanumeric or specific special characters
    if (alphaNumericSpecialRegex.test(str)) {
        return {
            isValid: true
        };
    }

    // Default return
    return {
        isValid: false,
        message: "Not a valid email"
    };
}

/**
 * Validates the given email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {Object} - An object with two keys: isValid (boolean) and message (string) indicating the validation result.
 */
const checkValidEmail = (email) => {
    email = email.trim();

    // Check if email contains '@'
    if (!checkAtTheRate(email)) {
        return {
            isValid: false,
            message: `Email must contain '@'`
        };
    }

    const indexOfAt = email.indexOf("@");
    const userName = email.slice(0, indexOfAt);  // Slice username
    const serverName = email.slice(indexOfAt + 1); // Slice domain

    // Validate the username and server name using the validSyntax() function
    const validUserNameSyntax = validSyntax(userName);
    const validDomainNameSyntax = validSyntax(serverName);

    if (!validUserNameSyntax.isValid) {
        return validUserNameSyntax;
    }

    if (!validDomainNameSyntax.isValid) {
        return validDomainNameSyntax;
    }

    return {
        isValid: true,
        message: 'Valid E-mail address'
    };
}

/**
 * Handles the email validation and displays the result on the web page.
 */
function main() {
    const email = document.getElementById('userEmail').value;
    const resultElement = document.getElementById('result');

    const isValidEmail = checkValidEmail(email);

    resultElement.style.color = isValidEmail.isValid ? 'green' : 'rgba(192, 0, 0, 0.8)';
    resultElement.innerHTML = isValidEmail.message;
}

/**
 * Clears the validation result message.
 */
const clearMessage = () => {
    document.getElementById('result').innerHTML = "";
            }
            
