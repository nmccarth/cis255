jQuery(document).ready(function() {
	
	// add an element
	var txt = document.createElement("h1");
	txt.innerHTML = "cis255 - jQuery Intro - Build HTML from scratch";
	jQuery("body div").append(txt);
	

	//create 5 paragraphs
	for(var i=0; i<5; i++){
		var par = jQuery("<p></p>").text("Paragraph "+i);
		jQuery(par).attr("id", "par"+i);
		jQuery('#nealsholder').append(par);
	}


	//create modal
	var nealsmodal = jQuery("<div id='nealsmodal' class='modal fade' role='dialog'</div>");
	jQuery('#nealsholder').append(nealsmodal); //add modal to DOM
	jQuery("#nealsmodal").append("<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Modal Header</h4></div><div class='modal-body'><p>Some text in the modal.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div>");


	//trigger modal on click
	jQuery("p").click(function() {
		jQuery("#nealsmodal").modal();
	});

	//create accordian 
	var accordion = "<div class='accordion'>" //open
	accordion += "<div class='accordion-header'>1st Header</div><div class='accordion-content'>1st content</div>"
	accordion += "<div class='accordion-header'>2nd Header</div><div class='accordion-content'>2nd content</div>"
	accordion += "<div class='accordion-header'>3rd Header</div><div class='accordion-content'>3rd content</div>"
	accordion += "</div><br />" //close
	jQuery("#nealsholder").append(accordion); //add acordion to dom


	//accordion functionality
	jQuery(".accordion").on("click", ".accordion-header", function() {
		jQuery(this).toggleClass("active").next().slideToggle();
	});

	//create tabs
	var tabs ="<div class='tabs'><nav class='tab-list'><a class='tab active' href='#one'>One</a><a class='tab' href='#two'>Two</a>"
	tabs += "<a class='tab' href='#three'>Three</a></nav>"
	tabs += "<div id='one' class='tab-content show'>1st tab content</div>"
	tabs += "<div id='two' class='tab-content show'>2nd tab content</div>"
	tabs += "<div id='three' class='tab-content show'>3rd tab content</div>"
	tabs += "</div>"
	jQuery("#nealsholder").append(tabs);

	//tab functionality
	$(".tab-list").on("click", ".tab", function(e) {
		    e.preventDefault();
		    $(".tab").removeClass("active");
		    $(".tab-content").removeClass("show");
		    $(this).addClass("active");
		    $($(this).attr("href")).addClass("show");
	});


}); // end jQuery(document).ready
