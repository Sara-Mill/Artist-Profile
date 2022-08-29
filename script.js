var buttonEl = document.getElementById("searchbutton");
console.log(buttonEl)
var button= document.querySelector(".button");
var searchedArtist = document.querySelector("#searchedArtist");
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

   searchedArtist.textContent = artist;
    console.log(artist);
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
