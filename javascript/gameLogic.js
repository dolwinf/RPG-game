$(document).ready(function() {
	var beerus = $("#beerus");
	var cell = $("#cell");
	var vegeta = $("#vegeta");
	var goku = $("#goku");
	var row1 = $("#row1");

	var attackHit = 6;
	var health = 1000;
	var opponentAttack = 2;
	var opponentHealth = 1000;

	setInterval(checkRemainingPlayers, 900);

	function checkRemainingPlayers() {
		if ($(".card").length < 2) {
			$("#defender").html(
				"<h1 class='blink_me'>You defated all of them! You are the new DBZ <strong> king!</strong></h1>"
			);
		}
	}

	function counterAttack() {
		opponentHealth = opponentHealth - opponentAttack;
		opponentAttack = opponentAttack * 1.2;
		$("#attack").on("click", function() {
			$("#health")
				.find("#HP")
				.text(Math.floor(opponentHealth));
		});
	}

	function clearRow3() {
		$("#row3").empty();
		$("#row1")
			.find(".btn-warning")
			.remove();
	}

	function attack() {
		$("#attack").on("click", function() {
			console.log("clicked");
			var row3 = $("#row3");
			health = health - attackHit;
			attackHit = attackHit * 1.5;
			counterAttack();

			if (health < 1) {
				row3.find("#HP").text("Crushed to the ground.");
				setTimeout(clearRow3, 1000);
				if ($("#row2").children().length !== 0) {
					$("#defender").append(
						"<h1 class='blink_me'>You smashed it! Select a new <strong> defender</strong></h1>"
					);
				}
			} else {
				row3.find("#HP").text(Math.floor(health));
			}
		});
	}
	function addAttackButton() {
		if (row1.children().length == 0) {
			row1.append(attackButton);
			attack();
		}
	}

	var attackButton =
		"<button class='btn btn-primary' id='attack' style='margin-left:1%'>Attack</button>";

	$("#goku").on("click", function() {
		beerus.remove();
		cell.remove();
		vegeta.remove();
		$("h1").empty();
		$("h1").append("Select a defender!");

		$("#row2").append(
			beerus.on("click", function() {
				var row3 = $("#row3");
				if (row3.children().length == 0) {
					row3.append(beerus);
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
		$("h1").empty();
		$("h1").append("Select a defender!");
		$("#row2").append(
			goku.on("click", function() {
				var row3 = $("#row3");
				if (row3.children().length == 0) {
					row3.append(goku);
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
		$("h1").empty();
		$("h1").append("Select a defender!");

		$("#row2").append(
			beerus.on("click", function() {
				var row3 = $("#row3");
				if (row3.children().length == 0) {
					row3.append(beerus);
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
		$("h1").empty();
		$("h1").append("Select a defender!");
		$("#row2").append(
			beerus.on("click", function() {
				var row3 = $("#row3");
				if (row3.children().length == 0) {
					row3.append(beerus);
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
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
					addAttackButton();
					$("h1").empty();
					row1.append(
						"<button class='btn btn-warning' style='margin-left: 1%; cursor: default'>You're fighting <strong>Goku</strong></button>"
					);
				}
			})
		);
	});
});
