
var requestUrl="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI&type=video&q=" +searchArtist;

//Write the function using jQuery
$(document).ready(function() {

    var API_KEY= "AIzaSyA5PA77ib11vqf_lRxL0Jl9iT6hANK59hI";

    //Make a Get Request by targeting the search form
    $("#form").submit(function(event) {
            event.preventDefault()
            alert("form is submitted")

            //Extracting the value of user input and storing it inside search variable
            var search = $("#search1").val()

            //This will pass through the api key, and the user input from search, and display 2 videos
            videoSearch(API_KEY,search, 2)

    })

    //Recieve the values
    function videoSearch(key, search, maxResults) {
    //Make Get Request to the API endpoint
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
            console.log(data)
        })
    }   

})