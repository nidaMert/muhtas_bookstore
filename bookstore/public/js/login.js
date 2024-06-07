console.log("Merhaba");
$(document).ready(function(){
    $("#login-button").on("submit", function(event){
        event.preventDefault();
        let login_username = $("#login-user-name").val();
        let login_password = $("#login-password").val();
        console.log("Oke");
        console.log(login_password);

        $.ajax({
            url: "/pages/login.html",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify([{"username": login_username}, {"password": login_password}]),
            dataType: "json",


        })
    })
})