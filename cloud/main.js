

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  var data = {
    alert: "i am ele-parse-server!"
  };

  Parse.Push.send(
    {
      channels: [ "heroku-apps" ],
      data: data
    },
    {
      success: function() {
        response.success('PUSH OK.');
      },
      error: function(error) {
        response.success('PUSH ERROR.');
      },
      useMasterKey: true
    }
  );
});
