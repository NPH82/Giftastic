var farmAnimals = ["Pig", "Cow", "Chicken", "Horse", "Goat", "Sheep", "Turkey", "Rooster", "Duck", "Dog"];

$(document).ready(function() {

    

    // $("#addAnimal").on("click", function(event) {
    //     event.preventDefault();


    function showFarmAnimals(){
        //var searchTerm = $("#farmAnimalEntry").val();
        var searchTerm = $(this).attr("data-name");

        var apiKey = "ae0b9e17b4d84cb8bdff9a172d556c2c";
        var limit = 10;

        var url = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + apiKey + "&q=" + searchTerm + "&limit=" + limit;
        console.log(searchTerm);


        $.ajax({
            url: url,
            method: "GET"
        }).done(function(response) {

            displaySearch(response);
            createButton()
        });
    }

       

    function createButton() {
        // $("#buttonArea").empty();
        for (var i = 0; i < farmAnimals.length; i++) {
            var createAnimal = $("<button>");
            createAnimal.addClass("newAnimal");
            createAnimal.attr("data-name", farmAnimals[i]);
            createAnimal.text(farmAnimals[i]);
            $("#buttonArea").append(createAnimal);
        }
    }


    function displaySearch(response) {
        var returnedItems = (response).data;

        for (var i = 0; i < returnedItems.length; i++) {
            var itemLimit = returnedItems[i].images.fixed_height_still.url;
            var rating = returnedItems[i].rating;

            $("#farmAnimallist").append("<li><img src=" + itemLimit + "></img></li>");
            $("#farmAnimallist").append("<li>" + rating + "</li");
        }
    }

     $("#addAnimal").on("click", function(event) {
         event.preventDefault();

        var anotherFarmAnimal = $("#farmAnimalEntry").val();
        farmAnimals.push(anotherFarmAnimal);
        console.log(farmAnimals);
        createButton();
     });
     
    $(document).on("click", ".newAnimal", showFarmAnimals);

createButton();
});