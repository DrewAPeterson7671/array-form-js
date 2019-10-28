$(function() {
  $('form').submit(function(event) {
    event.preventDefault();


    var favoriteArray = [];

    var favorite = $("#favorite").val();
    var favorite1 = $("#favorite1").val();
    var favorite2 = $("#favorite2").val();
    var favorite3 = $("#favorite3").val();

    favoriteArray.push(favorite);
    favoriteArray.push(favorite1);
    favoriteArray.push(favorite2);
    favoriteArray.push(favorite3);

//    console.log(favoriteArray);

  var secondArray = [$("#favorite").val(), $("#favorite1").val(), $("#favorite2").val(), $("#favorite3").val()];

$('#favoriteoutput').text(secondArray[0]);
$('#favorite1output').text(secondArray[1]);
$('#favorite2output').text(secondArray[2]);
$('#favorite3output').text(secondArray[3]);

var list = [];
var list1 = [];
var list2 = [];
var list3 = [];

list = '<li>' + secondArray[0] + '</li>';
list1 = '<li>' + secondArray[1] + '</li>';
list2 = '<li>' + secondArray[2] + '</li>';
list3 = '<li>' + secondArray[3] + '</li>';


$('#list').append(list);
$('#list').append(list1);
$('#list').append(list2);
$('#list').append(list3);

   $("#arrayFavorite").text(favoriteArray);
   $("#secondArray").text(secondArray);

  });
});
