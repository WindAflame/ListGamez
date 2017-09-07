/*
    Routing Rules & Config
 */
app.config(function($stateProvider, $urlRouterProvider) {
    
    // Redirection when url not known
    $urlRouterProvider.otherwise('home');
    $urlRouterProvider.otherwise('login');

    // For others states, look each component of this project.
    $stateProvider
        // For route '/home'
        .state('homepage', homepageState)
        // Abstract for route '/game'
        .state('game', gameState)
        // For route '/game'
        .state('gameList', gameListState)
        // For route '/game/id'
        .state('gameDetail', gameDetailState)
        // declare route '/contact'
        .state('contact', contactState)
        // declare route '/login'
        .state('login', loginState);
});

// Fix animate in view
app.run(function($rootScope, $location, $timeout) {

    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            componentHandler.upgradeAllRegistered();
        }, 0);
    });
    
});

// Authentification
app.run(function ($transitions, $state, sessionService) {
    
        $transitions.onStart({}, $transition => {
            const $toState = $transition.$to();
            console.log('transistion',$toState.authenticate);
            console.log('transistion',sessionService.isAuthenticated(),sessionService.getJsonData());
            if ($toState.authenticate && !sessionService.isAuthenticated()){
                $transition.router.stateService.transitionTo('login');
            };
        });
    });