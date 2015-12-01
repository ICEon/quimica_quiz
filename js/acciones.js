// JavaScript Document
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
//	alert (elementoEncontrar);
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




});

