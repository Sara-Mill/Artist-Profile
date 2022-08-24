//var apikey=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI
var search = document.getElementById('search')

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