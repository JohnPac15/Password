
const finalpassword = document.getElementById("password");


document.getElementById("button").addEventListener("click", function password () {
    

    var lower = upper = number = special = false
    var passwordLength = window.prompt(" How long would you like your password to be? Chose between 8 & 128 charaters ")
    passwordLength = parseInt(passwordLength,10);
    //this console.log will display what the user input
    console.log(passwordLength)

        // This is checking to see if the user input a word not a number
        if(isNaN(passwordLength)){
            // if the user inputs a word rather than a number this will pop up, and return to beginning
            console.log("this is a not number ")

        }else{
            //is user inputs a number this will pop
            console.log(" this is a number ")
            //checking to see if password is between the allowed charaters
            if( passwordLength >= 8 && passwordLength <= 128) {
                console.log(" this works ")

                //questions for password
                lower = window.confirm( " Do you want to include lower case letters? ")
                upper = window.confirm( " Do you want to use upper case letters? ")
                number = window.confirm( " Do you want to use numbers in your password ")
                special = window.confirm( " do you want to use special charaters in password ")
                console.log({lower, upper, number, special})
                
                //if you answer no to all the questions, this will pop up
                if(lower, upper, number, special === false){
                    alert("I guess you don't want a new password, then! ");
                    return passwordLength

                }else {

                        let temp = String()
                        //this consolelog will display nothing because string is empty at the moment
                        console.log(temp)
        
                        if (lower) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()
                        if (upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        if (number) temp += "0123456789"
                        if (special) temp += "!@#$%^&*()?"

                        //this console.log represents the total number of charaters to choose from for the new password
                        console.log(temp.length)

                        var out = String()
                        //var out is going to be the output of the loop down below
                        console.log(out);
        
                        for (let i = 0; i < passwordLength; i++) {
                            out += temp[Math.floor(Math.random() * (temp.length))]
                        }
                        //this will display the new password before we display it on the webpage
                        console.log(out)
                        console.log(finalpassword)
                        //this is how the new password will get on web-page
                        finalpassword.innerHTML = out

                }
            }else {
                //this will only show up if you choose a number less than 8 and greater than 128
                console.log(" this will not work ");
                alert("Invalid Entry, Please try again! ")
                return password();
            }

        }



    // window.alert(" Your new password is " + letters[i])
});
