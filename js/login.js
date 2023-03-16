$(document).ready(function() {
	$('#login-form').submit(function(e) {
		e.preventDefault();
		var email = $('#email').val();
		var password = $('#password').val();
		$.ajax({
			type: 'POST',
			url: 'php/login.php',
			data: {email: email, password: password},
			dataType: 'json',
			success: function(response) {
				if (response.status == 'success') {
					window.location.href = 'profile.html';
				} else {
					$('#error-message').html(response.message);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	});
});
