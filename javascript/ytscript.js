var apikey= "AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI"
var execute = document.getElementById('execute')
var setApiKey= ("");
var searchArtist=("");
var button= document.querySelector(".button");
var videosEl=document.getElementById("videos")
 

function getApi() {
  var requestUrl= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=' + searchArtist + 'mostPopular&regionCode=US&key=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI';
  var response = "";
  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(data.items.length)
    for (var i =0; i <data.items.length; i++) {
      console.log(i)
      var videos1 = document.createElement('li');
      videos1.textContent = data.items[i].snippet.title;
      console.log(videos1)
      console.log(videosEl)
      videosEl.appendChild(videos1)
    }
  });console.log(response)
}
execute.addEventListener('click', getApi);
