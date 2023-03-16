// form validation using jQuery


// $(document).ready(function() {
// 	$('#registration-form').submit(function(event) {
// 		event.preventDefault();
// 		var username = $('#username').val();
// 		var email = $('#email').val();
// 		var password = $('#password').val();
//         var confirmPassword=$('#confirm-password').val();
// 		var valid = true;
//         console.log(username);
// 		console.log(password);
// 		console.log(confirmPassword);
// 		if (username == "") {
// 			document.getElementById('#username').innerHtml='Please enter a username';
// 			valid = false;
// 		} else {
// 			$('#username-error').html('');
// 		}
// 		if (email == "") {
// 			$('#email-error').html('Please enter an email address');
// 			valid = false;
// 		} else {
// 			$('#email-error').html('');
// 		}
// 		if (password == "") {
// 			$('#password-error').html('Please enter a password');
// 			valid = false;
// 		} 
//         if (password!=confirmPassword){
//             $('#confirm-password-error').html('Passwords does not match');
// 			valid = false;
//         }
//         else {
// 			$('#password-error').html('');
// 		}

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
				alert("Entered")
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
		
