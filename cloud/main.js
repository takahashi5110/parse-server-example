

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("pushsample", function (request, response) {
  Parse.initialize("eleeleele", "eleele", "eleeleeleeleeleele");
  var query = new Parse.Query(Parse.Installation);

  Parse.Push.send(
    {
      where: query,
      data:
      {
        alert: 'Test',
        badge: 1,
        sound: 'default'
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
    { useMasterKey: true });
});
