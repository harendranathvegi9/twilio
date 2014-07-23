curl -XPOST /Messages.json \
    -d "Body=Jenny%20please%3F%21%20I%20love%20you%20<3" \
    -d "To=%2B15558675309" \
    -d "From=%2B14158141829" \
    -d "MediaUrl=http://www.example.com/hearts.png" \
    -u 'AC5ef8732a3c49700934481addd5ce1659:{AuthToken}'
    
    
     angular.module('phone', []).factory('$phone', ['$http', function($http) {
       _get = 'GET';
       _url = 'https://api.twilio.com/2010-04-01/Accounts/";
       //_api_key = "AC5ef8732a3c49700934481addd5ce1659";
       
      return { $send_sms : function (token, api_key, to, api_key, text, from)
                  {
                          $http({method: _method, url: url  + "Body=" + text + 
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
