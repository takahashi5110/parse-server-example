

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  console.log('pushsample is called.');
});
