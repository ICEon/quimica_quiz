// JavaScript Document
 
$(document).ready(function(e) {
var	ancho = $('#principal').width();	 
var	alto = $('body').height();	
var    velocidad = 2400 -(alto*.4);
    $('.boton').css('width', ancho*.20);
	$('.boton').css('height', ancho*.20);
    $('.boton').css('font-size', ancho*.15);
	$('.carril').css('width', ancho*.20);
    $('.carril').css('height', alto*.80);
	$('.adivinar').css('height', ancho*.20);    	
    $('#tablero span').css('font-size', ancho*.11);
var	alto_footer = $('#comandos').height();	
    //alert (alto + "footer " + alto_footer);

var elementoEncontrar = 0;
var aciertos = 0;
var db;
var otroElemento1 = 0;
var otroElemento2 = 0;

var opcionesJSON = '{"opcion": [ {"uno":"uno", "dos":"dos","tres":"tres"},{"uno":"uno", "dos":"tres","tres":"dos"},{"uno":"dos", "dos":"tres","tres":"uno"},{"uno":"dos", "dos":"uno","tres":"tres"},{"uno":"tres", "dos":"uno","tres":"dos"},{"uno":"tres", "dos":"dos","tres":"uno"}]]';

var azar = JSON.parse(opcionesJSON);


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
        tx.executeSql("select numeroAtomico, nombreElemento from elementos where numeroAtomico = " + elementoEncontrar + ";", [], function(tx, res) {
			$("#elementoEncontrar").html(res.rows.item(0).nombreElemento);
			
        });
      });
	$(':mobile-pagecontainer').pagecontainer('change', '#juego',{
            transition: 'pop'
			}); 
	
//  $("#quien").popup("open",{transition: "flip"});
  donde = Math.floor((Math.random() * 6) + 1);
  alert (donde + "," + azar.opcion[donde].uno);
/*  do 
   {
	 otrosElementos();  
   }
   
   while (!((elementoEcontrar != otroElemento1) && (otroElemento1 != otroElemento2) && (otroElemento2 != elementoEncontrar)))
  */
   
    otrosElementos();  
    
   alert (elementoEncontrar + " "+otroElemento1 + " " +otroElemento2);

   db.transaction(function(tx) {
        tx.executeSql("select simboloElemento from elementos where numeroAtomico = " + elementoEncontrar + ";", [], function(tx, res) {
			
			$("#" + azar.opcion[donde].uno).html(res.rows.item(0).simboloElemento);
			
        });
      });

   db.transaction(function(tx) {
        tx.executeSql("select simboloElemento from elementos where numeroAtomico = " + otroElemento1 + ";", [], function(tx, res) {
			$("#" + azar.opcion[donde].dos).html(res.rows.item(0).simboloElemento);
			
        });
      });


   db.transaction(function(tx) {
        tx.executeSql("select simboloElemento from elementos where numeroAtomico = " + otroElemento2 + ";", [], function(tx, res) {
			$("#" + azar.opcion[donde].tres).html(res.rows.item(0).simboloElemento);
			
        });
      });

   

  
  
 });
 

function otrosElementos()
 {
	otroElemento1 = Math.floor((Math.random() * 118) + 1);
	otroElemento2 = Math.floor((Math.random() * 118) + 1);
 }

 $('.boton').on('tap', function(){
  //	alert (velocidad); 	 
  $('#uno').css('top', $('#uno').position().top -100);
  $('#tres').css('top', $('#tres').position().top -50);
  $('#dos').css('top', $('#dos').position().top -10);
  $("#tablero span")
  //.css({top:0,position:'relative'})
  .animate({top: alto*.50}, velocidad, function() {
  });

 });

 
 }




});



		
		
});

