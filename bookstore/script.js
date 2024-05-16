const signInbutton = document.querySelector('.signInbutton');
const signUpbutton = document.querySelector('.signUpbutton');
const formBox = document.querySelector('.formBox');
const loginBody = document.querySelector('.loginBody');

function SwapDivsWithClick(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "block";
        console.log("ilk durum");
        formBox.classList.add('active');
        loginBody.classList.add('active');
        
    }
    else {
        d1.style.display = "block";
        d2.style.display = "none";
        console.log("İkinci durum");
        formBox.classList.remove('active');
        loginBody.classList.remove('active');
        
    }
    return;
}

function alertError() {
    alert("butona basıldı");
}