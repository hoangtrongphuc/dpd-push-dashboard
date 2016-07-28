(function() {

var pushTemplate = _.template($('#push-template').html());
var firebaseURL = "https://fcm.googleapis.com/fcm/send"
$('#cancel-button').click(function() {
  window.location.reload();
  return false;
});

$('#push-button').click(function() {
	  //Do something
	dpd('__resources').get(Context.resourceId, function(result, err) {
		var title = $('#prop-title').val();
		var text = $('#prop-body').val();
		var options = {};
		options.registration_ids = $('#prop-users').val().split(/\r|\n/);
		options.notification = {
			title: title,
			text: text
		}
		var sKey = result.serverKey;

		  $.ajax({
			  url: firebaseURL,
			  type:"POST",
			  headers: {
			   "Content-Type": "application/json",
			   "Authorization": "key="+sKey
			  },
			  data: JSON.stringify(options),
			  dataType: 'json',
			  success: function (data) {
				alert(JSON.stringify(data));
			  }
			})  
	
	});
  return false;
});


})();