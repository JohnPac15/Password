// var YO = "sup";
// var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
// var symbols =[ "!,@,#,$,%,^,&,*,?" ];
// var numbers = [ "1,2,3,4,5,6,7,8,9,0" ];
// var passwordLength = 

// var passwordspecial = function(){
//     for (var i=0; i < lettersadd.length; i++) {
//         console.log(lettersadd[i])
//     }
// };
const finalpassword = document.getElementById("password");


document.getElementById("button").addEventListener("click", function password () {
    

    var lower = upper = number = special = false
    var passwordLength = window.prompt(" How long would you like your pass to be? Chose between 8 & 128 charaters ")
    passwordLength = parseInt(passwordLength,10);
    console.log(passwordLength)
    
        if(isNaN(passwordLength)){
            console.log("this is a not number ")
        }else{
            console.log(" this is a number ")
            if( passwordLength >= 8 && passwordLength <= 128) {
                console.log(" this works ")
                lower = window.confirm( " use lower case values? ")
                upper = window.confirm( " use upper case values? ")
                number = window.confirm( " use numbers in password ")
                special = window.confirm( " use special case in password ")
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
