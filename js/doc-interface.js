const apiKey = require('./../.env').apiKey;
import { FindDoc } from './../js/logic.js';

$(document).ready(function(){

  $('#search-form').submit(function(event){
    event.preventDefault();
    const name = $('#name-input').val();
    const location = $('#location-input').val();
    const medical = $('#medical-input').val();
    const newRequest = new FindDoc(name, location, medical);
    console.log(newRequest.inputName);
    console.log(newRequest.inputLocation);
    console.log(newRequest.inputMedical);

    console.log(newRequest.getDoc());

    newRequest.getDoc(function(bacon){
      for (var i = 0; i < 2; i++){
        $('#names-list').append(`<li>${bacon[i]}</li>`);
      }
    })

  });//preventDefault
});//document ready
