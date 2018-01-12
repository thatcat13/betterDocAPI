const apiKey = require('./../.env').apiKey;


export class FindDoc {
  constructor(inputLocation, inputMedical, inputName) {
    this.inputLocation = inputLocation;
    this.inputMedical = inputMedical;
    this.inputName = inputName;
  }

  getDoc(){//success and error are callback function names
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.inputMedical}&sort=full-name-asc&skip=0&limit=50&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },

      success: function(response) {
        console.log(response);
        // const nameArray = response.data.map(function(lastNames){
        //   let names = {};
        //   names[lastNames.last_name] = names.value;
        //   return names;
        // })
        let lastNameArray = [];
        for (var i = 0; i < response.data.length; i++){
        lastNameArray.push(response.data[i].profile.last_name);
        }
        console.log(lastNameArray);

        let firstNameArray = [];
        for (var i = 0; i < response.data.length; i++){
        firstNameArray.push(response.data[i].profile.first_name);
        }
        console.log(firstNameArray);
      },

        // success(newArray);//callback function named success with ARGUMENT response that hasn't necessarily been grabbed yet from server

      error: function() {
        // error(response);//callback function named error that's a blank template for doing whatever we want when called in frontend
      }

    });//ajax
  }//getDoc
} //FindDoc
