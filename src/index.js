'use strict';

const Alexa = require("alexa-sdk");

const handlers = {
  'LaunchRequest': function () {
      this.emit('SayHello');
  },
  'GreeterIntent': function () {
      this.emit('SayHello')
  },
  'SayHello': function () {
      const name = this.event.request.intent.slots.personName.value || 'you';
      this.emit(':ask', `Hello ${name}. How are you doing today?`);
  },
  'GreeterGoodbyeIntent': function () {
      this.emit(':tell', 'Well, good to hear that. Talk to you later bye!')
  },
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
