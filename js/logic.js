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
        nameArray.push(response.data[i].profile.last_name + ', ' + response.data[i].profile.first_name + '<br>' + 'Accepting new patients: ' + response.data[i].practices.phones[1]);
        }
        console.log(nameArray);





        // let all = [lastNameArray, firstNameArray];
        // let mix = [];
        // for (var i = 0; all.length !== 0; i++) {
        //   var j = 0;
        //   while (j < all.length) {
        //     if (i >= all[j].length) {
        //       all.splice(j, 1);
        //     } else {
        //       mix.push(all[j][i]);
        //       j += 1;
        //     }
        //   }
        // }
        success(nameArray);//callback function named success with ARGUMENT response that hasn't necessarily been grabbed yet from server
      },


      error: function() {
        // error(response);//callback function named error that's a blank template for doing whatever we want when called in frontend
      }

    });//ajax
  }//getDoc
} //FindDoc
