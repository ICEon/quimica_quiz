// JavaScript Document
 
$(document).ready(function(e) {
	ancho = $('#principal').width();	 
	alto = $('body').height();	
    velocidad = 2000 -(alto*.4);
    $('.boton').css('width', ancho*.20);
	$('.boton').css('height', ancho*.20);
    $('.boton').css('font-size', ancho*.15);
	$('.carril').css('width', ancho*.20);
    $('.carril').css('height', alto*.80);
	$('.adivinar').css('height', ancho*.20);    	
    $('#tablero span').css('font-size', ancho*.11);
	alto_footer = $('#comandos').height();	
    //alert (alto + "footer " + alto_footer);

var elementoEncontrar = 0;
var aciertos = 0;
var db;

//*************************


function conectar_base()
 {
  db = window.sqlitePlugin.openDatabase({name: "quimica_b.db", createFromLocation: 1});					
 }
 
 
$(document).ready(function(e) {
	
document.addEventListener("deviceready", onDeviceReady, false);

$('#bnterror').on('tap', function(){
  $("#quien").popup("close");
  $('#error').popup('open');   		
});

$('#btnacierto').on('tap', function(){
	  $("#quien").popup("close");
  $('#acierto').popup('open');   		
});

 function onDeviceReady() {
	 
 conectar_base();

 $('#btnjugar').on('tap', function(){
					  $("#quien").popup();
   elementoEncontrar = Math.floor((Math.random() * 118) + 1);
 
   db.transaction(function(tx) {
        tx.executeSql("select numeroAtomico, nombreElemento from Elementos where numeroAtomico = " + elementoEncontrar + ";", [], function(tx, res) {
			$("#elementoEncontrar").html(res.rows.item(0).nombreElemento);
        });
      });
	$(':mobile-pagecontainer').pagecontainer('change', '#juego',{
            transition: 'pop'
			}); 
	
  $("#quien").popup("open",{transition: "flip"});
 });
 
 
 }


 $('.boton').on('tap', function(){
  //	alert (velocidad); 	 
  $('#uno').css('top', $('#uno').position().top -100);
  $('#tres').css('top', $('#tres').position().top -50);
  $('#dos').css('top', $('#dos').position().top -10);
  $("#tablero span")
  //.css({top:0,position:'relative'})
  .animate({top: alto*.78}, velocidad, function() {
  });

 });



});



		
		
});

