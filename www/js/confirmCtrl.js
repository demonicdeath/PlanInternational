app.controller('confirmCtrl', function($scope,  $state, $ionicModal, $http, DonorService) {

   $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };


  
  $scope.donorData = DonorService.getDonorInformation();
  $scope.donateData = DonorService.getDonateInformation();

  console.log($scope.donorData.donorTypes);

   $scope.Edit = function(){
      $state.go('main.dash', {}, {reload: false});
   }

  

  $scope.Confirmed = function(){
      //var data = JSON.stringify($scope.donorData);


   /*
    $http.post('http://localhost:8100/saveDonorInfo', data).then(
        function(result) {
        
        }, function(err) {
          $scope.response = err;
        });        
     */     
        
    $state.go('main.final', {cache:false}, {reload: false}) ; 
    
  }

  $scope.BacktoStart= function(){
    DonorService.clearAllInformation();
    $state.go('main.dash', {cache:false}, {reload: false}) ;
  }
   
});