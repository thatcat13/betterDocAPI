const apiKey = require('./../.env').apiKey;


export class FindDoc {
  constructor(inputLocation, inputMedical, inputName) {
    this.inputLocation = inputLocation;
    this.inputMedical = inputMedical;
    this.inputName = inputName;
  }

  getDoc(){//success and error are callback function names
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.inputMedical}&skip=0&limit=50&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },

      success: function(response) {
        console.log(response);
        // const resultsArray = response.map(function(medicalIssue){
        //   let issue = {};
        //   issue[medicalIssue.key] = response.data.practices.;
        //   return issue;
      },
        // resultsArray.map(response.data[i].images.fixed_height.url);
        // }

        // success(newArray);//callback function named success with ARGUMENT response that hasn't necessarily been grabbed yet from server

      error: function() {
        // error(response);//callback function named error that's a blank template for doing whatever we want when called in frontend
      }

    });//ajax
  }//getDoc
} //FindDoc
