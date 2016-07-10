(function(exports) {

  function ArticlesFetcher(api = Api) {
    this._api = api;
  };

  ArticlesFetcher.prototype = {
    fetch: function(search, searchParams, callback) {
      var apiUrl = 'https://content.guardianapis.com/'
      var params = '?';

      for (var parameter in searchParams) {
        params += parameter + '=' + searchParams[parameter] + '&';
      }
      
      params = params.slice(0, params.length -1);
      
      this._api(apiUrl + search + params);
    }
  }

  exports.ArticlesFetcher = ArticlesFetcher;

})(this);
