// JavaScript Document
$(document).ready(function(){
	// Responsive menu
    $('.toggle-nav').click(function(e) {
       $('#nav-mobile ul').toggleClass('is-active');
       e.preventDefault();
    });

    //Effetto overlay on mouseenter
    $(".img").mouseenter(function(){
       $(this).addClass("hover");
       });
    // Chiusura overlay on mouseleave 
	$(".img").mouseleave(function(){
       $(this).removeClass("hover");
	});
	// Heigth container = heigth sidebar
	$("#sidebar").css({
		"height":$(".m-3column-container").height()
	});
	$(window).resize(function(e) {
      	$("#sidebar").css({
		"height":$(".m-3column-container").height()
		});
    });
 });
