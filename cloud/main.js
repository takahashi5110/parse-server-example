Parse.Cloud.define("push", function (request, response) {

    console.log('--- push called. ---');
	var userQuery = new Parse.Query("User");
	//userQuery.equalTo('objectId', "pnIUZsWPrE");
	userQuery.equalTo('userType', 1);
	userQuery.limit = 1;
	userQuery.find({
		success: function(results) {

		    console.log(results[0]);

           var _user = results[0];

           console.log("user objectId:" + _user.objectId);

            var query = new Parse.Query(Parse.Installation);
            query.equalTo('appName', 'HerokuParseApp');
            query.limit = 1;
            query.find({
              success: function(installations) {
                  console.log(installations[0]);
                  response.success("done.");
              },
              error: function(error) {
                response.error("Error: " + error.code + " " + error.message);
              }
            });

















            // 	// 送信内容
          //   var payload = {
          //       alert: "HerokuからPUSH",
          //       status: "add"
          //   };
          //
          //   Parse.Push.send({
          //       data: payload,
          //       where: query
          //   }, {
          //       useMasterKey: true
          //   }).then(
		      //   function() {
		      //   	console.log('push succeeded.');
    	    //         response.success("Push Sent! " + log);
  	      //     }, function(error) {
  	      //     	console.log('push failed.' + error.message);
    	    //     response.error("Error while trying to send push " + error.message);
      	  //     }
	        // );
		},
		error: function(error) {
			console.log('push failed2.' + error.message);
			response.error("Error: " + error.code + " " + error.message);
		}
	});
});
