class PlatformPart{
    constructor(width,height,imgLeft,imgMid,imgRight,posX,posY,){           //type stands for: corner,middle etc            //posY and posX should be controlled random variations for this to work
        this.width = width;                 
        this.height = height;
        this.imgLeft = imgLeft;
        this.imgMid = imgMid;
        this.imgRight = imgRight;
       
        this.posX = posX;
        this.posY = posY;
       

        //random Numbers and trackers
        this.partsCounterXPlus = [];
        this.partsCounterXMinus = [];

        this.partsCounterYPlus = [];
        this.partsCounterYMinus = [];

        this.UpleftPart = 1
        this.middlePart = 2
        this.upLeftPart = 3
        
    
        this.randomNumber1 = Math.floor((Math.random()*4)+3)  //for first randomness length              //random numbers galore :) for the random generations. chronological order in code
        this.randomNumber2 = Math.floor((Math.random()*2)+1) //for second randomness
        this.randomNumber3 = Math.floor((Math.random()*4)+3)    //for second randomness length
        this.randomNumber4 = Math.floor((Math.random()*2)+1)
        
        
    }
    generateShape(){
        
            ctx5.translate(-50,290)
            ctx5.drawImage(this.imgLeft,this.posX,this.posY,);
                                                                                                            //first draw, always from the upper-left corner
                        this.partsCounterXPlus.push(this.UpleftPart);
                        this.partsCounterYPlus.push(this.UpleftPart);

                                
                                   for (let i = (this.posX*this.partsCounterXPlus.length + this.posX); i < (this.posX*this.randomNumber1); i += this.width) {
                                        ctx5.drawImage(this.imgMid,i,this.posY);                                                                                            //x axis, to left side
                                        this.partsCounterXPlus.push(this.middlePart);  
                                   }

                                    switch (this.randomNumber2) {
                                        case 1:

                                             for (let j = this.posY; j < (this.posY*this.randomNumber3); j += this.height) {            //upwards
                                            ctx5.drawImage(this.imgMid, (this.posX*this.partsCounterXPlus.length), j);
                                           this.partsCounterYMinus.push(this.middlePart); }break;
                                                                                                                                                        //y axis is upside-down for canvas owo
                                        case 2:
                                            
                                             for (let j = this.posY; j >= -(this.posY*this.randomNumber3); j -= this.width) {          //downwards
                                            ctx5.drawImage(this.imgMid, (this.posX*this.partsCounterXPlus.length), j);
                                           this.partsCounterYPlus.push(this.middlePart); }break;
                                           

                                        default:
                                            break;
                                    }
                    
                                              
    }
}

