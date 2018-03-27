$(document).ready(function() {
  M.updateTextFields();
  $('input.autocomplete').autocomplete({
    data: {
      "pediatría": null,
      "Cardiologia": null,
      "Endocrinologia": null,
      "Odontologia":null,
      "Neurologia":null,
      "Gastroenterologia":null,
      "Pulmonologia":null,
      "Hermatologia":null,
      "Nutriologia":null,
      "Oftalmologia":null,
      "Traumatologia":null,
      "Urologia":null,
      "Ginecologia":null,
      "Dermatologia":null,
    },
  });
});

function prueba(){
let cojer = document.getElementsByClassName('range-field').innerHTML;
document.getElementById('prueba').innerHTML = "te sientes: " + cojer;

}