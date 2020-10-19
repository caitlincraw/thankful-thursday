require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { WebClient } = require('@slack/web-api');

// ATTACHING MIDDLEWARE
app.use(bodyParser.json()); 
app.use(express.static(__dirname + "/public")); 

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C01CT6HCNMT';

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({ channel: conversationId, text: 'It is Thursday! Time to send in your win for the week!' });

  // `res` contains information about the posted message
  console.log('Message sent: ', res.ts);
})();

// SERVER LOCATION
// app.listen(3000, () => {
//     console.log(`Server started at Port 3000`)
// });