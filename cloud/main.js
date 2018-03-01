

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  var query = new Parse.Query(Parse.Installation);
  query.equalTo('deviceType', 'ios');
  console.log('query: ' + query.count({useMasterKey: true}));

  var data = {
    alert: "The Giants Mets 2-3."
  };

  Parse.Push.send(
    {
      where: query,
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
