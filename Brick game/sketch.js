let list = [];
var gameOver;
let player;
let EnemyPosX = 125;
let EnemyPosY = 250;

let v = 5;
let count = 0;

function setup() {
    createCanvas(760, 600);
    gameOver = 0;
    player = new Movingobjects(105, height - 55);
    for (var i = 0; i < 5; i++) {
        list.push(new Movingobjects(EnemyPosX, -100 - EnemyPosY));
        list[list.length - 1].setVelocity(0, v);
        EnemyPosY += 400;
        if (Math.random() < 0.5) {
            EnemyPosX *= 5;
            if (EnemyPosX > 759)
                EnemyPosX = 125;
        }
        else {
            EnemyPosX *= 3;

            if (EnemyPosX > 399)

                EnemyPosX = 375;
        }
    }
}

function draw() {
    background(51);
    displayScore();
    if (gameOver == 0) {

        player.update();

        player.show();





        for (let i = 0; i < list.length; i++) {

            list[i].setVelocity(0, v);

            list[i].update();

            list[i].show();

        }



        if (list[0].isOffScreen()) {

            list.splice(0, 1);

            count++;

            list.push(new Movingobjects(EnemyPosX, -100 - 750));

            list[list.length - 1].setVelocity(0, v);

            if (Math.random() < 0.5) {

                EnemyPosX *= 5;

                if (EnemyPosX > 749)

                    EnemyPosX = 125;

            }

            else {
                EnemyPosX *= 3;
                if (EnemyPosX > 399)
                    EnemyPosX = 375;

            }

        }

    }

    else {
        fill('red');
        rect(0, 200, 800, 200);
        textSize(255);
        noStroke();
        fill('white');
        text(count, 320, 300);
    }
    Over();
}
function displayScore() {
    textSize(25);
    noStroke();
    fill('red');
    text(count, 5, 25);

}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        player.setVelocity(-15, 0);
    }
    else if (keyCode == RIGHT_ARROW) {
        player.setVelocity(+15, 0);
    }
    else if (keyCode == UP_ARROW) {
        v = 10;
    }
    else if (keyCode == DOWN_ARROW) {
        v = 1;
    }
}

function
    keyReleased() {
    player.setVelocity(0, 0);
}

function Movingobjects(x, y) {
    this.position = createVector(x, y);

    this.velocity = createVector(0, 0);
    this.w = 200;
    this.h = 100;
    this.offScreen = false;



    this.setVelocity = function (VelX, VelY) {
        this.velocity.x = VelX;
        this.velocity.y = VelY;
    }



    this.update = function () {

        this.position.add(this.velocity);
        this.position.x = constrain(this.position.x, this.w / 2 + 5, width - this.w / 2 - 5);

    }

    this.show = function () {
        fill(255);
        stroke(255);
        x1 = this.position.x - this.w / 2;
        y1 = this.position.y - this.h / 2;
        rect(x1, y1, this.w, this.h);
    }

    this.isOffScreen = function () {
        if (this.position.y > height + this.h / 2) {
            return true;
        }
    }
}
function Over() {
    for (var i = 0; i < list.length; i++) {
        let dx = player.position.x - list[i].position.x;
        let dy = player.position.y - list[i].position.y;

        dx = Math.abs(dx);
        dy = Math.abs(dy);

        if (dx < player.w && dy < player.h) {
            gameOver = 1;
            console.log(count);
        }
    }
}
