var upper = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "ABCDEFGHIJKLMNOPQURSTUVWXYZ".toLowerCase();
var number = "0123456789";
var special = "!@#$%^&*()?";



document.getElementById("button").addEventListener("click" , function newPassword () {
    window.alert("We need you to asnwer a few questions before we setup your new password ")
    

        var passwordLength = window.prompt("Please choose between 8 and 128 charaters for your password length")
        passwordLength= parseInt(passwordLength, 10);
        console.log(passwordLength)
    
        var lower, upper, number, special = false

        let 
        if(isNaN(passwordLength)){
            window.alert("Invalid entry, Please try again.")
            console.log("This is not a number, Please try again. ")
            return newPassword();
        }else {
            console.log("This is a number")

            if (passwordLength >= 8 && passwordLength <= 128){
                window.alert( " Great! You have choosen " + passwordLength)
                upper = window.alert( " Would you like to use Upper case letters? ");
                lower = window.alert( "Would you like to use lower case letters? ");
                number = window.alert("Would you like to use numbers in your passowrd? ");
                special = window.alert(" Would you like to use special charaters in your password? ")

            }else{
                window.alert(" You have choosen an invalid number, Please try again. ")
                return newPassword();
            }

        }

        
})