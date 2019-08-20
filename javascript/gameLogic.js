$(document).ready(function() {
  var beerus = $("#beerus");
  var cell = $("#cell");
  var vegeta = $("#vegeta");
  var goku = $("#goku");

  $("#goku").on("click", function() {
    beerus.remove();
    cell.remove();
    vegeta.remove();
    $("#row2").append(beerus);
    $("#row2").append(cell);
    $("#row2").append(vegeta);
  });

  $("#beerus").on("click", function() {
    goku.remove();
    cell.remove();
    vegeta.remove();
    $("#row2").append(goku);
    $("#row2").append(cell);
    $("#row2").append(vegeta);
  });

  $("#cell").on("click", function() {
    goku.remove();
    beerus.remove();
    vegeta.remove();
    $("#row2").append(beerus);
    $("#row2").append(goku);
    $("#row2").append(vegeta);
  });

  $("#vegeta").on("click", function() {
    goku.remove();
    cell.remove();
    beerus.remove();
    $("#row2").append(beerus);
    $("#row2").append(cell);
    $("#row2").append(goku);
  });
});
