
rightWristX = 0;
leftWristX = 0;
difference = 0;
function preload()
{}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position(900, 200);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(200, 100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
background('#969A97');
background('#f2a6a0');
textSize(leftWristX, rightWristX, difference);
text('Natalie', 100, 250);
fill('#ba03fc');

}

function modelLoaded() 
{
console.log('Model is loaded');
}

function gotPoses(results)
{ 
if(results.length > 0)
{
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = "+ difference);

   
}

}


