$(document).ready(function(){
    $("#login_form").on("submit", function(event){
        event.preventDefault();
        let login_username = $("#login-user-name").val();
        let login_password = $("#login-password").val();

        $.ajax({
            url: "/pages/login.html",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify("login_username=" + login_username),
            dataType: "json",


        })
    })
})