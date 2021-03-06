const apiKey = require('./../.env').apiKey;


export class FindDoc {
  constructor(inputName, inputMedical) {
    this.inputName = inputName;
    this.inputMedical = inputMedical;
    this.docName;
    this.docStreetAddress;
    this.docCityStateAddress;
    this.docWebsite;
    this.docNewPatients;
  }

  getDoc(success, error){//success and error are callback function names
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${this.inputName}&query=${this.inputMedical}&location=or-portland&user_location=45.5231,-122.6765&skip=0&limit=50&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },

      success: function(response) {
        console.log(response);
        const finalResults = [];
        for (var i = 0; i < response.data.length; i++){
          const docComplete = [];
          this.docName = response.data[i].profile.last_name + ', ' + response.data[i].profile.first_name;
          this.docStreetAddress = response.data[i].practices[0].visit_address.street;
          this.docCityStateAddress = response.data[i].practices[0].visit_address.city + ', ' + response.data[i].practices[0].visit_address.state;
          this.docPhone = response.data[i].practices[0].phones[0].number;
          if (response.data[i].practices[0].website){
            this.docWebsite = response.data[i].practices[0].website;
          } else {
            this.docWebsite = 'sorry, no website available';
          }


          if (response.data[i].practices[0].accepts_new_patients){
            this.docNewPatients = 'taking new patients';
          } else {
            this.docNewPatients = 'not taking any new patients at this time';
          }


          docComplete.push(`${this.docName} <br> ${this.docStreetAddress}  <br> ${this.docCityStateAddress}  <br> ${this.docPhone} <br> ${this.docWebsite} <br> ${this.docNewPatients}`);
          finalResults.push(docComplete);
        }//for loop

        success(finalResults);//callback function named success with ARGUMENT response that hasn't necessarily been grabbed yet from server

      },


      error: function(response) {
        error(response);//callback function named error that's a blank template for doing whatever we want when called in frontend
      }

    });//ajax
  }//getDoc
} //FindDoc
