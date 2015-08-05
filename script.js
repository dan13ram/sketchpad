String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}

$(document).ready(function(){
	var part1 = '<div class="row">';
	var div = '<div> </div>';
	var part2 = '</div><br>';
	for( i=0; i<10; i++){
		$('body').append(part1 + div.repeat(10) + part2);
	}

	var $box = $('.row div');
	$box.hover(function(){
		$(this).css("opacity","-=0.1");
	},
		function(){
		//$(this).css("background-color","blue");
		
	});

});
