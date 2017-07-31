var farmAnimals = ["Pig", "Cow", "Chicken", "Horse", "Goat", "Sheep", "Turkey", "Rooster", "Duck", "Dog"];
$(document).ready(function() {

    
	// function showButtonAnimals(){
 //     $(".newAnimal").on("click", function(event) {
 //        //event.preventDefault();

 //        var farmAnimals = ["Pig", "Cow", "Chicken", "Horse", "Goat", "Sheep", "Turkey", "Rooster", "Duck", "Dog"];
 //        for (var i = 0; i < farmAnimals.length; i++)  {
 //        	//var farmAnimals = document.getElementsByClassName("newAnimal")[i].name;
 //        	if(this === farmAnimals) {
 //       			$("#farmAnimalEntry").val(this) ;
 //       			return farmAnimals[i];
 //        	}
 //       		console.log(document.getElementsByClassName("newAnimal")[i].name);
 //       		console.log(farmAnimals[i]);
 //    	}
 //    	console.log("#farmAnimalEntry");
 //        showFarmAnimals();
 //    	});
 //    };


    function showFarmAnimals(){

        var searchAnimal= $("#farmAnimalEntry").val();
        //var searchTerm = $("#buttonArea").attr("data-name");

        var apiKey = "ae0b9e17b4d84cb8bdff9a172d556c2c";
        var limit = 10;

        var url = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + apiKey + "&q=" + searchAnimal + "&limit=" + limit;

        
        console.log(searchAnimal);


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
            createAnimal.attr("name", farmAnimals[i]);
            createAnimal.text(farmAnimals[i]);
            $("#buttonArea").append(createAnimal);
        }
        console.log("createButton")
    }


    function displaySearch(response) {
        var returnedItems = (response).data;

        $("#farmAnimallist").empty();

        for (var i = 0; i < returnedItems.length; i++) {
            var itemStill = returnedItems[i].images.fixed_height_still.url;
            var itemMoving = returnedItems[i].images.fixed_height.url;
            var rating = returnedItems[i].rating;

            $("#farmAnimallist").append("<li><img src=" + itemStill + "></img></li>");
            $("#farmAnimallist").append("<li><img src=" + itemMoving + "></img></li>");
            $("#farmAnimallist").append("<li>" + rating + "</li");
            console.log("displaysearch")
        }
    }

     $("button").on("click", function(event) {
         event.preventDefault();

        //$("#farmAnimallist").empty();
        var	newFarmAnimal = $("#farmAnimalEntry").val();
        farmAnimals.push(newFarmAnimal);
        //console.log working here
        console.log(farmAnimals);
        createButton();
        showFarmAnimals();
        console.log("add Animal Button")
     });

 

    $(document).on("click", "#buttonArea", displaySearch);

createButton();
});