var plivo = require('plivo');
require('dotenv').config();

const verificationCode = Math.floor(100000 + Math.random() * 900000);

(function main() {
    'use strict';
    var client = new plivo.Client(process.env.auth_id, process.env.auth_token);
    client.messages.create(
      { 
          src: process.env.sender_id, 
          dst: process.env.destination_number,
          text: 'Your verification code is ' + verificationCode + '.'
    }
      ).then(function (response) {
        console.log(response);
    });
})();