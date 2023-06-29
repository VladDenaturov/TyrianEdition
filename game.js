
WindowPositioner.windowPositionerExec();

window.addEventListener("resize",function resizeCheckier(){
    WindowPositioner.windowPositionerExec();
})



canvas.addEventListener("mousemove",function updatePlayerPos(eve){
     if (eve.movementX > 0) {
        player.renderRight(eve)
    } else if (eve.movementX < 0){
        player.renderLeft(eve) 
    }   else if (eve.movementX === 0){
        player.render(eve);
    }
      
});


    
    