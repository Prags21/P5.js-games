class piece {
    constructor(x, y) {
        this.blocks = [];
        this.angle = 0;
        this.canMoveD = 1;
        this.canMoveL = 0;
        this.canMoveR = 0;
        for (var i = 0; i < 4; i++) {
            this.blocks[i] = new block(0, 0);
        }
        this.pos = createVector(x, y);
    }
    rotation() {
        this.angle += PI / 2;
    }
    show() { }
    update(move) {
        let rightMove = move == 1;
        let leftMove = move == -1;
        let x = this.pos.x;
        let y = this.pos.y;
        let w = this.blocks[0].block_side;

        if (this.canMoveD == 1) {
            this.moveDown();
        }

        if (rightMove == 1) {
            this.canMoveR = 1;
        }
        else if (leftMove == 1) {
            this.canMoveL = 1;
        }

        for (let block of this.blocks) {
            let pos = block.pos;
            let i = pos.x / block.block_side;
            let j = pos.y / block.block_side;
            let val = grid[i][j + 1];
            if (j + 1 >= grid[i].length || val != -1) {
                this.canMoveD = 0;
                break;
            }
            if (this.canMoveR == 1 && (i + 1 >= grid.length || grid[i + 1][j] != -1)) {
                this.canMoveR = 0;
                break;
            }
            if (this.canMoveL == 1 && (i - 1 < 0 || grid[i - 1][j] != -1)) {
                this.canMoveL = 0;
                break;
            }
        }

        if (this.canMoveL) {
            this.pos.x -= w;
            this.canMoveL = 0;
            leftMove = 0;
        }

        else if (this.canMoveR) {
            this.pos.x += w;
            this.canMoveR = 0;
            rightMove = 0;
        }
        else {
            leftMove = rightMove = 0;
        }

        if (this.canMoveD == 0) {
            for (let block of this.blocks) {
                let pos = block.pos;
                let i = pos.x / block.block_side;
                let j = pos.y / block.block_side;
                grid[i][j] = 1;

            }
        }
    }
    moveDown() {
        if (frameCount % 50 == 0) {
            this.pos.add(createVector(0, width / 20));
        }
    }
   
    removeBlocks(rowsToCheck) {
        for (let block of this.blocks) {
            for (let row of rowsToCheck) {
                if (block.pos.y / block.block_side == row) {
                    occupiedAndCleaned = true;
                }
            }
        }
    }
    // if(checkIFRemoveRow() > 0) {
    // var p = checkIFRemoveRow();
    // removeBlock(p);
    // for (let j = 0; j < 30; j++) {
    //     grid[p][j] = 0;
    // }
}