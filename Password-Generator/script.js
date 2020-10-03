 //confirmation of password values(unfinished)  
function confirmLower(){

    confirm("Do you want lowercase letters in your password");{  
             
    }
}    
function confirmUpper(){

    confirm("Do you want uppercase letters in your password");{
        
    }  
}
function confirmSymbol(){

    confirm("Do you want symbols in your password");{
        
    }
}      
function confirmNumber(){

    confirm("Do you want numbers in your password");{
        
    }  
}        
  


confirmLower();
confirmUpper();
confirmSymbol();
confirmNumber();

//set password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

// Write password to the #password input
function generate() {
  //set password length  
  let complexity = document.getElementById("slider").value;
  
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