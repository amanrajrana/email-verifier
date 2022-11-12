// check @ preset in enter email or not 
const checkAtTheRate = (email) => {
    return email.includes("@");
}

// check email start with a character 
const checkLetter = (userName) => {
    return /[a-zA-Z]/.test(userName)
}

//check Number function
const checkNumber = (userName) => {
    return /[0-9]/.test(userName);
}

//get value from document
const checkValidEmail = () => {
    let email = document.getElementById('userEmail').value;
    let a = prompt("hello this function called succesfully");
    return email;
}

//main fucntion
const main=()=>{
    let email = document.getElementById('userEmail').value;
    email = email.trim();
    let flag = false;
    let result;

    if (checkAtTheRate(email) == false) {
        result ="Please enter a valid email example@email.com";
    }
    else {
        let indexOfAt = email.indexOf("@");
        let userName = email.slice(0, indexOfAt);
        let serverName = email.slice((indexOfAt + 1));
        // alert=("this is Aman Raj")

        if (checkLetter(email[0]) == false) {
            document.getElementById('result').innerHTML = "Email can only start with Letters (i.e a-z)";
        }
        else {

            for (let i in userName) {
                if (checkLetter(userName[i]) == true) {
                    flag = true;
                }
                else if (checkNumber(userName[i]) == true) {
                    flag = true;
                }
                else if (userName[i] == "-" || userName[i] == ".") {
                    flag = true;
                }
                else {
                    flag = false;
                    document.getElementById('result').innerHTML ="please enter a valid email " + userName[i] + " is not allowed in email address";
                    break;
                }
            }
        }
        if (flag == false) {
            result="You enter invalid address";
        }
        else {
            if (serverName.includes(".") == false) {
                result="Your server name " + serverName + " is not valid";
                flag = false;
            }
            else {
                if (serverName.indexOf(".") == "0") {
                    document.getElementById('result').innerHTML ="you server domain is not valid";
                    flag = false;
                }
                else {

                    for (let i in serverName) {
                        if (checkLetter(serverName[i]) == true) {
                            flag = true;
                        }
                        else if (checkNumber(serverName[i]) == true) {
                            flag = true;
                        }
                        else if (serverName[i] == "." || serverName[i] == "-") {
                            flag = true;
                        }
                        else {
                            flag = false;
                            document.getElementById('result').innerHTML  ="please enter a valid server name " + serverName[i] + " is not allowed in email server address";
                            break;
                        }
                    }
                }
            }
        }
    }

    if (flag == true) {
        document.getElementById('result').innerHTML = "Congratulation! You have entered valid email";

    }
}

const clearMessage =()=>{
    document.getElementById('result').innerHTML = "";
}