Twilio
======

Twilio angularjs service to send sms, mms messages


Additional Notes
=================
Using Sendgrid in your own app is easy now.

Simply reference phone in your module:

     var app = angular.module('myapp', ['firebase', 'phone']);

and then $phone in your controller:

     function MyController($scope, $firebase, $phone, $http, $log)
     
Set your API user and Key Variables (I'm hoping this will change in the future):
 
      var api_user = "";
      var api_key = "";

Finally send an email:

     $phone.$send_sms(fill out the variables);

(Then you can write a router to manage when the user opens the site to their unique address)

If you'd like to create a service for another email provider, simply make a pull request, and create a service that contains the send function with the same parameters.

Right now we'll call this version 0.1 but eventually the send will be locked down for all future releases and we'll have a 1.0 release.

