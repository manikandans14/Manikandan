function afun(){
    let fname=document.forms["regform"][fname].value;
    let mname=document.forms["regform"][mname].value;
    let pname=document.forms["regform"][pname].value;
    let dname=document.forms["regform"][dname].value;
    let lname=document.forms["regform"][lname].value;
    let phname=document.forms["regform"][phname].value;
    let cpname=document.forms["regform"][cpname].value;
    let genname=document.forms["regform"][genname].value;

    if(fname==null || fname==""){
        document.getElementById("error").innerHTML="Enter the Firstname!";
        return false;

    }
    if(mname==null || mname==""){
        document.getElementById("error").innerHTML="Enter the Email id!";
        return false;

    }
    if(pname==null || pname==""){
        document.getElementById("error").innerHTML="Enter the Password!";
        return false;

    }
    if(dname==null || dname==""){
        document.getElementById("error").innerHTML="Choose the Date of Birth!";
        return false;

    }
    if(lname==null || lname==""){
        document.getElementById("error").innerHTML="Enter the Lastname!";
        return false;

    }
    if(phname==null || phname==""){
        document.getElementById("error").innerHTML="Enter the Phone no!";
        return false;

    }
    if(cpname==null || cpname==""){
        document.getElementById("error").innerHTML="Enter the Confirm password!";
        return false;

    }
    if(genname==null || genname==""){
        document.getElementById("error").innerHTML="Choose the Gender!";
        return false;

    }
    if(fname!='' && mname!='' && pname!='' && dname!='' && lname!='' && phname!='' && cpname!='' &&  genname!=''){
        alert("Registered succesfully");
    }
}
$(document).ready(function(){
    $("#register").click(function(){
        $.ajax({
            method: "POST",
            url :"/Guvi/php/register.php",
            data: $("regform").serialize(),
            success: function(data){
                if(response=="Registered successfully"){
                    window.location.href='login.html';
                }

            }
            
        })
    })
})