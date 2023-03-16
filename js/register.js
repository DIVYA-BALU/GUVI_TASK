function check()
{
    event.preventDefault();
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var confirmPassword = document.getElementById("confirm-password").value;
	var valid=false;
    
    if(name && password && email && confirmPassword){
		valid=true;
		if(password!=confirmPassword){
			alert("Passwords don\'t match");
			valid=false;
		}
	}
	if (valid) {

		$.ajax({
			url: 'php/register.php',
			type: 'post',
			data: {username: name, email: email, password: password},
			dataType: 'json',
			success: function(response) {
				if (response.status == 'success') {
					alert(response.message);
					window.location.href = 'profile.html'; // redirect to profile page
				} else {
					alert('Email already exists!');
				}
			},
			error: function() {
				alert('An error occurred while processing the request.');
			}
		});
	}
    
}       
		
