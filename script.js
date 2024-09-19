
   // Typing Text MySkill
   const words=document.querySelector(".words").children;
   const output=document.querySelector(".output");
   let wordIndex=0;
   let charIndex=0;
   let textArray;
   function start(){
       const text=words[wordIndex].getAttribute("data-text")
       textArray=text.split("");
       output.innerHTML="";
       typing();
   }
   function typing(){
       if(charIndex==textArray.length){
           charIndex=0;
           if(wordIndex==words.length-1){
               wordIndex=0;
           }
           else{
               wordIndex++;
           }
           setTimeout(function(){
               start();
       },3000)
       }
       else{   
           span=document.createElement("span");
           span.innerHTML=textArray[charIndex];
           output.appendChild(span);
           charIndex++;
           setTimeout(typing,300);
       }
   }
   window.onload=start();
   // Akhir Typing Text MySkill
   
   const inputs = document.querySelectorAll(".input");
   
   
   function addcl(){
       let parent = this.parentNode.parentNode;
       parent.classList.add("focus");
   }
   
   function remcl(){
       let parent = this.parentNode.parentNode;
       if(this.value == ""){
           parent.classList.remove("focus");
       }
   }
   
   
   inputs.forEach(input => {
       input.addEventListener("focus", addcl);
       input.addEventListener("blur", remcl);
   });

   //Gallery

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prevBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

    // top left of spade          
    context.bezierCurveTo(
        x, y + topHeight / 2, // control point 1
        x - width / 2, y + topHeight / 2, // control point 2
        x - width / 2, y + topHeight // end point
    );
    
    // bottom left of spade
    context.bezierCurveTo(
        x - width / 2, y + topHeight * 1.3, // control point 1
        x, y + topHeight * 1.3, // control point 2
        x, y + topHeight // end point
    );
    
    // bottom right of spade
    context.bezierCurveTo(
        x, y + topHeight * 1.3, // control point 1
        x + width / 2, y + topHeight * 1.3, // control point 2
        x + width / 2, y + topHeight // end point
    );
    
    // top right of spade
    context.bezierCurveTo(
        x + width / 2, y + topHeight / 2, // control point 1
        x, y + topHeight / 2, // control point 2
        x, y // end point
    );
    
    context.closePath();
    context.fill();
    
    // bottom of spade
    context.beginPath();
    context.moveTo(x, y + topHeight);
    context.quadraticCurveTo(
        x, y + topHeight + bottomHeight, // control point
        x - bottomWidth / 2, y + topHeight + bottomHeight // end point
    );
    context.lineTo(x + bottomWidth / 2, y + topHeight + bottomHeight);
    context.quadraticCurveTo(
        x, y + topHeight + bottomHeight, // control point
        x, y + topHeight // end point
    );
    context.closePath();
    context.fillStyle = "black";
    context.fill();
    context.restore();
function drawHeart(context, x, y, width, height){
    context.save();
    context.beginPath();
    var topCurveHeight = height * 0.3;
    context.moveTo(x, y + topCurveHeight);
    // top left curve
    context.bezierCurveTo(
        x, y, 
        x - width / 2, y, 
        x - width / 2, y + topCurveHeight
    );
    
    // bottom left curve
    context.bezierCurveTo(
        x - width / 2, y + (height + topCurveHeight) / 2, 
        x, y + (height + topCurveHeight) / 2, 
        x, y + height
    );
    
    // bottom right curve
    context.bezierCurveTo(
        x, y + (height + topCurveHeight) / 2, 
        x + width / 2, y + (height + topCurveHeight) / 2, 
        x + width / 2, y + topCurveHeight
    );
    
    // top right curve
    context.bezierCurveTo(
        x + width / 2, y, 
        x, y, 
        x, y + topCurveHeight
    );
    
    context.closePath();
    context.fillStyle = "red";
    context.fill();
    context.restore();
}

function drawClub(context, x, y, width, height){
    context.save();
    var circleRadius = width * 0.3;
    var bottomWidth = width * 0.5;
    var bottomHeight = height * 0.35;
    context.fillStyle = "black";
    
    // top circle
    context.beginPath();
    context.arc(
        x, y + circleRadius + (height * 0.05), 
        circleRadius, 0, 2 * Math.PI, false
    );
    context.fill();
    
    // bottom right circle
    context.beginPath();
    context.arc(
        x + circleRadius, y + (height * 0.6), 
        circleRadius, 0, 2 * Math.PI, false
    );
    context.fill();
    
    // bottom left circle
    context.beginPath();
    context.arc(
        x - circleRadius, y + (height * 0.6), 
        circleRadius, 0, 2 * Math.PI, false
    );
    context.fill();
    
    // center filler circle
    context.beginPath();
    context.arc(
        x, y + (height * 0.5), 
        circleRadius / 2, 0, 2 * Math.PI, false
    );
    context.fill();
    
    // bottom of club
    context.moveTo(x, y + (height * 0.6));
    context.quadraticCurveTo(
        x, y + height, 
        x - bottomWidth / 2, y + height
    );
    context.lineTo(x + bottomWidth / 2, y + height);
    context.quadraticCurveTo(
        x, y + height, 
        x, y + (height * 0.6)
    );
    context.closePath();
    context.fill();
    context.restore();
}

function drawDiamond(context, x, y, width, height){
    context.save();
    context.beginPath();
    context.moveTo(x, y);
    
    // top left edge
    context.lineTo(x - width / 2, y + height / 2);
    
    // bottom left edge
    context.lineTo(x, y + height);
    
    // bottom right edge
    context.lineTo(x + width / 2, y + height / 2);
    
    // closing the path automatically creates
    // the top right edge
    context.closePath();
    
    context.fillStyle = "red";
    context.fill();
    context.restore();
}
