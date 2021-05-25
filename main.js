canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d")

rover_width = 100;
rover_height = 90;


rover_x = 10;
rover_y = 10;

function add(){
    canvas_imgTag = new Image();
    canvas_imgTag.onload = uploadcanvas;
    canvas_imgTag.src = "mars_surface.jpg";

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = "rover.jpg";  
}
function uploadcanvas(){
    ctx.drawImage(canvas_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    console.log("uploadrover");
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
 function my_keydown(e) { keyPressed = e.keyCode;
 console.log(keyPressed);
  if(keyPressed == '38') { 
up();
 console.log("up");
 } 
 if(keyPressed == '40') {
      down(); 
      console.log("down");
     } 
     if(keyPressed == '37') {
          left();
           console.log("left"); 
        } 
        if(keyPressed == '39')
         { right();
             console.log("right"); 
        }
     }
     function up(){
         if(rover_y>=0)
         {
            rover_y-= 10;
            console.log("When up arrow is pressed = " + rover_y + " - "+rover_y);
            uploadcanvas();
            uploadrover();
            
         }
     }
     function down(){
        if(rover_y<=600)
        {
           rover_y+= 10;
           console.log("When down arrow is pressed" + rover_y + " - "+rover_y);
           uploadcanvas();
           uploadrover();
           
        }
    }function left(){
        if(rover_x>=0)
        {
           rover_x-= 10;
           console.log("When left arrow is pressed = " + rover_x + " - "+rover_x);
           uploadcanvas();
           uploadrover();
           
        }
    }function right(){
        if(rover_x<=700)
        {
           rover_x+= 10;
           console.log("When right arrow is pressed = " + rover_x + " - "+rover_x);
           uploadcanvas();
           uploadrover();
           
        }
    }