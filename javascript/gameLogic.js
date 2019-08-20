$("#goku").on("click", function() {
  $("#beerus").remove();
  $("#cell").remove();
  $("#vegeta").remove();
});

$("#beerus").on("click", function() {
  $("#goku").remove();
  $("#cell").remove();
  $("#vegeta").remove();
});

$("#cell").on("click", function() {
  $("#beerus").remove();
  $("#goku").remove();
  $("#vegeta").remove();
});

$("#vegeta").on("click", function() {
  $("#beerus").remove();
  $("#cell").remove();
  $("#goku").remove();
});
