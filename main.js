function preload(){

}
function setup(){
    canvas=createCanvas(1000,750);
    canvas.position(250, 350);
    video=createCapture(VIDEO);
    video.hide();
    
    tint_color=" ";
}
function draw(){
    image(video, 180,150, 640, 480);
    tint(tint_color);

}
function Filter1(){
    fill(0,0,0);
    rect(0,0,1000,750)

        stroke(0,34,255);
        fill(0,239,255);
        circle(100, 100, 100);
        circle(100, 200, 100);
        circle(100, 300, 100);
        circle(100, 400, 100);
        circle(100, 500, 100);
        circle(100, 600, 100);
        circle(100, 700, 100);
        
        circle(900, 100, 100);
        circle(900, 200, 100);
        circle(900, 300, 100);
        circle(900, 400, 100);
        circle(900, 500, 100);
        circle(900, 600, 100);
        circle(900, 700, 100);
    
        stroke(0,239,255);
        fill(0,34,255);
        circle(150, 150, 50);
        circle(150, 250, 50);
        circle(150, 350, 50);
        circle(150, 450, 50);
        circle(150, 550, 50);
        circle(150, 650, 50);
    
        circle(850, 150, 50);
        circle(850, 250, 50);
        circle(850, 350, 50);
        circle(850, 450, 50);
        circle(850, 550, 50);
        circle(850, 650, 50);
    
        stroke(0,239,255);
        fill(0,111,255);
        rect( 175,100 ,650,50);
        rect( 175,625 ,650,50);
}
function Filter2(){
    fill(0,0,0);
    rect(0,0,1000,750);
    
    fill(255,0,0);
    circle(100,100,100);
    circle(200,0,100);
    circle(300,100,100);
    circle(400,0,100);
    circle(500,100,100);
    circle(600,0,100);
    circle(700,100,100);
    circle(800,0,100);
    circle(900,100,100);

    circle(100,775,100);
    circle(200,675,100);
    circle(300,775,100);
    circle(400,675,100);
    circle(500,775,100);
    circle(600,675,100);
    circle(700,775,100);
    circle(800,675,100);
    circle(900,775,100);

    circle(200,200,100);
    circle(100,300,100);
    circle(200,400,100);
    circle(100,500,100);
    circle(200,600,100);

    circle(900,200,100);
    circle(800,300,100);
    circle(900,400,100);
    circle(800,500,100);
    circle(900,600,100);

}
function Filter3(){
    fill(0,0,0);
    rect(0,0,1000,750);

    fill(255,188,0);
    stroke(222,255,0);
    rect(130,150,50,480);
    rect(30,150,50,480);
    fill(222,255,0);
    stroke(255,188,0);
    rect(80,150,50,480);

    fill(255,188,0);
    stroke(222,255,0);
    rect(820,150,50,480);
    rect(920,150,50,480);
    fill(222,255,0);
    stroke(255,188,0);
    rect(870,150,50,480);

    fill(255,188,0);
    stroke(222,255,0);
    rect(180,100,640,50);
    rect(180,0,640,50);
    fill(222,255,0);
    stroke(255,188,0);
    rect(180,50,640,50);

    fill(255,188,0);
    stroke(222,255,0);
    rect(180,630,640,50);
    rect(180,730,640,50);
    fill(222,255,0);
    stroke(255,188,0);
    rect(180,680,640,50);
}

function take_snapshot(){
    save('isha.png')
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

