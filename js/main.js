$(document).ready(function() {
  $('.datepicker').datepicker();
  $('.timepicker').timepicker();
  $('.chips').chips();
});
$('.chips-autocomplete').chips({
  placeholder: "Sintomas aqui:",  
  autocompleteOptions: {
    data: {
      'Apple': null,
      'Microsoft': null,
      'Google': null
    },
    limit: Infinity,
    minLength: 1,
  }
});

function cambia(){
var slide=document.getElementsById(test5);
if(slide === max ){
document.div.style.backgroundColor=red;
}else{
  style.backgroundColor=green;
}
} 
/*function prueba(){
let cojer = document.getElementsByClassName('range-field').innerHTML;
document.getElementById('prueba').innerHTML = "te sientes: " + cojer;
}*/
