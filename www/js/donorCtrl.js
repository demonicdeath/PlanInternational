app.controller('donorInfoCtrl', function($scope,  $state, $ionicModal, $http, AuthService, DonorService) {

  DonorService.storeblankInformation();

  if(DonorService.isReload)
    console.log("reloadme");

  $scope.donorTypes =["Person","Business"];
  
  $scope.titles =[{title:"Mr."}, {title:"Mrs."}, {title:"Ms."}, {title:"Miss"}, {title:"Dr."}, {title:"Other"}];  
  $scope.Info = {};

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  $scope.ClearAddress = function() {
    $scope.Info.StreetNumber = null;
    $scope.Info.StreetName = null;
    $scope.Info.AptNumber = null;
    $scope.Info.City = null;
    $scope.Info.Province = null;
    $scope.Info.PostalCode = null;    
  };

  $scope.getGender = function(){
    if($scope.Info.Title == "Mr.")
      $scope.Info.Gender = "M";
    else if($scope.Info.Title == "Mrs." || $scope.Info.Title == "Ms." || $scope.Info.Title == "Miss")
      $scope.Info.Gender = "F";
    else if($scope.Info.Title=="Dr." || $scope.Info.Title=="Other")
      $scope.Info.Gender ="";
  };

  $scope.saveInfo = function() {  
    //var storeInfo = JSON.stringify($scope.Info);

    if($scope.Info.Email != $scope.Info.ConfirmEmail)
      return;   

    var country = $scope.address.address_components[4].long_name;
    country = "Canada";
          
    if(country === 'Canada' ){
        $scope.pattern = new RegExp(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/);
        //var postal = $scope.Info.PostalCode;
    }                


    DonorService.storeDonorInformation($scope.Info);
    
    $state.go('main.donateAmount', {}, {reload: false});
    //$scope.Info = {};
  };

  $scope.ClearForm = function(){
    $scope.donorForm.$setPristine();
  }

  $scope.FindAddress = function(){
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);          
        } 
  }

  var showPosition = function(position){
       var lat = position.coords.latitude;
       var lng = position.coords.longitude;

       var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat + ","+ lng +"&sensor=true";

          $.ajax({
            url: url,
            async: false,
            success: function (data) {
              $scope.address = data.results[0];
            }
        });

      if($scope.address)
      {
          $scope.Info.StreetNumber = $scope.address.address_components[0].long_name;
          $scope.Info.StreetName =$scope.address.address_components[1].long_name;
          $scope.Info.City = $scope.address.address_components[2].long_name;
          $scope.Info.Province = $scope.address.address_components[3].long_name;            
      }    
          
  }

  
   
});