[comment]: <> (HEAD)
# TextMagic JavaScript SDK
This library provides you with an easy way of sending SMS and receiving replies by integrating the TextMagic SMS Gateway into your JavaScript application.

## What Is TextMagic?
TextMagic’s application programming interface (API) provides the communication link between your application and TextMagic’s SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you’ve already sent.


[comment]: <> (/HEAD)
## Installation

```shell
npm install textmagic-client@2.0.1588 --save
```

## Usage Example

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
const textmagicClient = require('textmagic-client');

const fs = require('fs');
const client = textmagicClient.ApiClient.instance;
const auth = client.authentications['BasicAuth'];

// put your Username and API Key from https://my.textmagic.com/online/api/rest-api/keys page.
auth.username = 'YOUR_USERNAME';
auth.password = 'YOUR_API_KEY';

const api = new textmagicClient.TextMagicApi();

// Simple ping request example
api.ping().then(function (data) {
    console.log(data.ping);
}).catch(function(err){
    console.error(err);
});

// Send a new message request example
api.sendMessage({
    'text': 'I love TextMagic!',
    'phones': '+12341234123'
}).then(function (data) {
    console.log(data.id);
}).catch(function(err){
    console.error(err);
});

// Get all outgoing messages request example
api.getAllOutboundMessages({
    'page': 1,
    'limit': 200
}).then(function (data) {
    console.log(data.resources[0].text);
}).catch(function(err){
    console.error(err);
});

// Upload new avatar for contacts list (group) with Id 3223 example
let stream = new fs.ReadStream('test.jpg');
api.uploadListAvatar(stream, 3223).then(function (data) {
    console.log(data.id);
}).catch(function(err){
    console.error(err);
});
```
[comment]: <> (FOOTER)
## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[comment]: <> (/FOOTER)
