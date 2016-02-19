/**
 * Created by chenzhen on 15/12/14.
 */


function pageTitle($rootScope, $timeout){
    return {
        link: function(scope, element) {
            var listener = function(event, toState) {
                // Default title
                var title = 'Indigo | Angular Seed';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'Indigo | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};


angular
    .module('indigo')
    .directive('pageTitle', pageTitle)