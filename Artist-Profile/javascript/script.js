var searchBar = document.getElementById("searchBar");
var bioInfo = document.getElementById("bioInfo");

function getApi() {
   var requestURL = "https://www.mediawiki.org/w/api.php";

   fetch(requestURL) 
   .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i=0; i< data.length; i++) {

        }
    })
   }


