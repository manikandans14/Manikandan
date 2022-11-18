function mfun(){
    let mail=document.forms["loginform"]["mail"].value;
    let pass=document.forms["loginform"]["pass"].value;

    if(mail==null || mail==""){
        document.getElementById("error").innerHTML="Enter the Email Address!";
        return false;
    }
    if(pass==null || pass==""){
        document.getElementById("error").innerHTML="Enter the Password!";

    }
    if(mail!='' && pass!=''){
        alert("Login succesful");
    }
}
$(document).ready(function(){
    $("#login").click(function(){
        $.ajax({
            method: "POST",
            url :"/Guvi/php/login.php",
            data: $("loginform").serialize(),
            success: function(data){
                console.log(data);
            }
        })
    })
})