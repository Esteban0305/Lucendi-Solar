let Slides = [
	"src/Slide 1.jpeg",
	"src/Slide 2.jpeg",
	"src/Slide 3.jpeg",
	"src/Slide 4.jpeg"
];
px = (Slides.length-1)*1092;
$(document).ready(function(){
	for(i = -1; i < Slides.length -1; i++){
		$(".slideshow").append("<img src='" + Slides[i +1] + "' class='slide'>");
		$(".slideshow .slide:last-child").css({"left":(i*1092) + "px"});
	}
	i = 2;
	last = $(".slideshow .slide:first-child");
	$(".slideshow").append(last);
	$(".slideshow .slide:last-child").css({"left":px + "px"});
	setInterval(function(){
		$(".slide").animate({"left": "-=1092px"}, 500);
		setTimeout(function(){
			last = $(".slideshow .slide:first-child");
			$(".slideshow").append(last);
			$(".slideshow .slide:last-child").css({"left": px + "px"}, 0);
		}, 600);
	},5000);
});

$(".productos .marca span").click(function(){
	$(this).next().slideToggle(500);
	if($(this).text() == "expand_more"){
		$(this).text("expand_less");
	} else {
		$(this).text("expand_more");
	}
});

function SendMSG(){
	event.preventDefault();
	form = $("form").serializeArray();
	Nombre = form[0]["value"];
	Tel = form[1]["value"];
	Email = form[2]["value"];
	Mensaje = form[3]["value"];

	message = "Nombre: " + Nombre + "\nTeléfono: " + Tel + "\nEmail: " + Email + "\nMensaje: " + Mensaje;
	telegram_bot_id = "1919704084:AAHf8H0iwdyAr7g8AWScA6sUR88I-6YEKNw";
	chat_id = "1336620580";
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
		"method": "POST",
		"headers": {
			"Content-Type": "application/json",
		    "cache-control": "no-cache",
		    "Access-Control-Allow-Methods":"GET,POST,OPTIONS"
		},
		"data": JSON.stringify({
		"chat_id": chat_id,
		"text": message
		})
	}

	$.ajax(settings).done(function (res) {
	  if(res["ok"] == true){
	  	$("form").trigger("reset");
	  	$("form").append("<div class='alert alertSuccess'>Mensaje Enviado</div>");
	  } else {
	  	$("form").append("<div class='alert alertError'>Error al enviar el mensaje</div>");
	  }
	  res = "";
	}); 
}