
const finalpassword = document.getElementById("password");


document.getElementById("button").addEventListener("click", function password () {
    

    var lower = upper = number = special = false
    var passwordLength = window.prompt(" How long would you like your password to be? Chose between 8 & 128 charaters ")
    passwordLength = parseInt(passwordLength,10);
    console.log(passwordLength)
    
        if(isNaN(passwordLength)){
            console.log("this is a not number ")
        }else{
            console.log(" this is a number ")
            if( passwordLength >= 8 && passwordLength <= 128) {
                console.log(" this works ")
                lower = window.confirm( " Do you want to include lower case letters? ")
                upper = window.confirm( " Do you want to use upper case letters? ")
                number = window.confirm( " Do you want to use numbers in your password ")
                special = window.confirm( " do you want to use special charaters in password ")
                console.log({lower, upper, number, special})

                let temp = String()

                if (lower) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()
                if (upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                if (number) temp += "0123456789"
                if (special) temp += "!@#$%^&*()?"

                console.log(temp.length)
                var out = String()

                for (let i = 0; i < passwordLength; i++) {
                    out += temp[Math.floor(Math.random() * (temp.length))]
                }
                console.log(out)
                console.log(finalpassword)
                finalpassword.innerHTML = out
            }else {
                console.log(" this will not work ")
            }

        }



    // window.alert(" Your new password is " + letters[i])
});
