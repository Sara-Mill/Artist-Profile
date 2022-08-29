//Variables 
var button= document.querySelector(".button");
var searchedArtist = document.querySelector("#searchedArtist");
var msgDiv = document.querySelector("#msg");

//button function to search artist
button.addEventListener("click", function(event){
event.preventDefault();

//saves serched artist to local storage
var artist = document.querySelector(".artist").value;

  localStorage.setItem("artist", artist);

displayLastSearch();
});

//Displays last serched artist name
function displayLastSearch() {
    var artist = localStorage.getItem("artist");

   searchedArtist.textContent = artist;
    console.log(artist);
}

