class block{
    constructor(x,y){
        this.block_side=width/20;
        this.pos=createVector(x,y);
        this.center=createVector(x+this.block_side/2,y+this.block_side/2);
    }
    show(){
        //noStroke();
        //if(occupiedAndCleaned==false){
            fill(255);
            rect(this.pos.x,this.pos.y,this.block_side,this.block_side);
        //}
        //else if(occupiedAndCleaned==true){
            
        //}
        
    }
    
 
}