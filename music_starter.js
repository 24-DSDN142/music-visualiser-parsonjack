let numFrames = 4;
let currentFrame =0;
let drummerarm = [];
let violinistarm = [];
let pianistarm = [];
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(img)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  frameRate(12);
  currentFrame = frameCount % numFrames;
  
  push();
  scale(0.2);
  //if(drum > 45 && drum < 55){
  if(drum > 43){
  image(drummerarm[currentFrame], 3, 0);
  }
  else{
    image(drummerarm[0], 3, 0);
  }
  pop();

  push();
  scale(0.2);
  if(bass > 65){
  image(violinistarm[currentFrame], 3, 2);
  }
  else{
    image(violinistarm[0], 3, 0);
  }
  pop();

  push();
  scale(0.2);
  if(other > 65){
  image(pianistarm[currentFrame], 3, 0);
  }
  else{
    image(pianistarm[0], 3, 0);
  }
  pop();


  push();
  scale(0.2);
  image(img2, 3, 0);
  pop();


  //ellipse(350,100,100,100)
  //ellipse(350,100,50,50)
  //ellipse(450,100,100,100)
  //ellipse(450,100,50,50)
//let mouthsize = map(vocal,0,100,60,200)
  //rect(400,250,200,mouthsize)
  //Image(img, 100, 100)
  fill (0)
  let mouthsize = map(vocal,0,100,0,15)
  ellipse(270,325,4,mouthsize-2)
  if (mouthsize < 0){
    mouthsize =4
  }

  

  


}
  


  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
