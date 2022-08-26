var apikey= "AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI"
var execute = document.getElementById('execute')
var setApiKey= ("");
var searchArtist=("");
var button= document.querySelector(".button");
var videosEl=document.getElementById("videos")
 

 /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  
  /*function loadClient() {
    setApiKey="";

    gapi.client.setApiKey("YAIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 5,
      "q": "surfing"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  };*/

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

 /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  /*function loadClient() {
    gapi.client.setApiKey("AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 1
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
  loadClient*/