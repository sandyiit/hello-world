var request = require('request');

var project = process.env.CIRCLE_PROJECT_REPONAME;
var token = process.env.DOCKER_HUB_TOKEN;

var headers = {
  'Content-Type': 'application/json'
};

var dataString = `{"docker_tag": "${process.env.CIRCLE_BRANCH}"}`;

var options = {
  url: 'https://registry.hub.docker.com/u/responsive/' + project + '/trigger/' + token + '/',
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
  else {
	  console.log(error);
	  console.log(response);
  }
}

console.log('requesting: ' + options.url)
request(options, callback);