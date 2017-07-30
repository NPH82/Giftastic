var farmAnimals = ["Pig", "Cow", "Chicken", "Horse", "Goat", "Sheep", "Turkey", "Rooster", "Duck", "Dog"];
$(document).ready(function() {

    
	function showButtonAnimals(){
     $("#buttonArea").on("click", function(event) {
        //event.preventDefault();
        var farmAnimals = ["Pig", "Cow", "Chicken", "Horse", "Goat", "Sheep", "Turkey", "Rooster", "Duck", "Dog"];
        for (var i = 0; i < farmAnimals.length; i++)  {
       		var farmAnimals = $("#farmAnimalEntry").val() ;
       		console.log(farmAnimalEntry);
       		console.log(farmAnimals[i]);
    	}
    	console.log("#farmAnimalEntry");
        showFarmAnimals();
    	});
    };


    function showFarmAnimals(){
        var searchTerm = $("#farmAnimalEntry").val();
        //var searchTerm = $("#buttonArea").attr("data-name");

        var apiKey = "ae0b9e17b4d84cb8bdff9a172d556c2c";
        var limit = 10;

        var url = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + apiKey + "&q=" + searchTerm + "&limit=" + limit;
        console.log(searchTerm);


        $.ajax({
            url: url,
            method: "GET"
        }).done(function(response) {

            displaySearch(response);
            console.log("showFarmAnimals")
           // createButton()
        });
    }

       

    function createButton() {
         $("#buttonArea").empty();
        for (var i = 0; i < farmAnimals.length; i++) {
            var createAnimal = $("<button>");
            createAnimal.addClass("newAnimal");
            createAnimal.attr("data-name", farmAnimals[i]);
            createAnimal.text(farmAnimals[i]);
            $("#buttonArea").append(createAnimal);
        }
        console.log("createButton")
    }


    function displaySearch(response) {
        var returnedItems = (response).data;

        $("#farmAnimallist").empty();

        for (var i = 0; i < returnedItems.length; i++) {
            var itemLimit = returnedItems[i].images.fixed_height_still.url;
            var rating = returnedItems[i].rating;

            $("#farmAnimallist").append("<li><img src=" + itemLimit + "></img></li>");
            $("#farmAnimallist").append("<li>" + rating + "</li");
            console.log("displaysearch")
        }
    }

     $("#addAnimal").on("click", function(event) {
         event.preventDefault();

        //$("#farmAnimallist").empty();
        var anotherFarmAnimal = $("#farmAnimalEntry").val();
        farmAnimals.push(anotherFarmAnimal);
        //console.log working here
        console.log(farmAnimals);
        createButton();
        showFarmAnimals();
        console.log("add Animal Button")
     });

     // $("#buttonArea").on("click", function(){
     // 	$(document).getElementsByClassName("newAnimal");
     	
     // 	console.log("this click happens");
     // 	$("farmAnimalEntry").empty();
     // 	$("farmAnimalEntry").text(createAnimal);
     // 	//$("farmAnimalEntry").val()= farmAnimals[i];
     // 	displaySearch();
     // 	}
     // })

    $(document).on("click", "#buttonArea", showButtonAnimals);

createButton();
});