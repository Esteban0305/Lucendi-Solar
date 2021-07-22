let Slides = [
	"src/Slide 1.jpeg",
	"src/Slide 2.jpeg",
	"src/Slide 3.jpeg"
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
			console.log(px);
		}, 600);
	},5000);
});