//casos e exito img hover
$(document).ready(function(){
	$('.tipo-de-seguro img').mouseenter(function(){
		var img_src =$(this).data('src');
		$(this).attr('src',img_src);
	})
	
	$('.tipo-de-seguro img').mouseout(function(){
		var img_src =$(this).data('first-src');
		$(this).attr('src',img_src);	
	})
});