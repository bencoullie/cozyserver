$(function(){
	$.getJSON( "http://isitup.org/htch.co.nz.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle1" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle1" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle1" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/www.marilyns.co.nz.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle2" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle2" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle2" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/www.talentstore.co.nz.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle3" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle3" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle3" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/www.trulymadly.com.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle4" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle4" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle4" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});$.getJSON( "http://isitup.org/www.goodprice.co.nz.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle5" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle5" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle5" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/dolphinzbasketball.co.nz.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle6" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle6" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle6" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/volunteer.gilroygarlicfestival.com.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle7" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle7" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle7" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/www.thehu.sh.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle8" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle8" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle8" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/shaolinkungfu.co.nz.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle9" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle9" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
		} else {
			$( ".circle9" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
	$.getJSON( "http://isitup.org/this.domain.is.down.json", function( theData ) {
		if (theData.status_code == 1) {
			$( ".circle10" ).css( "background-color", "none" );
		} else if (theData.status_code == 2) {
			$( ".circle10" ).css( "background-color", "rgba(231, 76, 60, 1)" );
			$( "#egg" ).css("display", "none");
			$( "#brokenegg" ).css("display", "inherit");
			console.log('shit');
		} else {
			$( ".circle10" ).css( "background-color", "rgba(243, 156, 18, 1)" );
		}
	});
});
