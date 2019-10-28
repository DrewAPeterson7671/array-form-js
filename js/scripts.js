$(function() {
  $('form').submit(function(event) {
    event.preventDefault();


    var favoriteArray = [];

    var secondArray = [$("#favorite").val(), $("#favorite1").val(), $("#favorite2").val(), $("#favorite3").val()];

//    console.log(secondArray);


    var favorite = $("#favorite").val();
    var favorite1 = $("#favorite1").val();
    var favorite2 = $("#favorite2").val();
    var favorite3 = $("#favorite3").val();

    favoriteArray.push(favorite);
    favoriteArray.push(favorite1);
    favoriteArray.push(favorite2);
    favoriteArray.push(favorite3);

//    console.log(favoriteArray);

$('#favoriteoutput').text(secondArray[0]);
$('#favorite1output').text(secondArray[1]);
$('#favorite2output').text(secondArray[2]);
$('#favorite3output').text(secondArray[3]);

    // $("#favorite1output").text(favorite1);
    // $("#favorite2output").text(favorite2);
    // $("#favorite3output").text(favorite3);
    // $("#favoriteoutput").text(favorite);

   $("#arrayFavorite").text(favoriteArray);
   $("#secondArray").text(secondArray);

  });
});
