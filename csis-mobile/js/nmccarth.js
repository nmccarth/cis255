//back button functionality
function goBack() {
	window.history.back();
}


//carousel functionality
jQuery('.carousel').carousel({
	interval: 2000
})



jQuery().ready(function() {
	if(!jQuery( 'body' ).hasClass( "news" )) {
		return false; //break out so this weather code won't try to run on other pages
	}
	jQuery.simpleWeather({
		location: '',
		woeid: '12778949',
		unit: 'f',
		success: function(weather) {
			html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li>';
			html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

			$("#weather").html(html);
			weatherTooltip();
		},
		error: function(error) {
			jQuery("#weather").html('<p>'+error+'</p>');
		}
	});
});

var weatherTooltip = function() {
	var degree = jQuery("#weather").html();
	degree = degree.substr(27,30); //Don't ask why this returns what it does
	degree = degree.substr(0,3);
	degree = (degree - 32) / (1.8);
	degree = degree.toFixed(2);
	jQuery("#weather").attr("title", "Celsius: "+degree+"°C");
}

jQuery("#weather").click(function () {
	  var $title = $(this).find(".title");
	  if (!$title.length) {
		       alert(jQuery(this).attr("title"));
		    } else {
			        $title.remove();
			      }
});
