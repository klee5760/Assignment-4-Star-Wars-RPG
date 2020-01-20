console.log(characters);
var charBox = $("#chooseCharBox");

$(document).ready(function() {
  for (var i = 0; i < characters.length; i++) {
    console.log(characters[i]);
    var div = $("<div>")
      .addClass(".char-div")
      .attr("data-char", characters[i].name)
      .on("click", click);
    var img = $("<img>")
      .addClass("char-img")
      .attr("src", characters[i].img);
    var name = $("<p>").text(characters[i].name);
    div.append(img, name);
    charBox.append(div);
  }

  var charchoose = true;
  var countdefeated = 0;

  var lukecount = 0;
  var hanscount = 0;
  var obicount = 0;
  var yodacount = 0;
});

function click() {
  var selected = $(this).attr("data-char");
  for (var i = 0; i < characters.length; i++) {
    if (characters[i].name === selected) {
      var character = characters[i];
    }
  }
  console.log(character);
}

$(".char1").on("click", function() {
  if (char1Count === true) {
    $(this).addClass("main");
    lukecount++;

    char1Count = false;

    $(".char2")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char2").css({ "margin-left": "40px" });

    $(".char3")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char3").css({ "margin-left": "40px" });

    $(".char4")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char4").css({ "margin-left": "40px" });

    $("starImage").css({
      width: "100px",
      height: "100px",
      "margin-left": "auto",
      "maring-right": "auto",
      display: "block"
    });
  } else if (char1Count === false && lukecount === 0) {
    $("char1")
      .appenedTo(".defender")
      .addClass("def")
      .css({ "background-color": "green" });
    $("char1 p").css({ "margin-left": "40px" });
  }
});

$(".char2").on("click", function() {
  if (char2Count === true) {
    $(this).addClass("main");
    hanscount++;

    char2Count = false;

    $(".char1")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char1").css({ "margin-left": "40px" });

    $(".char3")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char3").css({ "margin-left": "40px" });

    $(".char4")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char4").css({ "margin-left": "40px" });

    $("starImage").css({
      width: "100px",
      height: "100px",
      "margin-left": "auto",
      "maring-right": "auto",
      display: "block"
    });
  } else if (char2Count === false && hanscount === 0) {
    $("char1")
      .appenedTo(".defender")
      .addClass("def")
      .css({ "background-color": "green" });
    $("char1 p").css({ "margin-left": "40px" });
  }

  $("char2")
    .appenedTo(".defender")
    .addClass("def")
    .css({ "background-color": "green" });
  $("char2 p").css({ "margin-left": "40px" });
});

$(".char3").on("click", function() {
  if (char3Count === true) {
    $(this).addClass("main");
    obicount++;

    char3Count = false;

    $(".char1")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char1").css({ "margin-left": "40px" });

    $(".char2")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char2").css({ "margin-left": "40px" });

    $(".char4")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char4").css({ "margin-left": "40px" });

    $("starImage").css({
      width: "100px",
      height: "100px",
      "margin-left": "auto",
      "maring-right": "auto",
      display: "block"
    });
  } else if (char3Count === false && obicount === 0) {
    $("char3")
      .appenedTo(".defender")
      .addClass("def")
      .css({ "background-color": "green" });
    $("char3 p").css({ "margin-left": "40px" });
  }
});

$(".char3").on("click", function() {
  if (char3Count === true) {
    $(this).addClass("main");
    obicount++;

    char3Count = false;

    $(".char1")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char1").css({ "margin-left": "40px" });

    $(".char2")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char2").css({ "margin-left": "40px" });

    $(".char4")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char4").css({ "margin-left": "40px" });

    $("starImage").css({
      width: "100px",
      height: "100px",
      "margin-left": "auto",
      "maring-right": "auto",
      display: "block"
    });
  } else if (char3Count === false && obicount === 0) {
    $("char3")
      .appenedTo(".defender")
      .addClass("def")
      .css({ "background-color": "green" });
    $("char3 p").css({ "margin-left": "40px" });
  }
});

$(".char4").on("click", function() {
  if (char4Count === true) {
    $(this).addClass("main");
    yodacount++;

    char4Count = false;

    $(".char1")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char1").css({ "margin-left": "40px" });

    $(".char2")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char2").css({ "margin-left": "40px" });

    $(".char3")
      .appenedTo(".opponentBox")
      .css({ height: "200px", width: "200px", "background-color": "blue" });
    $("char3").css({ "margin-left": "40px" });

    $("starImage").css({
      width: "100px",
      height: "100px",
      "margin-left": "auto",
      "maring-right": "auto",
      display: "block"
    });
  } else if (char4Count === false && yodacount === 0) {
    $("char4")
      .appenedTo(".defender")
      .addClass("def")
      .css({ "background-color": "green" });
    $("char4 p").css({ "margin-left": "40px" });
  }
});

$("attack").on("click", function() {
  var charName = $(".def").attr("characterName");

  var healthMain = $(".main").attr("health");

  var attackMain = $(".main").attr("attack");

  var healthDefender = $(".def").attr("health");

  var counterAttack = $(".def").attr("counterAttack");

  var healthMainAfter = healthMain - counterAttack;

  var healthDefAfter = healthMain - attackMain;

  var healthMain1 = $(".main").attr(".health", healthMainAfter);

  var healthDef1 = $(".def").attr(".health", healthDefAfter);

  $(".main p").html($(".main").attr("health"));

  $(".def p").html($(".def").attr("health"));

  $(".defender")
    .html(
      "<p>" +
        "You attacked" +
        charName +
        "for" +
        attackMain +
        "damage" +
        charName +
        "attacked you back for" +
        counterAttack +
        "</p>"
    )
    .css({ "font size": "20px", "text-align": "center" });

  attackMain = attackMain * 2;

  var attackMain1 = $(".main").attr("attack", attackMain);

  if (healthMainAfter <= 0) {
    $(".defender")
      .html("<p>" + "You have been defeated. You need more training" + "</p>")
      .css({ "font-size": "20px" });

    $(".attack").off("click");
  } else if (healthDefAfter <= 0) {
    $(".def").remove();
    $(".defender")
      .html(
        "<p>" +
          "You have defeated " +
          charName +
          "choose another opponent to battle" +
          "</P>"
      )
      .css({ "font-size": "20px" });

    countdefeated++;

    if (countdefeated === 3) {
      $(".defender")
        .html("<p>" + "CONGRATULATIONS! YOU ARE AN ACE OF JEDI!" + "</p>")
        .css({ "font-size": "50px" });
      console.log("count after****" + countDefeated);

      $(".attack").off("click");
    }
  }
});
