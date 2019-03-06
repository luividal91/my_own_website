document.addEventListener("DOMContentLoaded", function(event) {
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
		thumbnailElement.className = "";
		console.log(thumbnailElement);
	});

});