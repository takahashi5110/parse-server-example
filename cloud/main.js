

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  var query = new Parse.Query(Parse.Installation);
  var log = 'query.count: ' + query.count({ useMasterKey: true });
  response.success(log);
});
