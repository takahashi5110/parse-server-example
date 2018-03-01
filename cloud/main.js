

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  var query = new Parse.Query(Parse.Installation);
  Parse.Push.send(
    {
      where: query,
      data: {
        alert: "The Giants Mets 2-3."
        }
    },
    {
      success: function() {
        console.log('##### PUSH OK');
      },
      error: function(error) {
        console.log('##### PUSH ERROR');
      }
    },
    useMasterKey: true
  );

  response.success('pushsample done.');
});
