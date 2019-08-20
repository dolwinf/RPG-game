$(document).ready(function() {
  var beerus = $("#beerus");
  var cell = $("#cell");
  var vegeta = $("#vegeta");
  var goku = $("#goku");
  var row1 = $("#row1");

  $("#goku").on("click", function() {
    beerus.remove();
    cell.remove();
    vegeta.remove();
    $("#row2").append(
      beerus.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(beerus);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Beerus</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      cell.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(cell);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Cell</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      vegeta.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(vegeta);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Vegeta</strong></button>"
          );
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
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Goku</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      cell.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(cell);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Cell</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      vegeta.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(vegeta);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Vegeta</strong></button>"
          );
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
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Beerus</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      goku.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(goku);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Goku</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      vegeta.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(vegeta);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Vegeta</strong></button>"
          );
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
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Beerus</strong></button>"
          );
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
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Cell</strong></button>"
          );
        }
      })
    );

    $("#row2").append(
      goku.on("click", function() {
        var row3 = $("#row3");
        if (row3.children().length == 0) {
          row3.append(goku);
          row1.append(
            "<button class='btn btn-primary' style='margin-left:1%'>Attack</button>"
          );
          row1.append(
            "<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Goku</strong></button>"
          );
        }
      })
    );
  });
});
