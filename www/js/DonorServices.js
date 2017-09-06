angular.module('starter')

.factory('DonorService', DonorService);

function DonorService(){

//.service('DonorService', function($q, $http) {
  var current_data={};
  
  var donorInfo ={
      donorType : "",
      titles:"",
      Gender:"",
      FirstName : "",
      MiddleInitial: "", 
      LastName : "",
      StreetNumber : "",
      StreetName : "",
      AptNumber: "",
      City : "",
      Province : "",
      PostalCode :"",
      bday:"",

      donatedAmount: 0,
      donationType:"",
      childType:"",
      childCode:"",
      genderType:"",
      ageRange:"",
      region:"",
      country:"",
      signature:""
     
  };

  function storeblankInformation()
  {
    current_data = angular.copy(donorInfo);
  }

  function storeDonorInformation(data){
    donorInfo.donorTypes = data.donorTypes;
    donorInfo.Title = data.Title;
    donorInfo.FirstName =  data.FirstName;
    donorInfo.MiddleInitial = data.MiddleInitial;
    donorInfo.LastName = data.LastName;    
    donorInfo.Gender = data.Gender;
    donorInfo.FirstName = data.FirstName;
    donorInfo.MiddleInitial = data.MiddleInitial;
    donorInfo.LastName = data.LastName;
    donorInfo.StreetNumber = data.StreetNumber;
    donorInfo.StreetName = data.StreetName;
    donorInfo.AptNumber = data.AptNumber;
    donorInfo.City = data.City;
    donorInfo.Province = data.Province;
    donorInfo.PostalCode = data.PostalCode;    
    donorInfo.HomePhone = data.HomePhone;
    donorInfo.MobileNumber = data.MobileNumber;
    donorInfo.Email = data.Email;
    donorInfo.ConfirmEmail = data.ConfirmEmail;
  }

  function storeDonationInformation(data){
    donorInfo.donatedAmount = data.donatedAmount;
    donorInfo.donationType = data.donationType;
    donorInfo.childType = data.childType;
    donorInfo.childCode = data.childCode;
    donorInfo.genderType = data.genderType;
    donorInfo.ageRange = data.ageRange;
    donorInfo.region = data.region;
    donorInfo.country = data.country;
    donorInfo.bday = data.bday;
    donorInfo.signature = data.signature;
  }

  function getDonorInformation(){    
    return donorInfo;
  }


  function clearDonorInformation(){    
    donorInfo = angular.copy(current_data);
  }


 


  return {
    storeblankInformation:storeblankInformation,
    storeDonationInformation:storeDonationInformation,
    storeDonorInformation:storeDonorInformation,
    getDonorInformation:getDonorInformation,   
    clearDonorInformation: clearDonorInformation
  };

}




