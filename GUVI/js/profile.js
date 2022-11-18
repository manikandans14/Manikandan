function pfun(){
    let fname=document.forms["regform"][fname].value;
    let mname=document.forms["regform"][mname].value;
    let pname=document.forms["regform"][pname].value;
    let dname=document.forms["regform"][dname].value;
    let lname=document.forms["regform"][lname].value;
    let phname=document.forms["regform"][phname].value;
    let cpname=document.forms["regform"][cpname].value;
    let genname=document.forms["regform"][genname].value;

    if(fname=='' && mname=='' && pname=='' && dname=='' && lname=='' && phname=='' && cpname=='' &&  genname==''){
        alert("Profile is not uploaded");
    }
}
$(document).ready(function(){
    $("#profile").click(function(){
        $.ajax({
            method: "POST",
            url :"/Guvi/php/profile.php",
            data: $("profileform").serialize(),
            success: function(data){
                console.log(data);
            }
        })
    })
})