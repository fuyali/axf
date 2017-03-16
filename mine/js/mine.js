define(['text!/mine/mine.html'],function(mine){
	var init = function(){
		$('#container').html(mine)
	}
	
	return {
		init : init
	}
})
