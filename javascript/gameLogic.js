$(document).ready(function() {
  var beerus = $("#beerus");
  var cell = $("#cell");
  var vegeta = $("#vegeta");
  var goku = $("#goku");

  $("#goku").on("click", function() {
    beerus.remove();
    cell.remove();
    vegeta.remove();
    $("#row2").append(
      beerus.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(beerus);
        }
      })
    );
    // .on("click", function() {
    //   console.log("here");
    //   var row3 = $("#row3");
    //   if (row3.children().length == 0) {
    //     row3.append(beerus);
    //   }
    // });
    $("#row2").append(
      cell.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(cell);
        }
      })
    );

    $("#row2").append(
      vegeta.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(vegeta);
        }
      })
    );
  });

  $("#beerus").on("click", function() {
    goku.remove();
    cell.remove();
    vegeta.remove();
    $("#row2").append(
      goku.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(goku);
        }
      })
    );

    $("#row2").append(
      cell.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(cell);
        }
      })
    );

    $("#row2").append(
      vegeta.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(vegeta);
        }
      })
    );
  });

  $("#cell").on("click", function() {
    goku.remove();
    beerus.remove();
    vegeta.remove();
    $("#row2").append(
      beerus.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(beerus);
        }
      })
    );

    $("#row2").append(
      goku.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(goku);
        }
      })
    );

    $("#row2").append(
      vegeta.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(vegeta);
        }
      })
    );
  });

  $("#vegeta").on("click", function() {
    goku.remove();
    cell.remove();
    beerus.remove();
    $("#row2").append(
      beerus.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(beerus);
        }
      })
    );

    $("#row2").append(
      cell.on("click", function() {
        var row3 = $("#row3");
        console.log(row3.children().length);
        if (row3.children().length == 0) {
          console.log("Apending cell");
          row3.append(cell);
        }
      })
    );

    $("#row2").append(
      goku.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(goku);
        }
      })
    );
  });
});
