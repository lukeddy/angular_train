/**
 * Created by chenzhen on 15/12/14.
 */

angular.module('indigo').service('MovieService', function($q, Jsonp){

    this.urlArr = {
        'in_theaters' : 'https://api.douban.com/v2/movie/in_theaters',
        'coming_soon' : 'https://api.douban.com/v2/movie/coming_soon',
        'top250' : 'https://api.douban.com/v2/movie/top250',
        'weekly' : 'https://api.douban.com/v2/movie/weekly',
        'us_box' : 'https://api.douban.com/v2/movie/us_box',
        'new_movies' : 'https://api.douban.com/v2/movie/new_movies',
    }


    this.getMovies = function(type){
        var url = this.urlArr[type];
        var deferred = $q.defer();
        Jsonp.get(url,function(data){
            if(data){
                deferred.resolve(data);
            }else{
                deferred.reject(data);
            }
        });
        return deferred.promise;
    }

    this.getDetail = function(id){
        var url = 'https://api.douban.com/v2/movie/subject/' + id;
        var deferred = $q.defer();
        Jsonp.get(url,function(data){
            if(data){
                deferred.resolve(data);
            }else{
                deferred.reject(data);
            }
        });
        return deferred.promise;
    }
})