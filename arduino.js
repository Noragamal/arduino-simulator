var pointss = [];
var edit_points=[];
var lines=[];
//////console.log(led);
var col = [0, 0, 0, 0];
var col0 =[0,0,0];
var col1 =[0,0,0];
var col2 =[0,0,0];
var col3 =[0,0,0];
var row = [0, 0, 0];
var dig_bool = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var aref_gnd = [0, 0];
var analog_bool = [0, 0, 0, 0, 0, 0];
var power = [0, 0, 0, 0, 0, 0, 0];
window.onload = function() {
    var canvass = document.getElementById("c");

    canvass.width = window.innerWidth;
      canvass.height = 900;
    // canvass.height = window.innerHeight;

    var pointcounter = 0;

    var canvas = new fabric.Canvas('c', {
        selection: false
    });

//canvas.isDrawingMode=true;
    var line, isDown;
    canvas.on('mouse:down', function(o) {
        console.log(draw_line);
        if(draw_line){
        isDown = true;
        pointcounter++;
        var pointer = canvas.getPointer(o.e);
        var points = [pointer.x, pointer.y, pointer.x, pointer.y];
        line = new fabric.Line(points, {
            strokeWidth: 4,
            fill: 'red',
            stroke: 'red',
            originX: 'center',
            originY: 'center'
        }); 
       // canvas.setActiveObject(line);
        //if (pointcounter <= 3)

            canvas.add(line);
           lines.push(line);
           // console.log(line.calcCoords(true));
           // canvas.remove(line);
        console.log(pointer.x); //409 408
        console.log(pointer.y);
        pointss.push(pointer.x);
        pointss.push(pointer.y);
 




        
    }

    });

    canvas.on('mouse:move', function(o) {
        if (!isDown) return;
        var pointer = canvas.getPointer(o.e);
        line.set({
            x2: pointer.x,
            y2: pointer.y
        });
        //console.log(pointer);
        edit_points.push(pointer);
        // edit_points.push(pointer.y);
        canvas.renderAll();
    });

    canvas.on('mouse:up', function(o) {
        isDown = false;
        var pointer = canvas.getPointer(o.e);
        pointss.push(pointer.x);
        pointss.push(pointer.y);
       // console.log(line.calcCoords(true));
       // lines.push(line);
       // draw_line=false;
        dig(pointss);
        analog(pointss);
      breadboard_check();
        //breadboard(pointss);
       //x(event);
      // canvas.getActiveObject();

             //breadboard terminals
             if(pointer.x>173 && pointer.x<787)
             {
                 if(pointer.y>=625 && pointer.y<=634)
                 {
                     positive_terminal=false;
                     console.log("positive terminal")
                 }   
                else
                     if(pointer.y>=651 && pointer.y<=662)
                     {
                         negative_terminal=true;
                         console.log("negative terminal")
                     }   
                 
             }
    });


//     function _getSelection()
// {
//   if(canvas.getActiveObject())
//   {
//     return [ canvas.getActiveObject() ];
//   }
 

//   return [];
// }

    canvas.on('mouse:dblclick', function(o) {
       // isDown=false;
       if(!draw_line){
        var pointer = canvas.getPointer(o.e);
        console.log(lines.length);
        var m,c,y_equation,max,x_equation,maxx;
        console.log(pointer);
       for(var i=0;i<lines.length;i++)
       {
           m=(lines[i].y2-lines[i].y1)/((lines[i].x2-lines[i].x1));
           c=(-m*lines[i].x1)+lines[i].y1;
        //    console.log(m);
y_equation=(m*pointer.x)+c;
// console.log(y_equation);
x_equation=((pointer.y-lines[i].y1)/m)+lines[i].x1
// console.log(x_equation)
// console.log(pointer.x);

           //console.log(lines[i]);
//console.log(Math.max(y_equation,pointer.y));
if(pointer.y>=y_equation) 
{
max=pointer.y-y_equation;
if(max<=5)
{
    canvas.remove(lines[i]);
    lines.splice(i,1);
  //  lines.pop(i);
}}
else
{
    max=y_equation-pointer.y;
    if(max<=5)
{
    canvas.remove(lines[i]);
    lines.splice(i,1);
   // lines.pop(i);
}}


if(pointer.x>=x_equation) 
{
maxx=pointer.x-x_equation;
if(maxx<=5)
{
    canvas.remove(lines[i]);
    lines.splice(i,1);
  //  lines.pop(i);
}}
else
{
    maxx=x_equation-pointer.x;
    if(maxx<=5)
{
    canvas.remove(lines[i]);
    lines.splice(i,1);
   // lines.pop(i);
}}


       }


         } } );

var counter=0;

         function breadboard_check()
         {
             console.log("lll")
           
                 for(var i=0;i<lines.length;i++)
                 {
                     see(lines[i].x1,lines[i].y1)
                     see(lines[i].x2,lines[i].y2)
                     console.log(counter)
                     if(counter==2)
                     {
                         console.log("short circuit")
                         alert("short circuit ")
                     }
                     counter=0;
         
         
         
         
                 }
             
         
         
         }
         function see(x,y)
         {
             if(x>173 && x<787)
             {
                 if(y>=625 && y<=634)
                 {
                     counter++;
                 }   
                else
                     if(y>=651 && y<=662)
                     {
                        counter++; 
                     }   
                 
             }
         }
    function dig(points) {
        ////console.log(x);

        for (var i = 0; i < points.length; i += 2) {
            if (points[i + 1] >= 155 && points[i + 1] <= 170) {
                ////console.log(points.length);
                if (points[i] >= 408 && points[i] <= 415) {
                    dig_bool[13] = 1;
                    //console.log("pin13");
                }
                if (points[i] >= 427 && points[i] <= 437) {
                    dig_bool[12] = 1;
                    //console.log("pin12");

                }
                if (points[i] >= 450 && points[i] <= 460) {
                    dig_bool[11] = 1;
                    //console.log("pin 11")
                }
                if (points[i] >= 470 && points[i] <= 480) {
                    dig_bool[10] = 1;
                    //console.log("pin10");
                }
                if (points[i] >= 493 && points[i] <= 505) {
                    dig_bool[9] = 1;
                    //console.log("pin9");
                }
                if (points[i] >= 515 && points[i] <= 526) {
                    dig_bool[8] = 1;
                    //console.log("pin8");
                }
                if (points[i] >= 552 && points[i] <= 560) {
                    dig_bool[7] = 1;
                    //console.log("pin7");
                }
                if (points[i] >= 574 && points[i] <= 582) {
                    dig_bool[6] = 1;
                    //console.log("pin6");
                }
                if (points[i] >= 593 && points[i] <= 604) {
                    dig_bool[5] = 1;
                    //console.log("pin5");
                }
                if (points[i] >= 617 && points[i] <= 625) {
                    dig_bool[4] = 1;
                    //console.log("pin4");
                }
                if (points[i] >= 639 && points[i] <= 649) {
                    dig_bool[3] = 1;
                    //console.log("pin3");
                }
                if (points[i] >= 660 && points[i] <= 672) {
                    dig_bool[2] = 1;
                    //console.log("pin2");
                }
                if (points[i] >= 684 && points[i] <= 693) {
                    dig_bool[1] = 1;
                    //console.log("pin1");
                }
                if (points[i] >= 704 && points[i] <= 716) {
                    dig_bool[0] = 1;
                    //console.log("pin0");
                }
                if (points[i] >= 361 && points[i] <= 371) {
                    aref_gnd[0] = 1;
                    //console.log("aref");
                }
                if (points[i] >= 383 && points[i] <= 393) {
                    aref_gnd[1] = 1;
                    //console.log("gnd");
                }
            }
        }
    }

    function analog(points) {
        ////console.log(x);
        for (var i = 0; i < points.length; i += 2) {
            if (points[i + 1] >= 567 && points[i + 1] <= 577) {
                if (points[i] >= 594 && points[i] <= 604) {
                    analog_bool[0] = 1;
                    //console.log("A0");

                }
                if (points[i] >= 616 && points[i] <= 627) {
                    analog_bool[1] = 1;
                    //console.log("A1");

                }
                if (points[i] >= 639 && points[i] <= 649) {
                    analog_bool[2] = 2;
                    //console.log("A2");

                }
                if (points[i] >= 660 && points[i] <= 670) {
                    analog_bool[3] = 1;
                    //console.log("A3");

                }
                if (points[i] >= 684 && points[i] <= 692) {
                    analog_bool[4] = 1;
                    //console.log("A4");

                }
                if (points[i] >= 706 && points[i] <= 716) {
                    analog_bool[5] = 1;
                    //console.log("A5");

                }

                if (points[i] >= 419 && points[i] <= 428) {
                    power[0] = 1;
                    //console.log("IOREF");

                }
                if (points[i] >= 441 && points[i] <= 451) {
                    power[1] = 1;
                    //console.log("RESET");

                }
                if (points[i] >= 463 && points[i] <= 473) {
                    power[2] = 1;
                    //console.log("3V3");

                }
                if (points[i] >= 485 && points[i] <= 495) {
                    power[3] = 1;
                    //console.log("5V");

                }
                if (points[i] >= 508 && points[i] <= 518) {
                    power[4] = 1;
                    //console.log("GND");

                }
                if (points[i] >= 529 && points[i] <= 538) {
                    power[5] = 1;
                    //console.log("GND2");

                }
                if (points[i] >= 551 && points[i] <= 561) {
                    power[6] = 1;
                    //console.log("VIN");

                }

            }

        }
    }

    function breadboard(points) {
        // console.log("hna");
        for (var i = 0; i < points.length; i += 2) {
            if (points[i ] >= 809 && points[i ] <= 829) {
                col[0]=1;
                if(points[i+1 ] >= 191 && points[i+1 ] <= 210)
                {
                    col0[0]=1
                }
                if(points[i+1 ] >= 270 && points[i+1 ] <= 289)
                {
                    col0[1]=1
                }
                if(points[i+1 ] >= 384 && points[i+1 ] <= 375)
                {
                    col0[2]=1
                }
                //console.log('co1');
               
            }
            if (points[i ] >= 881 && points[i ] <= 902) {
                col[1]=1;
                if(points[i+1 ] >= 187 && points[i+1 ] <= 215)
                {
                    col1[0]=1
                }
                if(points[i+1 ] >= 269 && points[i+1 ] <= 290)
                {
                    col1[1]=1
                }
                if(points[i+1 ] >= 349 && points[i+1 ] <= 373)
                {
                    col1[2]=1
                }
               
            }
            if (points[i ] >= 954 && points[i ] <= 977) {
                col[2]=1;
                if(points[i+1 ] >= 191 && points[i+1 ] <= 210)
                {
                    col2[0]=1
                }
                if(points[i+1 ] >= 270 && points[i+1 ] <= 289)
                {
                    col2[1]=1
                }
                if(points[i+1 ] >= 384 && points[i+1 ] <= 375)
                {
                    col2[2]=1
                }
               
            }
            if (points[i ] >= 1035 && points[i ] <= 1054) {
                col[3]=1;
                if(points[i+1 ] >= 191 && points[i+1 ] <= 210)
                {
                    col3[0]=1
                }
                if(points[i+1 ] >= 270 && points[i+1 ] <= 289)
                {
                    col3[1]=1
                }
                if(points[i+1 ] >= 384 && points[i+1 ] <= 375)
                {
                    col3[2]=1
                }
            }
            if (points[i+1 ] >= 291 && points[i+1 ] <= 309) {
                row[0]=1;
                ////console.log('row1');
               
            }
            if (points[i+1 ] >= 369 && points[i+1 ] <= 392) {
                row[1]=1;
                ////console.log('row1');
               
            }
            if (points[i+1 ] >= 454 && points[i+1 ] <= 475) {
                row[2]=1;
                ////console.log('row1');
               
            }







        }







    }




    //export let dig_bool,power,analog_bool;
};