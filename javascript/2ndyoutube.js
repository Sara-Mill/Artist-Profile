//Write the function using jQuery
$(document).ready(function() {

    var API_KEY= "AIzaSyCcHAR_B8YZIieZPmgHgV5vu93C_Hh9sFU";

    var video = ""


    //Make a Get Request by targeting the search form
    $(".button").click(function(event) {
            event.preventDefault()

            //Extracting the value of user input and storing it inside search variable
            var search = $("#inputArtist").val()

            //This will pass through the api key + the user input from search, and display 5 videos
            videoSearch(API_KEY,search, 4)

    })

    //Recieve the values
    function videoSearch(key, search, maxResults) {

        //Clear out old data when you make a new request
        $("#videos1").empty()

        //Make Get Request to the API endpoint
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&videoEmbeddable=true&videoSyndicated=true&maxResults=" + maxResults + "&q=" + search,function(data){
            console.log(data)

            data.items.forEach(item => {
                //The backtick symbol(`) allows you to write multiple lines of html code
                video = `
                
                <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `

                //Add video element to our videos1 div
                $("#videos1").append(video)
        });

        });
    };   

});