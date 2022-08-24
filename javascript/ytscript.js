//var apikey=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI
var execute = document.getElementById('execute')

function getApi() {
  var requestUrl= 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI';

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
execute.addEventListener('click', getApi);

function searchByKeyword() {
  var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

  for(var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  }
}