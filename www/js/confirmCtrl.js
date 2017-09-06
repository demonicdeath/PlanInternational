app.controller('confirmCtrl', function($scope,  $state, $ionicModal, $http, DonorService) {

   $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };


  
  $scope.donorData = DonorService.getDonorInformation();
  console.log($scope.donorData);

   $scope.Edit = function(){
      $state.go('main.dash', {}, {reload: false});
   }

  $scope.Confirmed = function(){


 var data = JSON.stringify($scope.donorData);

    $http.post('http://localhost:8100/saveDonorInfo', data).then(
        function(result) {
        
        }, function(err) {
          $scope.response = err;
        });        
     
    DonorService.clearDonorInformation();
    $state.go('main.dash', {}, {reload: true});
  }
   
});