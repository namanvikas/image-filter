function preload(){

}
function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    PoseNet=ml5.poseNet(video,modelloaded);
    PoseNet.on('pose',gotposes);

}
function draw(){
image(video,0,0,300,300);
}

function modelloaded(){
    console.log("poseNet is initilized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
   }

 function take_snapshot(){
    save("child.png");
 }