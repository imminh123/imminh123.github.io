//sign up//
let name_Signup = $('#nameInput');
let nick_name_Signup = $('#nick_name');
let email_Signup = $('#emailInput');
let phone_number_Signup = $('#phone_number');
let pass_Signup = $('#passInput');
let password_Signup = $('#passwordInput');
let birthday_Signup = $('#birthday');
let sex_Signup =$('#endregion#sex');
let btn_Đk_chữ = $('#btn_Đk_chữ');
let mailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


name_Signup.on('keyup', function() {
    
});

nick_name_Signup.on('keyup',function (){
    
    let usernameError = $('#errorUsername');
    if (nick_name_Signup.val().length < 15) {
        usernameError.addClass('hide');
    } else {
        usernameError.removeClass('hide');
    }
})

email_Signup.on('keyup',function () {
    let emailError = $('#errorEmail');
    if (email_Signup.val().match(mailcheck)) {
        emailError.addClass('hide');
    } else {
        emailError.removeClass('hide')
    }
})
phone_number_Signup.on('text',function (){});



pass_Signup.on('keyup',function (){
    
    let passError = $('#errorPass');

    if (pass_Signup.val().length >= 8) {
        passError.addClass('hide');
    } else {
        passError.removeClass('hide');
    };

});


password_Signup.on('keyup',function (){

    let passwordError = $('#errorPassword');

    if (password_Signup.val()==pass_Signup.val()) {
        passwordError.addClass('hide');
    } else {
        passwordError.removeClass('hide');
    };

});
birthday_Signup.on('text',function (){});
sex_Signup.on('text',function (){});
btn_Đk_chữ.on('button',function() {});





//log in//
let correctEmail = "musitch@gmail.com";
let correctPassword = "12345678";


let inputEmailLogin = $('#email');
let inputPasswordLogin = $("#pass");




let btn_Đn_chữ = $('#btn_Đn_chữ')
btn_Đn_chữ.on('click', function(){
    let emailLogin = inputEmailLogin.val() ;
    
    let passwordLogin = inputPasswordLogin.val();
    if (emailLogin == correctEmail && passwordLogin == correctPassword) {
        // location.replace("./home_fix.html");
        
        window.location="../home//home_fix.html";
    } else {
        alert("sai vl")
    }  
    console.log(emailLogin,passwordLogin,correctEmail,correctPassword);
    
})

