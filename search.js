// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    // API call is made to gapi.client.youtube
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded.
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAgh7vf4Dk5USdUoQ8qYzGf3OZ7TU8P9Qo');
    
    // Add code here to test out showResponse():
    showResponse("Hooray! YouTube Responded with Snippets and Returned my Query!!");
    search();
}

function search(){
	var request = gapi.client.youtube.search.list({
		part: 'snippet',
        q: 'legal interpreting',
	});
	request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request
function onSearchResponse(response){
	showResponse(response);
}