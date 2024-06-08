$(document).ready(function(){
    $("#login-button").on("submit", function(event){
        event.preventDefault();
        let login_username = $("#login-username").val();
        let login_password = $("#login-password").val();

        let login_info_package = {
            event: "login",
            username: $("#login-username").val(),
            password: $("#login-password").val()
        }

        let i = 0;
        for(let key in login_info_package){
            if(login_info_package[key] === '') {
                if(i === 1) {
                    $("#login-username").css("border-color","red", "border-style", "solid", "border-width", "10px")
                }
                else if(i === 2){
                    $("#login-password").css("border-color","red", "border-style", "solid", "border-width", "10px")
                }
            }
            else {
                if(i === 1) {
                    $("#login-username").css("border-color","", "border-style", "", "border-width", "1px")
                }
                else if(i === 2){
                    $("#login-password").css("border-color","", "border-style", "", "border-width", "1px")
                }
            }
            i++;
        }

        $.ajax({
            url: "/pages/login.html",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({event: "login",
                                        username: login_username,
                                        password: login_password}),
            dataType: "json",
            success:function(msg){
                console.log(JSON.stringify(msg));
            }
        })

        $("#login-username").val('')
        $("#login-password").val('')
    })

    $("#register-button").on("submit", function(event){
        event.preventDefault();
        let register_username = $("#register-username").val();
        let register_mail = $("#register-mail").val();
        let register_password = $("#register-password").val();
        let register_repassword = $("#register-repassword").val();

        let register_info_package = {
            event: "register",
            username: $("#register-username").val(),
            mail: $("#register-mail").val(),
            password: $("#register-password").val(),
            repassword: $("#register-repassword").val()
        }

        let k = 0;
        for(let key in register_info_package){
            if(register_info_package[key] === '') {
                if(k === 1) {
                    $("#register-username").css("border-color","red", "border-style", "solid", "border-width", "10px")
                }
                else if(k === 2){
                    $("#register-mail").css("border-color","red", "border-style", "solid", "border-width", "10px")
                }
                else if(k === 3){
                    $("#register-password").css("border-color","red", "border-style", "solid", "border-width", "10px")
                }
                else if(k === 4){
                    $("#register-repassword").css("border-color","red", "border-style", "solid", "border-width", "10px")
                }
            }
            else {
                if(k === 1) {
                    $("#register-username").css("border-color","", "border-style", "", "border-width", "1px")
                }
                else if(k === 2){
                    $("#register-mail").css("border-color","", "border-style", "", "border-width", "1px")
                }
                else if(k === 3){
                    $("#register-password").css("border-color","", "border-style", "", "border-width", "1px")
                }
                else if(k === 4){
                    $("#register-repassword").css("border-color","", "border-style", "", "border-width", "1px")
                }
            }
            k++;
        }

        if(register_password === register_repassword) {
            $.ajax({
                url: "/pages/login.html",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({event: "register",
                                            username: register_username,
                                            mail: register_mail,
                                            password: register_password,
                                            repassword: register_repassword}),
                dataType: "json",
            })
        } else {
            alert("Şifreler aynı olmalıdır")
        }



        $("#register-username").val('')
        $("#register-mail").val('')
        $("#register-password").val('')
        $("#register-repassword").val('')

    })
})