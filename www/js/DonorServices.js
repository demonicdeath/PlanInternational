angular.module('starter')

.factory('DonorService', DonorService);

function DonorService(){

//.service('DonorService', function($q, $http) {
  var current_donor={};
  var current_donate= {};
  var isReload = false;
  
  var donorInfo ={
      donorTypes : "",
      Title:"",
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
      bday:""
    };

  var donateInfo ={
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
    if(!current_donor)
      current_donor = angular.copy(donorInfo);
    if(!current_donate)
      current_donate = angular.copy(donateInfo);
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
    donateInfo.donatedAmount = data.donatedAmount;
    donateInfo.donationType = data.donationType;
    donateInfo.childType = data.childType;
    donateInfo.childCode = data.childCode;
    donateInfo.genderType = data.genderType;
    donateInfo.ageRange = data.ageRange;
    donateInfo.region = data.region;
    donateInfo.country = data.country;
    donorInfo.bday = data.bday;
    donateInfo.signature = data.signature;
  }

  function getDonorInformation(){    
    return donorInfo;
  }

   function getDonateInformation(){    
    return donateInfo;
  }

  function clearAllInformation(){    
    donorInfo = angular.copy(current_donor);
    donateInfo = angular.copy(current_donate);
  }


 


  return {
    storeblankInformation:storeblankInformation,
    storeDonationInformation:storeDonationInformation,
    storeDonorInformation:storeDonorInformation,
    getDonateInformation: getDonateInformation,
    getDonorInformation:getDonorInformation,   
    clearAllInformation: clearAllInformation
  };

}




