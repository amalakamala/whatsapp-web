$(document).ready(function(){
	/* GRUPO LAB */
	$("#laboratoria").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="laboratoria" src="assets/img/logocodeacademy.png">');
		$("#name").append('<h5>Laboratoria Perú</h5>');
		$("#frase").append('<p>No se pique!!</p>');
		localStorage.setItem('mensaje-pre',`
			<div class="row">
				<div class="caja-blanca ">
					<span class="span-nombre">Laboratoria Perú</span><br>
					<span>Hola, ¿como estas?</span>
				</div>
			</div>
		`)
		var predef = localStorage.getItem('mensaje-pre');
  		$('#el-chat').html(predef); 
	});
	/* Raymi Salsomando */
	$("#raymi").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="raymi" src="assets/img/raymi.jpg" alt="">');
		$("#name").append('<h5>Raymi Saldomando</h5>');
		$("#frase").append('<p>La clase va bien!</p>');
	});
	/* Mariana Costa */
	$("#mariana").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="mariana" src="assets/img/mariana.jpg" alt="">');
		$("#name").append('<h5>Mariana Costa</h5>');
		$("#frase").append('<p>El panel de speakers esta buenazo</p>');
	});
	/* Ana María Martinez */
	$("#ana-maria").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="ana-maria" src="assets/img/anamaria.jpg" alt="">');
		$("#name").append('<h5>Ana María Martinez Franklin</h5>');
		$("#frase").append('<p>Pues dale chamo!</p>');
	});
	/* Rodulfo Prieto */
	$("#rodulfo").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="rodulfo" src="assets/img/rodulfo.jpg" alt="">');
		$("#name").append('<h5>Rodulfo Prieto</h5>');
		$("#frase").append('<p>¿Cómo van las chicas?</p>');
	});
	/* Andrea Lamas */
	$("#andrea").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="andrea" src="assets/img/andrea.jpg" alt="">');
		$("#name").append('<h5>Andrea Lamas</h5>');
		$("#frase").append('<p>Hoy me toca clases de canto, yee!</p>');
	});	
	/* Maria Paula Rivarola */
	$("#ma-paula").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="ma-paula" src="assets/img/mariapaula.jpg" alt="">');
		$("#name").append('<h5>Maria Paula Rivarola</h5>');
		$("#frase").append('<p>Wuju! esto me encanta!! en verdad!!</p>');
	});	
	/* Katy Sanchez */
	$("#katy").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="katy" src="assets/img/katy.jpg" alt="">');
		$("#name").append('<h5>Katy Sanchez</h5>');
		$("#frase").append('<p>No te preocupes, tengo el salón bajo control</p>');
	});	
	/* Aldo Alfaro */
	$("#aldo").click(function(){
		$("#img-contacto").empty();
		$("#name").empty();
		$("#frase").empty();
		$("#img-contacto").append('<img class="img-icon-lab" id="aldo" src="assets/img/aldo.jpg" alt="">');
		$("#name").append('<h5>Aldo Alfaro</h5>');
		$("#frase").append('<p>Vao a comer?</p>');
	});		
});

var enviarMensaje = function(){
	$('body').keyup(function(e) {
	    if(e.keyCode == 13) {
	    	var mensaje = $("#chateo").val(); //Id desde html

	        if(mensaje == ""){
				alert("Debes escribir una mensaje"); //input vacia da alert
			}else{
				console.log("hola");
				$("#el-chat").append(`
					<div class="row">
						<div class="caja-verde">
							<span>`+mensaje+`</span>
						</div>
					</div>
				`);
	        	$("#chateo").val("");	
			}	                
	    }
	    return false;
	});
}

enviarMensaje();

/*
LA IDEA
- Cuando se haga click en cada uno de los chat la idea es que esten los mensajes que enviados y poder seguir enviando.
- Estos mensajes se pueden guardar en localStorage diferenciados según la persona del chat.
- Lo ideal guardarlo en un arreglo que devuelva en el mismo orden las conversaciones del chat, y diferenciar entre enviados y recibidos.
- Al igual que pokemon no crear una sección de chat por cada persona, si no, una base de diseño y según el chat cambia esta info.
- Los mensajes enviados me fueron imposibles colocarlos a la izquierda, ya que si ponia position:absolute; cuando el usuario envía un mensaje se sobreescribe el anterior.
*/



