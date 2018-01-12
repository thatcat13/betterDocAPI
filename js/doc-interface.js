const apiKey = require('./../.env').apiKey;
import { FindDoc } from './../js/logic.js';

$(document).ready(function(){

  $('#search-form').submit(function(event){
    event.preventDefault();
    const medical = $('#medical-input').val();
    const name = $('#name-input').val();
    const location = $('#location-input').val();
    const newRequest = new FindDoc(medical, name, location);
    console.log(newRequest.inputMedical);
    console.log(newRequest.inputName);
    console.log(newRequest.inputLocation);

    console.log(newRequest.getDoc());



  });//preventDefault
});//document ready
