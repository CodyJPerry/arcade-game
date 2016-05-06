// Defines getRandom Function
var getRandom = function () {
    return Math.random();
};

 /* var Gem = function () {
    this.x = Math.floor(Math.random() * 400) + 1;
    this.y = Math.floor(Math.random() * 4) * 83;
    this.sprite = 'images/blue-gem.png';
};

Gem.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Gem.prototype.update = function() {
    if (player.y === this.y && player.x === this.x) { // Player grabs the gem
        gemCount++;
        this.itemReset();
    }
}; 


var posY = [45, 130, 215, 300, 385],
    posX = [0, 100, 200, 300, 400, 500];

Gem.prototype.itemReset = function() {
    // Resets the item on the map where player can grab it
    this.x = posX[Math.floor(Math.random() * 5)];
    this.y = posY[Math.floor(Math.random() * 3)];
};
*/
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    speed = 15 * getRandom();
    if (this.x < 450) {
        //  Providing variable speed to enemy, so all enemies
        //  run at different speed
        this.x = this.x + dt * speed * 15;
    }
    // if enemy goes out, bring it back to start of canvas
    else {
        this.x = 0;
    }
    this.y = this.y;
    // Collision Conditional
    if (player.x + 80 >= this.x && player.x <= this.x + 70 && 
      player.y + 50 <= this.y + 100 && player.y + 100 >= this.y + 50) {
      player.resetPosition(); // reset Function
  }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Defining Player Class
var Player = function() {
    this.x = 200;
    this.y = 420;
    this.sprite = 'images/char-boy.png';
};

// Player Class update function
Player.prototype.update = function() {
    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y < 10) {
        this.y = -10;
        this.resetPosition();
    } else if (this.y > 420) {
        this.y = 420;
    }
};

// Draws the Sprite to the page
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var player = new Player(200, 420);
// This class requires an update(), render() and
// a handleInput() method.

// Handles input for player with a switch statement
Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'left':
        if (this.x === 0) {
            this.x = 0;
        }
        else {
            this.x -= 50;
        }
        break;

        case 'right':
        if (this.x === 400) {
            this.x = 400;
        }
        else {
            this.x += 50;
        }
        break;

        case 'up':
        if (this.y === 100) {
            this.y = 100;
        }
        else {
            this.y -= 28;
        }
        break;

        case 'down':
        if (this.y === -83) {
            this.y = -83;
        }
        else {
            this.y += 30;
        }
        break;
    }
};

// reset 
Player.prototype.resetPosition = function () {
  this.x = 200; // X Position
  this.y = 420; // Y Position
};

// for loop adds 4 enemies and pushes them into the allEnemies array
var allEnemies = [];

for (var i = 0; i < 4; i++) {
    allEnemies.push(new Enemy(-50, 50 + (90 * i), Math.random()));
}

/* var gem = new Gem(); */

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
