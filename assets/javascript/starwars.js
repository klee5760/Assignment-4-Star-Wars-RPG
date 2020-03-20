
$(document).ready(function() {
 
  var characters = {
    
    "Han Solo":{
    name: "Han Solo", 
    imgUrl: "./assets/img/hanssolo.jpg",
    attack: 15,
    health: 300,
    enemyCounter: 20
},

    "Luke Skywalker":{
    name: "Luke Skywalker",  
    imgUrl: "./assets/img/lukeskywalker.jpg",
    attack: 25,
    health: 250,
    enemyCounter: 15
},

    "Master Yoda":{
    name: "Master Yoda",  
    imgUrl: "./assets/img/masteryoda.jpg",
    attack: 40,
    health: 150,
    enemyCounter: 30
},

    "Obi Wan Kenobi":{
    name: "Obi Wan Kenobi", 
    imgUrl: "./assets/img/obi-wankenobi.jpg",
    attack: 20,
    health: 200,
    enemyCounter: 25
}
};

var attacker;

var combatants = [];

var defender;

var turnCounter = 1;

var defeatCount = 0;


var renderCharacter = function(character, renderArea) {

  var charDiv = $("div class = 'character' data name='" + character.name + "'>");

  var charName = $("<div class = 'character-name'>").text(character.name);

  var charImage = $("<img alt = 'image' class = 'character-image'>").attr("src",character.imgUrl);

  var charHealth = $("<div class = 'character-health'>").text(character.health);

  charDiv.append(charName).append(charImage).append(charHealth);

  $(renderArea).append(charDiv);

};

var initializeGame = function() {

  for (var key in characters) {

    renderCharacter(characters[key], "#character-section");
  }
};

initializeGame();

var updateCharacter = function(charObj, areaRender) {

  $(areaRender).empty();
  renderCharacter(charObj, areaRender);
};

var renderEnemies = function(enemyArr) {
  for (var i =0; i <enemyArr[i].length; i++) {
    renderCharacter(enemyArr[i], "#available-to-attack-section");

  }
};

var renderMessage = function(message) {

  var gameMessageSet = $("#game-message");
  var newMessage = $("<div>").text(message);
  gameMessageSet.append(newMessage);
};

var restartGame = function(resultMessage) {

  var restart = $("<button>Restart</buttons>").click(function() {
    location.reload();
  });

  var gameState = $("<div>").text(resultMessage);

  $("body").append(gameState);
  $("body").append(restart);

  var clearMessage = function() {
    var gameMessage = $("#game-message");

    gameMessage.text("");
  }
};

$("#characters-section").on("click", "character", function(){

  var name = $(this).attr("data-name");

  if (!attacker) {

    attacker = characters[name];
    for (var key in characters) {

      if (key !==name) {
        combatants.push(characters[key]);
      }
    }

    $("#characters-section").hide();

    updateCharacter(attacker, "#selected-character");
    renderEnemies(combatants);
  }
});

$("#available-to-attack-section").on("click","character",function(){

  var name = $(this).attr("data-name");

  if($("#defender").children().length===0) {
    defender = character[name];
    updateCharacter(defender,"#defender");

    $(this).remove();
    clearMessage();
  }
});

$("attackbtn").on("click",function(){

  if($("#defender").children().length !==0) {

    var attackMessage = "You attacked" + defender.name + "for" +attacker.attack *turnCounter + "damage.";
    var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyCounter + " damage.";
    clearMessage();

    defender.health -= attacker.attack * turnCounter;

    
    if (defender.health > 0) {
      
      updateCharacter(defender, "#defender");

     
      renderMessage(attackMessage);
      renderMessage(counterAttackMessage);

      
      attacker.health -= defender.enemyCounter;

      updateCharacter(attacker, "#selected-character");
  }

  if (attacker.health <= 0) {

    clearMessage();

    restartGame("You are defeated! You need more training!")

    $("#attack-button").off("click");
  }

  else {

    $("#defender").empty();

    var gameStateMessage = "You defeated" + defender.name + ", choose your training next opponent";

    renderMessage(gameStateMessage);

    defeatCount++

    if (defeatCount >= combatants.length) {

      clearMessage();

      $("#attackbtn").off("click");

      restartGame("Congratulations! You are the ture Jedi hero!");

    }

}

     turnCounter++;
  }  

    else{

  clearMessage();
  renderMessage("No training opponents here!");
}
});

});
