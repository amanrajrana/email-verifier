

function validSyntax (str) {

    const alphaNumericRegex = /^[A-Za-z0-9]+$/;
    const alphaNumericSpecialRegex = /^[A-Za-z0-9-._]+$/;

    // string must start with alphaNumeric latter
    if (!alphaNumericRegex.test(str.charAt(0))) {
        return {
            isValid: false,
            message: `Domain Name can not start with ${str.charAt(0)}`
        }
    } 

    // string must end with alphaNumeric latter
    if (!alphaNumericRegex.test(str.charAt(str.length - 1))) {
        return {
            isValid: false,
            message: `Domain Name can not end with "${str.charAt(str.length - 1)}"`
        }
    }


    // rest latter on can be alphaNumeric and three special char (-_.)
    if(alphaNumericSpecialRegex.test(str)) {
        return {
            isValid: true,
            message: `Valid Email`
        }
    }

    // default return
    return {
        isValid: false,
        message: "Not a valid email"
    }

}

const str = 'gmail.com'

console.log(validSyntax(str));

// str.startsWith()
