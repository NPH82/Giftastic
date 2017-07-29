$(document).ready(function(){

			$("#gif-submit").on("click", function(event){
				event.preventDefault();

			var searchTerm = $("#gif-entry").val();

			var apiKey = "e0bdabd1805e4798afae162920201534";
			var protocol = "https://";
			var domain = "api.giphy.com";
			var path = "/v1/gifs/search";
			var limit = 10;
			


			var url = protocol + domain + path + "?" + "api_key=" + apiKey + "&q=" + searchTerm + "&limit=" + limit;

			$.ajax ({
				url: url,
				method: "GET"
			}).done(function(response) {

				displaySearch(response);
			});
		});

		function displaySearch(response){
			var returnedItems = (response).data;

				for(var i=0; i < returnedItems.length; i++) {
					var itemLimit = returnedItems[i].images.fixed_height_still.url;
					var rating = returnedItems[i].rating;

					$("#gif-list").append("<li><img src=" + itemLimit + "></img></li>");
					$("#gif-list").append("<li>" + rating + "</li");
				}
			}


	});