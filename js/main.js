$(document).ready(function() {
  $('.datepicker').datepicker();
  $('.timepicker').timepicker();
  $('.chips').chips();
});
$('.chips-autocomplete').chips({
  placeholder: "Sintomas aqui:",  
  autocompleteOptions: {
    data: {
      'Fiebre': null,
      'Dolores Musculares': null,
      'Dolor de cabeza': null,
      'Vomitos':null,
      'nauseas':null,
      'Mareos':null,
      'Vista borrosa': null,
      'Dolores en los huesos':null,
      'Tos':null,
      'Diarrea':null,
      'Dolor de estomago':null,
      
    },
    limit: Infinity,
    minLength: 1,
  }
});

var connectSlider = document.getElementsByClassName('range-field');
noUiSlider.create(connectSlider, {
	start: 0,
	connect: [true, false],
	range: {
	  'min': 0,
	  'max': 100
	}
});

