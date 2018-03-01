

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  Parse.Cloud.useMasterKey();
  var query = new Parse.Query(Parse.Installation);
  console.log('query: ' + query);
  response.success('pushsample done.');
});
