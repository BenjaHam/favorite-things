$(document).ready(function() {
  $("form#favorite-things").submit(function() {

  //stores inputs in variables
  var allTheThings = [];
  allTheThings[0] = $("input#iceCreamFlavor").val();
  allTheThings[1] = $("input#color").val();
  allTheThings[2] = $("input#movie").val();
  allTheThings[3] = $("input#beverage").val();
  console.log(allTheThings);

  // $("li").append(allTheThings)

  $("li#part1").text(allTheThings[0]);
  $("li#part2").text(allTheThings[1]);
  $("li#part3").text(allTheThings[2]);
  $("li#part4").text(allTheThings[3]);


  // alert("you've made it");
  event.preventDefault();
  });
});
