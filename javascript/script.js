
var buttonEl = document.getElementById("searchbutton");
var button = document.querySelector(".button");
var searchedArtist = document.querySelector("#searchedArtist");
var button= document.querySelector(".button");
var searchedArtistEl = document.querySelector("#searchedArtist");
var searchField=document.getElementById("inputArtist");
var msgDiv = document.querySelector("#msg");
var deezerData =document.getElementById("deezerdata");

//button function to search artist
button.addEventListener("click", function(event){
event.preventDefault();

var artist = document.querySelector(".artist").value;

  localStorage.setItem("artist", artist);

displayLastSearch();
});

function displayLastSearch() {
    var artist = localStorage.getItem("artist");

   searchedArtistEl.textContent = artist;
    console.log(artist);
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39199c42cbmshb55e136036913e3p103af6jsn4756f3c15e5c',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
var getData = () =>{
	var userInput = input.value
	console.log(userInput)
	
} 
function fetchArtist(event){
	event.preventDefault();
	
	var searchTerm=searchField.value
	
	let artistUrl=`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`
	fetch(artistUrl, options)
	.then(function(res){
		return res.json()


	}).then (function (data){
		if(data){
			console.log(data)
			
			deezerData.append(JSON.stringify(data.data[0].artist.name + ";" + " Album:  " + data.data[0].album.title + "; Title Track: " + data.data[0].title))
		}else{
			alert("no artist found")
		}
	})
	control.append(userInput, artistUrl);
}
buttonEl.addEventListener('click', fetchArtist)



