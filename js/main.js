

class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.playerElm = document.getElementById("player");
    }
    
    moveLeft(){
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
        console.log(`current postion...`, this.positionX)
    }
    moveRight(){
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
        console.log(`current postion...`, this.positionX)
    }
}



const myPlayer = new Player();

// attach event listeners

document.addEventListener("keydown",(e) => {
    if(e.key === "ArrowLeft"){
        myPlayer.moveLeft();
    }else if (e.key === "ArrowRight"){
        myPlayer.moveRight();
    }
});