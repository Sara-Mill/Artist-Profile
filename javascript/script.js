var button= document.querySelector(".button");
var searchedArtist = document.querySelector("#searchedArtist");
var msgDiv = document.querySelector("#msg");

button.addEventListener("click", function(event){
event.preventDefault();

var artist = document.querySelector(".artist").value;

  localStorage.setItem("artist", artist);

renderLastSearch();
});


function renderLastSearch() {
    var artist = localStorage.getItem("artist");

   searchedArtist.textContent = artist;
    console.log(artist);
}

