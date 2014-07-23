// This hasn't been tested yet.
    
    
     angular.module('phone', []).factory('$phone', ['$http', function($http) {
       _get = 'GET';
       _url = 'https://api.twilio.com/2010-04-01/Accounts/";
       //_api_key = "AC5ef8732a3c49700934481addd5ce1659";
       
      return { $send_sms : function (token, api_key, to, api_key, text, from)
                  {
                          $http({method: _method, url: url  + "/Messages.json&Body=" + text + 
                                                                           "&To=" + to + 
                                                                           "&From=" + from +
                                                                           "&MediaURL=" + media + 
                                                                           "&" + _api_key + ":" + token}).
                          success(function(data, status) {}).
                          error(function(data, status) {});   
                  }
            };
    }
  ]);
