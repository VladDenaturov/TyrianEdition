 
 
 const player = {

    hp:100,
    armorClass:1,
    shields:100,

    renderRight(event){
        ctx.clearRect(0,0,10000,10000)
        ctx.drawImage(playerImgRight, event.clientX-40,event.clientY,95,95);
    },

    renderLeft(event){
        ctx.clearRect(0,0,10000,10000)
        ctx.drawImage(playerImgLeft,event.clientX-40,event.clientY,95,95);
    },

    render(event){
        ctx.clearRect(0,0,10000,10000)
        ctx.drawImage(playerImg,event.clientX-40,event.clientY,95,95);
    },
 }
 