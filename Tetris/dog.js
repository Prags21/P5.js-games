class dog extends piece {
    constructor(x, y) {
        super(x, y);
    }

    update(move) {
        super.update(move);
        let x = this.pos.x;
        let y = this.pos.y;
        let w = this.blocks[0].block_side;
        this.blocks[0].pos = createVector(x, y);
        this.blocks[1].pos = createVector(x + w, y);
        this.blocks[2].pos = createVector(x+2*w, y + w);
        this.blocks[3].pos = createVector(x + w, y + w);
        
    }

    show() {
        for (var block of this.blocks) {
            block.show();
        }
    }
}