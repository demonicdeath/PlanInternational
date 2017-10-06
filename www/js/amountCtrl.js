app.controller('amountCtrl', function($scope,  $state, $ionicModal, DonorService) {


   $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };


    $scope.signaturePad = new SignaturePad(document.getElementById('signatureCanvas'));
  	$scope.donateInfo = {};
    $scope.donationType =["Because I am a girl","Child Sponsorship"];
    $scope.childType =["I want to help a child that is","I have a selected child"];
    
    $scope.genderType =['No Preference Gender','Male', 'Female'];
    $scope.ageRange =['No Preference Age Range','0-5', '6-8', '9-11', '12-14'];
    $scope.region=['No Preference Region','East and South Africa','West Africa','Asia','Americas'];
    $scope.country=['No Preference Country','Bangladesh','Benin', 'Bolivia', 'Burkina Faso', 'Cambodia', 'Cameroon', 'Colombia', 'Ecuador', 'Egypt',
                  'El Salvador', 'Ethiopia', 'Ghana', 'Guatemala', 'Guinea', 'Guinea Bissau', 'Haiti', 'Honduras', 'Indonesia', 'Kenya',
                  'Liberia', 'Malawi', 'Mali', 'Mozambique', 'Nepal', 'Nicaragua', 'Niger', 'Pakistan', 'Paraguay', 'Peru', 'Philippines',
                  'Rwanda', 'Senegal', 'Sierra Leone', 'Sri Lanka', 'Sudan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Uganda', 'Vietnam',
                  'Zambia', 'Zimbabwe'];
    
    $scope.donateInfo.donatedAmount = 1;


    var currentDate = new Date();   
   $scope.maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());  

      
    $scope.datePickerCallback = function (datePick) {
        if (!datePick) { 
            return null;
        } else {
            $scope.donateInfo.bday = datePick;            
        }
    };
    



  	$scope.submitInfo = function() {      
      $scope.signature = $scope.signaturePad.toDataURL();      
      $scope.donateInfo.signature = $scope.signature;

      console.log($scope.donateInfo);
      DonorService.storeDonationInformation($scope.donateInfo);
      
    	$state.go('main.donorConfirm', {}, {reload: false});
	}
  
   
});