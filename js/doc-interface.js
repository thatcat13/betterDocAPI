const apiKey = require('./../.env').apiKey;
import { FindDoc } from './../js/logic.js';

$(document).ready(function(){

  $('#search-form').submit(function(event){
    event.preventDefault();
    const name = $('#name-input').val();
    const medical = $('#medical-input').val();
    const newRequest = new FindDoc(name, medical);


    newRequest.getDoc(function(bacon){
      for (var i = 0; i < bacon.length; i++)
        $('#results-list').append(`<li>${bacon[0]}</li>`);
        console.log(bacon[0]);
        $('#results-list').append(`<li>${bacon[1]}</li>`);
        $('#results-list').append(`<li>${bacon[2]}</li>`);
        $('#results-list').append(`<li>${bacon[3]}</li>`);
        $('#results-list').append(`<li>Accepting New Patients: ${bacon[4]}</li>`);
        $('#results-list').append(`<li>Website: ${bacon[5]}</li>`);
      },  function(error){
      $('#errors').text("There was an error processing your request. Please try again.");
    });//getDoc

  });//preventDefault
});//document ready
