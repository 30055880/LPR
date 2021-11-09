function ProcessForm()
{
    var form_name = document.getElementById("form_name").value;
    var form_email = document.getElementById("form_email").value;
    var form_message = document.getElementById("form_message").value;
 

    document.getElementById("display").style.display = "block";
    document.getElementById("name").innerHTML = form_name;
    document.getElementById("email").innerHTML = form_email;
    document.getElementById("message").innerHTML = form_message;
    
}