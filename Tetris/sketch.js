let grid = [];
let objects = [];
let Over = false;
let occupiedAndCleaned=false;
function setup() {
    createCanvas(400, 600);
    leftMove = 0;
    rightMove = 0;
    for (let i = 0; i < 20; i++) {
        grid[i] = [];
        for (let j = 0; j < 30; j++) {
            grid[i][j] = -1;

        }
    }


}
function allObjectsStatic() {
    if (objects[objects.length - 1].canMoveD == 0) {
        return true;
    }
    return false;
}

function draw() {
    if (!Over) {
        background(51);
        if (objects.length == 0 || allObjectsStatic()) {
            gameOver();
            
            objects.push(getRandomShape());
        }
        for (let object of objects) {
            object.update();
            object.show();
        }
    }
else {
        noStroke();
        fill('red');
    //}
    // for(let i=0;i<20;i++){
    //     for(let j=0;j<30;j++){
    //         grid[i][j]=i*20+j;
    //         fill(grid[i][j]);
    //         rect(i*20,j*20,20,20);
    //     }
    //     }

}
}
function IsRowFull() {
    var rows = [];
    for (let i = 19; i >= 0; i--) {
        for (let j = 0; j < 30; j++) {
            if (grid[i][j] == 0) {
                break;
            }
            if (j == 29) {
                rows.push(i);
            }
        }
        return rows;
    }


}
function getRandomShape() {
    let shapes = [0, 1, 2, 3, 4, 5, 6];
    //return new stick(width / 2 - 20, -20*4);
    switch (random(shapes)) {
        case 0:
            return new square(width / 2 - 20, -20 * 2);
        case 1:
            return new dog(width / 2 - 20, -20 * 2);

        case 2:
            return new T(width / 2 - 20, -20 * 2);

        case 3:
            return new stick(width / 2 - 20, -20 * 4);

        case 4:
            return new L(width / 2 - 20, -20 * 3);

        case 5:
            return new iL(width / 2 - 20, -20 * 2);

        case 6:
            return new iDog(width / 2 - 20, -20 * 2);

    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        objects[objects.length - 1].update(+1);
    }
    else if (keyCode === LEFT_ARROW) {
        objects[objects.length - 1].update(-1);
    }
}

function gameOver() {
    if (objects.length == 0) {
        return;
    }
    if (objects[objects.length - 1].canMoveD == 0) {
        if (objects[objects.length - 1].pos.y < 0) {
            Over = false;
        }
    }
}