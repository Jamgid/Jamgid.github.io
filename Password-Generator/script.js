// Write password to the #password input
function generate() {
  //set password length  
  let complexity = document.getElementById("slider").value;
  //set password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  
  let password = "";  
  //loop to pick specified amount of characters
  for(var i = 0; i <= complexity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  //add password to display area
  document.getElementById("display").value = password;

  

}
//Reactive display of slider value
document.getElementById("length").innerHTML = "Length: 68";

document.getElementById("slider").oninput = function(){
    
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;    
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8"
    }
}