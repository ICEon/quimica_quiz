// JavaScript Document
 
$(document).ready(function(e) {
	ancho = $('#principal').width();	 
	alto = $('body').height();	
			 velocidad = 1500 -(alto*.4);
    $('.boton').css('width', ancho*.20);
	$('.boton').css('height', ancho*.20);
    $('.boton').css('font-size', ancho*.15);
	$('.carril').css('width', ancho*.20);
    $('.carril').css('height', alto*.75);
	$('.adivinar').css('height', ancho*.20);
	
    	
    $('#tablero span').css('font-size', ancho*.11);
	
		alto_footer = $('#comandos').height();
	
//	alert (alto + "footer " + alto_footer);
		
 $('.boton').on('tap', function(){
	alert (velocidad); 
	 
	 $('#uno').css('top', $('#uno').position().top -100);
	 	 $('#tres').css('top', $('#tres').position().top -50);
		 	 	 $('#dos').css('top', $('#dos').position().top -10);

$("#tablero span")
//.css({top:0,position:'relative'})
.animate({top: alto*.78}, velocidad, function() {
	var position = $('#uno').position();
//alert ( position.top );
    //callback

});

 });
		
});

