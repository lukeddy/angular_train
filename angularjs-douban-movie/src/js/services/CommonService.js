/**
 * Created by chenzhen on 15/12/14.
 */

angular.module('indigo').factory('Jsonp',function(){
    return {
        get: function(url, callback){
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = url + (url.indexOf('?') > 0 ? '&' : '?') + 'callback=CB&' + Date.now();
            script.onload=function(){
                script.parentNode.removeChild(script);
            };
            window['CB'] = function (json) {
                callback(json);
            };
            document.head.appendChild(script);
        },
    }
});

angular.module('indigo').factory('demoOffCanvas', function(cnOffCanvas){
    return cnOffCanvas({
        templateUrl: 'ngviews/home/detail.html'
    })
})