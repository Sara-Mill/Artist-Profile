var buttonEl = document.getElementById("searchbutton");
var button= document.querySelector(".button");
var searchedArtist = document.querySelector("#searchedArtist");

//button function to search artist
button.addEventListener("click", function(event){
event.preventDefault();

var artist = document.querySelector(".artist").value;

  localStorage.setItem("artist", artist);
  console.log(artist)

displayLastSearch();
});

function displayLastSearch() {
    var artist = localStorage.getItem("artist");

   searchedArtist.textContent = artist;
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0a5799d28msh34be151581c8ca3p122bbejsn6bc36006be7a',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};
function apicall(event) {
    event.preventDefault()
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}
var getData = () =>{
	var userInput = input.value
	console.log(userInput)
	
}
function fetchArtist(search){
	let artistUrl=`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`
	fetch(artistUrl)
	.then(function(res){
		return res.json()


	}).then (function (data){
		if(!data){
			alert("no artist found")
		}else{
			console.log(data)
		}
	})
}
buttonEl.addEventListener('click', apicall)
var buttonEl = document.getElementById(".searchbutton");
var searchedArtist = document.querySelector("#searchedArtist");
var button= document.querySelector(".button");
var searchedArtistEl = document.querySelector("#searchedArtist");
var searchField=document.getElementById("inputArtist");

var msgDiv = document.querySelector("#msg");

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
function apicall(event) {
    event.preventDefault()
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputArtist}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	console.log("test");

}
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
		if(!data){
			alert("no artist found")
		}else{
			console.log(data)
		}
	})
	control.append(userInput, artistUrl);
}

buttonEl.addEventListener('click', apicall)
buttonEl.addEventListener('click', fetchArtist)
fetchArtist()

