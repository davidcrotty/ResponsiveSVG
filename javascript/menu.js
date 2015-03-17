(function($){

	$(document).ready(function(){

		$(".menu_geolocation").click(function(){
			getGeolocation();
		});

		function getGeolocation(){
			navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
		};

	    function locationSuccess(position) {
	        latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			console.log(latitude, longitude);
	    }

	    function locationFail(error) {
		    switch(error.code) {
		        case error.PERMISSION_DENIED:
		            console.log("User denied the request for Geolocation.");
		            break;
		        case error.POSITION_UNAVAILABLE:
		            console.log("Location information is unavailable.");
		            break;
		        case error.TIMEOUT:
		            console.log("The request to get user location timed out.");
		            break;
		        case error.UNKNOWN_ERROR:
		            console.log("An unknown error occurred.");
		            break;
		    }
	    }
	});
})(jQuery);