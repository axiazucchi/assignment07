var capture;

function setup() {
  
createCanvas(640, 480);
//translate(width/2,height/2);

capture = createCapture(VIDEO);
capture.size(640, 480);
capture.hide();

}


function draw() {
var myImage = capture.loadPixels();
image(myImage, 0, 0, 640, 480);

background(color('#000000'));

for(var x=0; x<640; x+=10){
   
   for(var y = 0; y<480; y+=10){
     
     var mv = myImage.get(x+random(5,25),y+random(5,25));
     var value = brightness(mv)
     
     fill(random(mv),random(mv),random(mv));
     noStroke();
     ellipse(x,y,value/15,value/15)
   }
}

}