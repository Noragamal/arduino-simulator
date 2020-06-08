var ledd=false;
var button_pressed=false;
var button=false;
var yellow_led=false;
var red_led=false;
var xx=true;
var pin = 0;
var declare,setting_up,loop_value;
var pin_used="";
var pin2_used="";
var pin_name="";
var red_led2=false;
var yellow_led2=false;
var draw_line =false;
var buzzer=false;
var conn1 = false;
var ldr = false;
var back=false;
var lightning=true;
var think=false;
var x_object=0;
var blink=0;
var delay=false;
var delay1=0;
var delay2=0;
var delay3=0;
var delay4=0;
var delay5=0;
var delay6=0;
var positive_terminal=false;
var negative_terminal=false;
// var delay2=0;
var inrange_motionsensor=false;
//var pointss = [];
var motion_sensor = false;
        var conn2 = false;
        var conn3=false;
   

function setStatus(newstatus)
{
  $("#bot").removeClass("speaking thinking");
  $("#bot").addClass(newstatus);
}
