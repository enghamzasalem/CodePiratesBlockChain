app.controller('SettingsController', function ($scope, $rootScope, SettingsService, $filter ,$translate , FirebaseService) {

    $scope.Coins = [
        {
            id: 0,
            label: 'USD',
            simbol: '$',
        }, {
            id: 1,
            label: 'EUR',
            simbol: '€',
        }
    ];

    $scope.Languages = [
        {
            id: 'en',
            label: 'English'
        }, {
            id: 'es',
            label: 'Spanish'
        }, {
            id: 'ar',
            label: 'Arabic'
        }
    ];

    $scope.Avatars = [
        {
            id: 0,
            label: 'Geopattern'
        }, {
            id: 1,
            label: 'Blockies'
        }
    ];

    FirebaseService.getSettings(function(settings){
        $scope.NotificationSettings = settings;
        $scope.$apply();
    });
    

    var storageSetting = SettingsService.getSettings();

    $scope.Settings = {
        coin: filter($scope.Coins, storageSetting.coin),
        language: filter($scope.Languages, storageSetting.language),
        avatars : filter($scope.Avatars , storageSetting.avatars)       
    };

    $scope.settingsChanged = function () {
        SettingsService.setSettings($scope.Settings);
        $rootScope.settings = angular.copy(SettingsService.getSettings());
        $translate.use($rootScope.settings.language.id);
        apply();
    };

    $scope.firebaseSettingsChanged = function(){
        if(!$scope.NotificationSettings.status)
            $scope.NotificationSettings.timestamp = 0;        
        FirebaseService.setSettings($scope.NotificationSettings);
    };

    function filter(list, obj) {
        var o = $filter('filter')(list, { id: obj.id }, true)[0];
        return o;
    };

 
    function apply() {
        try {
            if (!$scope.$$phase) {               
                $scope.$apply();
            } 
        } catch (err) {
        }
    };
});