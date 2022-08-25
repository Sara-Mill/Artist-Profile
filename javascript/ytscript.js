<<<<<<< HEAD
//var apikey=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI
var search = document.getElementById('search')

function getApi() {
  var requestUrl= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI';

=======
var apikey= "AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI"
var execute = document.getElementById('execute')



/*function getApi() {
  var requestUrl= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI';
  var response = "";
>>>>>>> 211a52d34a7e0df6a2fba54afe5cc99ea1286c5e
  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    for (var i =0; i <data.length; i++) {
      var videos1 = document.createElement('p');
      videos1.textContent = data[i].title;
    }
  });
}
<<<<<<< HEAD
search.addEventListener('click', getApi);

  /*$.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Response \n-----------');
    console.log(response)
  });
};
*/
=======
execute.addEventListener('click', getApi);

 /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function loadClient() {
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
  loadClient
>>>>>>> 211a52d34a7e0df6a2fba54afe5cc99ea1286c5e
