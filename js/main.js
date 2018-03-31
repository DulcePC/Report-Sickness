$(document).ready(function() {
  $('.datepicker').datepicker();
  $('.timepicker').timepicker();
});

$('.chips-autocomplete').chips({
   
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
      'Dolor de estomago':null
    },
    limit: Infinity,
    minLength: 1

  }
});
