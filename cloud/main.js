

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  response.success('pushsample start.');

  Parse.initialize("eleeleele", "eleele", "eleeleeleeleeleele");

  response.success('pushsample done.');
});
