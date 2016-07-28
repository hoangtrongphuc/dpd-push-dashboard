var Resource = require('deployd/lib/resource'),
    util = require('util'),
    path = require('path');
    
function FCM(name, options) {
  Resource.apply(this, arguments);
}

util.inherits(FCM, Resource);

FCM.prototype.clientGeneration = true;

FCM.basicDashboard = {
  settings: [
  {
    name        : 'serverKey',
    type        : 'text',
    description : 'Make sure this is the server key, whose value is available in your Firebase project console under Project Settings > Cloud Messaging. Android, iOS, and browser keys are rejected by FCM.'
  }]
};
FCM.dashboard = {
    path: __dirname
  , pages: ['Config', 'Push']
  , scripts: [
  ]
}

module.exports = FCM;
