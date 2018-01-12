const apiKey = require('./../.env').apiKey;


export class FindDoc {
  constructor(inputName, inputLocation, inputMedical) {
    this.inputName = inputName;
    this.inputLocation = inputLocation;
    this.inputMedical = inputMedical;
  }

// https://api.betterdoctor.com/2016-03-01/doctors?query=${this.inputMedical}&sort=full-name-asc&skip=0&limit=50&user_key=${apiKey}
  getDoc(success, error){//success and error are callback function names
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.inputMedical}&skip=0&limit=50&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },

      success: function(response) {
        console.log(response);
        let nameArray = [];
        for (var i = 0; i < response.data.length; i++){
          if (response.data[i].practices[0])  {
            nameArray.push(response.data[i].profile.last_name + ', ' + response.data[i].profile.first_name + 'Accepting new patients: ' +  response.data[i].practices[0].accepts_new_patients + 'Address: ' + response.data[i].practices[0].visit_address.street + ' ' + response.data[i].practices[0].visit_address.city + ', ' + response.data[i].practices[0].visit_address.state + 'Phone number: ' + response.data[i].practices[0].phones[0].number + 'Website: ' + response.data[i].practices[0].website);
          }
        }

        console.log(nameArray);


        success(nameArray);//callback function named success with ARGUMENT response that hasn't necessarily been grabbed yet from server
      },


      error: function() {
        // error(response);//callback function named error that's a blank template for doing whatever we want when called in frontend
      }

    });//ajax
  }//getDoc
} //FindDoc
