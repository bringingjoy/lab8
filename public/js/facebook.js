function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function statusChangeCallback() {
	if (response.status === 'connected') {
		console.log("Successfully logged in via hellish Facebook");
		FB.api("/me?fields=name,first_name,picture.width(480)", changeUser);
	}
}

function changeUser(response) {
	console.log(response);
	$(".facebookLogin p").hide();
	$("#name").text(response.name);
	$("#photo").replaceWith(response.picture);

}