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
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'enemy',x:400,y:groundY},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x,y){
        var hitZoneSize = 25;
        var damageFromObstacle = 100;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        myObstacle.rotationalVelocity = -10;
        }
        createSawBlade(500,groundY-105);
        createSawBlade(750,groundY-105);
        createSawBlade(1200,groundY-100);
        createSawBlade(1400,groundY-100);
        createSawBlade(1600,groundY-10);
        createSawBlade(2000,groundY-10);
        
    function createEnemy(x,y){       
        var enemy = game.createGameItem('enemy', 25);
        var redSquare = draw.rect(50,50,'red');
        var enemys = [];
        enemy.x= x;
        enemy.y = y;
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        game.addGameItem(enemy);
        enemy.velocityX = -10;
        enemy.rotationalVelocity = -20;
        enemy.onPlayerCollision = function(){
            console.log('The enemy has hit halle');
            game.changeIntegrity(-50);
            enemy.fadeOut();
        };
        enemy.onProjectileCollision = function(){
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            enemy.fadeOut();
        };
        }
        createEnemy(600,groundY-50);
        createEnemy(800,groundY-50);
        createEnemy(1400,groundY-50);
        createEnemy(1800,groundY-50);
        createEnemy(2000,groundY-50);
        
 function bonus(x,y){
           var bonus = game.createGameItem('point',25);
           var trophy = draw.bitmap('img/Trophy.png');
           trophy.scaleX = .05;
           trophy.scaleY = .05;
           trophy.x=-25;
           trophy.y=-65;
           bonus.x = x;
           bonus.y = y;
           bonus.addChild(trophy);
           game.addGameItem(bonus);
           bonus.velocityX = -1;
           bonus.onPlayerCollision = function() {
               console.log('The Trophy has hit halle!');
               game.increaseScore(9500);
               bonus.fadeOut();
           };
     }
     bonus(2000,groundY-1);
    };
    
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}