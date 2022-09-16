function validate(){
  let x = document.getElementById("name-input").value;
  let z = document.getElementById("phone-input").value;
  let y = document.getElementById("mail-input").value;
  let f = document.getElementById("message-input").value;
  if (x == ""){
    document.getElementById("name-input").style.borderColor = "red";
  }
  else{
    document.getElementById("name-input").style.borderColor = "#f2a1ad";
  }
   if(z == ""){
    document.getElementById("phone-input").style.borderColor = "red";
  }
  else{
    document.getElementById("phone-input").style.borderColor = "#f2a1ad";
  }
  if(y == ""){
    document.getElementById("mail-input").style.borderColor = "red";
  }
  else{
    document.getElementById("mail-input").style.borderColor = "#f2a1ad";
  }
  if(f == ""){
    document.getElementById("message-input").style.borderColor = "red";
  }
  else{
    document.getElementById("message-input").style.borderColor = "#f2a1ad";
  }
}