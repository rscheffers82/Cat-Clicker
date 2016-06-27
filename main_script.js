// Javascript
$( document ).ready(function() {
});

var CatCollection = function(){
	var clicks = 0;
	var cats = [{
		name : 'Maine Coon',
		url: 'http://www.pethealthnetwork.com/sites/default/files/maine-coon-cat-484757920.jpg',
		clicks: 0
	},
	{
		name: 'Zoki smart kitty',
		url: 'https://image.freepik.com/free-photo/small-cat-cat-picture-material_38-4248.jpg',
		clicks: 0
	},
	{
		name: 'Grumpy Cat is not amused',
		url: 'http://cdn.images.express.co.uk/img/dynamic/80/590x/Grumpy-Cat-on-bed-544409.jpg',
		clicks: 0
	},
	{
		name: 'Black cat brings you luck',
		url: 'http://www.catster.com/wp-content/uploads/2015/06/600px-black-cat-in-meadow.jpg',
		clicks: 0
	},
	{
		name: 'Love the snow cat',
		url: 'http://taildom.com/blog/wp-content/uploads/2012/02/cat-snow.jpg',
		clicks: 0
	}];

	this.displayList = function(){
		/*
		image
		place in the array
		*/
		html = '';
		for ( x = 0; x < cats.length; x++ ) {
			html += '<img class="list-item" id="' + x + '" src="' + cats[x].url + '">';
		}
		$('#catList').html(html);
	}
	this.displayCat = function(c){
		var html = '';
			html += '<div class="catName">' + cats[c].name + '</div>';
			html += '<img class="catImage" id="' + c + '" src="' + cats[c].url + '" alt="' + cats[c].name + '">';
			html += '<div class="catClicks">' + cats[c].clicks + '</div>';
		$('#catContainer').html(html);

	}

	this.catClicked = function(catId){
		console.log('within clicked');
		cats[catId].clicks++;
		console.log(cats[catId].clicks);
		$('.catClicks').text(cats[catId].clicks);
	}
}

var catCol = new CatCollection();
catCol.displayList();

// used for displaying the clicked cat in the list 
$('.list-item').click(function(e){
	//console.log(e);
	var chosenOne = e.target.id;
	catCol.displayCat(chosenOne);
});

// used for handling the clicked cat in the main display
$('#catContainer').on('click', function(e){
	console.log('display cat clicked');
	var catId = e.target.id;
	catCol.catClicked(catId);
});