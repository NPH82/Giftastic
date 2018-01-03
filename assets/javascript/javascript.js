var topics = ["Pig", "Cow", "Chicken", "Horse", "Goat", "Sheep", "Turkey", "Rooster", "Duck", "Dog"];

$(document).ready(function() {
       	// links the GET request 
       	function displayFarmAnimal() {
       		var farmAnimal = $(this).attr("data-name");
       		 		apiKey = "ae0b9e17b4d84cb8bdff9a172d556c2c";
       		 		limit = 10;
       			 	URL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + farmAnimal + "&limit=" + limit;
       	 	
						$.ajax({
       	 		url: URL,
       			method: "GET"
       	 	}).done(function(response) {

						var returnedItems = (response).data;
						$("#farmAnimalOutput").empty();

						//create div for images
       			var animalDiv = $("<div class='farmImages'>");

        		for (var i = 0; i < returnedItems.length; i++) {
            var imgStill = returnedItems[i].images.fixed_height_still.url;
            		imageMoving = returnedItems[i].images.fixed_height.url;
            		// creating images
            		image = $("<img class='gif' src='" + imgStill + "'>").attr({
            				"data-still": imgStill,
            				"data-animate": imageMoving,
            				"data-state": "still",
            			});

            		animalDiv.append(image);

       		 	}
       		 	pauseImage();
       	 });

       	}



       		//creates button out of array
       	function createButtons() {

       		$("#buttonArea").empty();

       		for(var i=0; i < topics.length; i++){
       			var btn = $("<button>");
       			btn.addClass("farmAnimals");
       			btn.attr("data-name", topics[i]);
       			btn.text(topics[i]);
       			$("#buttonArea").append(btn);
       		};
       	};

       		//adds new Farm Animals
				$("#addAnimal").on("click", function(event){
       	 	event.preventDefault();
       	 	var anotherFarmAnimal = $("#farmAnimalEntry").val().trim();
       	 	topics.push(anotherFarmAnimal);
       	 	createButtons();
       	 });

				//toggles still to moving
				function pauseImage() {
					$(".gif").on("click", function(){
						//event.preventDefault();

						var state = $(this).attr("data-state");

						
						if(state == "still") {
							$(this).attr("src", $(this).attr("data-animate"));
							$(this).attr("data-state", "animate");
							console.log(state)
							return true;
						} else {
							$(this).attr("src", $(this).attr("data-still"));
							$(this).attr("data-state", "still");
							console.log("no it's this one")
						}

						
					});

				}



				$(document).on("click", ".farmAnimals", displayFarmAnimal);
				createButtons();

});