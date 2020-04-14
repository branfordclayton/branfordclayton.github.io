var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE



function createSawBlade(x,y) {
    var hitZoneSize = 25;
var damageFromObstacle = 10;
var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);

var obstacleImage = draw.bitmap('img/sawblade.png');
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
}
  //createSawBlade(400,groundY-10);
  //createSawBlade(800,groundY-100);
  //createSawBlade(900,groundY-10);
  
  for (var i = 0; i < levelData.gameItems; i++) {
      var eachElement = levelData.gameItems[i];
      
      //createSawBlade(eachElement.x, eachElement.y);
  }
     function createMyObstacle(x,y) {
        var hitZoneSize = 80;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        
        var obstacleImage = draw.bitmap('img/astroid1.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -90;
        obstacleImage.y = -90;
     
     
  }
  
  createMyObstacle(300,groundY - 150);
  createMyObstacle(1300,groundY - 150);
  createMyObstacle(1800,groundY - 150);
  createMyObstacle(2300,groundY - 150);
  
  
  
  function createEnemy(x,y) {
        var enemy = game.createGameItem('enemy', 25);
      var redSquare = draw.bitmap('img/Spider.png');
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      
      enemy.x = x;
      enemy.y = y;
      
      game.addGameItem(enemy);
      
      enemy.velocityX = -1;
      enemy.rotationalVelocity = 10;
      
      enemy.onPlayerCollision = function() {
          console.log('The enemy has hit Halle')
          game.changeIntegrity(-10);
      };
      
      enemy.onProjectileCollision = function() {
          game.increaseScore(100);
          enemy.shrink()
      }
  }
  createEnemy(400,groundY-50);
  createEnemy(800,groundY-50);
  createEnemy(1200,groundY-50);
  
  function createReward(x,y) {
      var reward = game.createGameItem('reward', 30);
      var trophy = draw.bitmap('img/Trophy.png');
      trophy.x = -30;
      trophy.y = -30;
      reward.addChild(trophy);
      
      reward.x = x;
      reward.y = y;
      
      game.addGameItem(reward);
      
      reward.velocityX = -1;
      
      reward.onPlayerCollision = function() {
          console.log('The reward has hit Halle')
          game.changeIntegrity(10);
          game.increaseScore(100);
          reward.fadeOut()
          
      };
      
      reward.onProjectileCollision = function() {
          
      };
      
  }
  
  createReward(500, groundY - 100);
  createReward(900, groundY - 100);
  createReward(1400, groundY - 100);
  
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
