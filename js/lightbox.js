$(document).ready(function(){
	$("img:not([unenlargeable])").click(function(){
//		html2canvas($("body"), {
//			onrendered: function(canvas){
//				$("#image-lightbox").append(canvas);
//				$("#image-lightbox canvas").attr("id", "canvas");
//				stackBlurCanvasRGB("canvas", 0, 0, $("#canvas").width(), $("#canvas").height(), 12);
//			}
//		});
		$("#image-lightbox img").attr("src", $(this).attr("src"));
		$("body").addClass("lightboxed");
	});
	
	$("#image-lightbox img").click(function(e){
		e.stopPropagation();
		return false;
	});
	
	$("#image-lightbox").click(function(){
		$("body").removeClass("lightboxed");
	});
});