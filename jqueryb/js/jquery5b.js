jQuery(document).ready(function() {
	
	// add an element
	var txt = document.createElement("h1");
	txt.innerHTML = "cis255 - jQuery Intro - Build HTML from scratch";
	jQuery("#nealsholder").append(txt);
	

	//create 5 paragraphs
	for(var i=0; i<5; i++){
		var par = jQuery("<p class='list-group-item'></p>").text("Paragraph "+i);
		jQuery(par).attr("id", "par"+i);
		jQuery('#nealsholder').append(par);
	}

	//Create elements for below **bonus** smooth scroll
	var smooth = "<div id='smooth'><a href='#smoothone' class='list-group-item'>"
	smooth += "Smooth Scroll to Point 1</a><a href='#smoothtwo' class='list-group-item'>"
	smooth += "Smooth Scroll to Point 2</a></div>"
	jQuery("#nealsholder").append(smooth);


	//create modal
	var nealsmodal = jQuery("<div id='nealsmodal' class='modal fade' role='dialog'</div>");
	jQuery('#nealsholder').append(nealsmodal); //add modal to DOM
	jQuery("#nealsmodal").append("<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Modal Header</h4></div><div class='modal-body'><p>Some text in the modal.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div>");


	//trigger modal on click
	jQuery("p").click(function() {
		jQuery("#nealsmodal").modal();
	});

	//create accordian 
	var accordion = "<h1>Accordion</h1><div class='accordion'>" //open
	accordion += "<div class='accordion-header'>1st Header</div><div class='accordion-content'>1st content</div>"
	accordion += "<div class='accordion-header'>2nd Header</div><div class='accordion-content'>2nd content</div>"
	accordion += "<div class='accordion-header'>3rd Header</div><div class='accordion-content'>3rd content</div>"
	accordion += "</div><br />" //close
	jQuery("#nealsholder").append(accordion); //add acordion to dom

	//**bonus**Smooth scroll point one
	var smoothone = "<div id='smoothone'></div>'"
	jQuery("#nealsholder").append(smoothone);


	//accordion functionality
	jQuery(".accordion").on("click", ".accordion-header", function() {
		jQuery(this).toggleClass("active").next().slideToggle();
	});

	//create tabs
	var tabs ="<h1>Tabs</h1><div class='tabs'><nav class='tab-list'>"
	tabs +="<a class='tab active' href='#one'>One</a><a class='tab' href='#two'>Two</a>"
	tabs += "<a class='tab' href='#three'>Three</a></nav>"
	tabs += "<div id='one' class='tab-content show'>1st tab content</div>"
	tabs += "<div id='two' class='tab-content'>2nd tab content</div>"
	tabs += "<div id='three' class='tab-content'>3rd tab content</div>"
	tabs += "</div> <br />"
	jQuery("#nealsholder").append(tabs);

	//tab functionality
	$(".tab-list").on("click", ".tab", function(e) {
		    e.preventDefault();
		    $(".tab").removeClass("active");
		    $(".tab-content").removeClass("show");
		    $(this).addClass("active");
		    $($(this).attr("href")).addClass("show");
	});

	//create dropdown
	var drop = "<h1>Dropdown</h1><nav><ul><li><a href='#!'>Dropdown</a><ul class='dropdown'>"
	drop += "<li><a href='#!'>One</a></li>"
	drop += "<li><a href='#!'>Two</a></li>"
	drop += "<li><a href='#!'>Three</a></li>"
	drop += "</ul><li><a href='#!'>Not Dropdown</a></li>"
	drop += "</ul></nav><br /><br /><br /><br /><br /></br ><br />"
	jQuery("#nealsholder").append(drop);

	
	//dropdown functionality
	$("html").click(function() {
		    $(".dropdown").hide();
	});

	$("nav ul li a:not(:only-child)").click(function(e) {
		    $(this).siblings(".dropdown").toggle();

		    $(".dropdown").not($(this).siblings()).hide();
		    e.stopPropagation();
	});

	
	//Modals done above with In Class Paragraphs, won't do again here

	//Create Change on Scroll
	var scroll = "<nav id='scroll'>Navigation</nav>"
	scroll += "<main id='begin'>Top left will invert after you seee this.</main>"
	jQuery("#nealsholder").append(scroll);

	//Change on Scroll functionality
	$(window).on("scroll", function() {
		    var position = $("#begin").offset();

		    if ($(window).scrollTop() > position.top - 500) {
			            $("nav").addClass("active");
			        } else {
					        $("nav").removeClass("active");
					    };
	});


	//bonus
	//smooth scroll to an ID functionality
	$("a[href^='#']").click(function(e) {
			e.preventDefault();
			
			var position = $($(this).attr("href")).offset().top;

			$("body, html").animate({
						scrollTop: position
					} /* speed */ );
	});

	//Smooth scroll point two 
	var smoothtwo = "<div id='smoothtwo'></div>"
	jQuery("#nealsholder").append(smoothtwo);


	//Create simple image slider -- kind of glitchy looking but funtional
	var slider = "<div class='slider'>" //open
	slider += "<div><img src='https://my.mixtape.moe/kuxapj.jpg'></div>"
	slider += "<div><img src='https://my.mixtape.moe/xxzufy.jpg'></div>"
	slider += "<div><img src='https://my.mixtape.moe/zwcsqo.jpg'></div>"
	slider += "</div>" //close
	jQuery("#nealsholder").append(slider);


	//image slider funtionality
	$(".slider > div:gt(0)").hide();
	setInterval(function() {
			$('.slider > div:first-child')
				.fadeOut()
				.next()
				.fadeIn()
				.end()
				.appendTo('.slider');
	}, 4000);


}); // end jQuery(document).ready
