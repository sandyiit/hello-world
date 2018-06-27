var request = require('request');

var user = process.env.CIRCLE_PROJECT_USERNAME;
var project = process.env.CIRCLE_PROJECT_REPONAME;
var token = process.env.DOCKER_HUB_TOKEN;

var headers = {
  'Content-Type': 'application/json'
};

var dataString = `{"docker_tag": "${process.env.CIRCLE_BRANCH}"}`;

var options = {
  url: 'https://registry.hub.docker.com/u/' + user + '/' + project + '/trigger/' + token + '/',
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
  else {
	  console.log("Error: " + error);
	  console.log("Status Code: " + response.statusCode);
	  console.log("Status Message: " + response.statusMessage);
  }
}

console.log('requesting: ' + options.url)
request(options, callback);