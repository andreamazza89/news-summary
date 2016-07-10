(function(exports) {

  function ApiCall(input) {

    this.get = function(input) {
      return 'output';
    };

  };

  ApiCall.prototype = {
    
    get: function(input) {
      return 'output';
    }
  };

  exports.ApiCall = ApiCall;

})(this);
