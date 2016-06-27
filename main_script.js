// Javascript
$( document ).ready(function() {
});

var CatCollection = function(){
	var clicks = 0;
	var cats = [{
		name : 'Maine Coon',
		url: 'http://www.pethealthnetwork.com/sites/default/files/maine-coon-cat-484757920.jpg'
	},
	{
		name: 'Zoki smart kitty',
		url: 'https://image.freepik.com/free-photo/small-cat-cat-picture-material_38-4248.jpg'
	}];

	this.display = function(){
		var html = '';
		for (x = 0; x < cats.length; x++ ) {
		html += '<div class="catContainer">';
				html += '<div class="catName">' + cats[x].name + '</div>';
				html += '<img class="catImage" src="' + cats[x].url + '"alt="' + cats[x].name + '">';
		html += '</div>';
		}
		$('#cats').append(html);
	}

	this.clicked = function(){
		console.log('within clicked');
		clicks++;
		console.log(clicks);
		$('#clicks').text(clicks);
	}

}

var catCol = new CatCollection();
catCol.display();


$('.catImage').click(function(){
	catCol.clicked();
	/*var num = $('#clicks').text();
	num = Number(num);
	num++;
	$('#clicks').text(num);*/
});