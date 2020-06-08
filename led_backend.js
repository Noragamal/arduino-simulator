// setTimeout(() => {
    //console.log(pointss.length);
    function led_backend(){
    var num_points = (pointss.length) % 8;
    //console.log(num_points);
    if (num_points == "0") {
       

        
        if((ledd || buzzer)&&!ldr && !button )
        {
            console.log("wss");

        for (var i = 0; i < analog_bool.length; i++) {
            //console.log(dig_bool[i]);   
            if (analog_bool[i] == "1") {
                alert("connection wrong");
            }
        }
        for (var i = 0; i < dig_bool.length; i++) {
            if (dig_bool[i] == "1") {
                //console.log(i);
                pin = i;
                conn1 = true;


            }
        }


        if (power[4] == "1") {
            conn2 = true;
        }
        if (power[5] == "1") {
            conn2 = true;
        }
        if (aref_gnd[1] == "1") {
            conn2 = true;
        }
        console.log(conn2);
        if (conn1 == true) {
            // console.log(conn1);
            if (conn2 == true)
                alert("connection setup correct");
                else
                conn2=false
        }
        else conn1=false;
    }
    }
    if(ledd &&button)
    {
        console.log("hna")

        for (var i = 0; i < dig_bool.length; i++) {
            if (dig_bool[i] == "1") {
                //console.log(i);
                pin = i;
                conn1 = true;


            }
        }

        if (power[4] == "1") {
            conn2 = true;
        }
        if (power[5] == "1") {
            conn2 = true;
        }
        if (aref_gnd[1] == "1") {
            conn2 = true;
        }
        console.log(conn2);
        if (conn1 == true) {
            // console.log(conn1);
            if (conn2 == true)
                alert("connection setup correct");
                else
                conn2=false
        }
        else conn1=false;
    }
    
}
var snd = new Audio("old-fashioned-door-bell-daniel_simon.mp3");
function change()
{
    console.log(perfect_code)
    console.log(conn1)
    console.log(conn2)
    console.log(ledd)
    console.log(delay)
if(perfect_code==true)
{
    if (conn1 == true) {
        // console.log(conn1);
        if (conn2 == true){
            // if(buzzer)
            // {
            //     snd.play();
            // }
            // else 
            if(red_led)
            {
                if(delay)
                {
                    canvasd.style.background = "url(images/red.jpg)";
                    console.log(blink);
                    if(blink==1){
                        console.log("kkk");
                    setTimeout(function(){canvasd.style.background = "url(images/mmm.jpg)"; }, delay1);
                  //  delay=false;
                    //setTimeout(function(){  canvasd.style.background = "url(red.jpg)"; }, delay2);
                    }
                    else if(blink==3)
                    {

  setTimeout(function(){
      
    canvasd.style.background = "url(images/mmm.jpg)";
    setTimeout(function(){
        canvasd.style.background = "url(images/red.jpg)"; 
        setTimeout(function(){
            canvasd.style.background = "url(images/mmm.jpg)"; 
            setTimeout(function(){
                canvasd.style.background = "url(images/red.jpg)"; 
                setTimeout(function(){
                    canvasd.style.background = "url(images/mmm.jpg)"; 
                
                
                }, delay5);
            
            }, delay4);
        
        }, delay3);
    
    }, delay2);

}, delay1);

                        // setTimeout(function(){canvasd.style.background = "url(mmm.jpg)"; }, delay1);
                        // setTimeout(function(){  canvasd.style.background = "url(red.jpg)"; }, delay2);
                        // setTimeout(function(){ console.log("11");
                        //     canvasd.style.background = "url(mmm.jpg)"; }, delay1);
                        // setTimeout(function(){ console.log("12"); canvasd.style.background = "url(red.jpg)"; }, delay2);
                        // setTimeout(function(){console.log("13");canvasd.style.background = "url(mmm.jpg)"; }, delay1);
                       // setTimeout(function(){  canvasd.style.background = "url(red.jpg)"; }, delay2);
                    }
                    else if(blink==4)
                    {

myLoop();
                    }
                    //IIAFE (immediately invoked async function expression)

                }
                else{
                    if(red_led && yellow_led){
                        alert(" both leds are on")
                    }
if(red_led && !button && !xx)
{

    canvasd.style.background = "url(images/red.jpg)"
}
else if(yellow_led)
{
    canvasd.style.background = "url(images/yellow_background.jpg)"
}

                }
               // canvasd.style.backgroundRepeat = "no-repeat";
            }
    }
}
}

}
function button_led()
{
    requestAnimationFrame(button_led);
   // console.log(conn1)

if(perfect_code ){
     if(red_led &&button )
{
    if(button_pressed)canvasd.style.background = "url(images/red.jpg)"
    else  canvasd.style.background = "url(images/mmm.jpg)";
}
}
}
var i=0;
function myLoop() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        canvasd.style.background = "url(images/mmm.jpg)";   //  your code here
      i++;   
      setTimeout(function(){
        canvasd.style.background = "url(images/red.jpg)"; 
        if (i < 10) {           //  if the counter < 10, call the loop function
          myLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
    
    
    }, delay2);                 //  increment the counter
    }, delay1)
  }
function ldr_backend()
{
    //analog connection
        var num_points = (pointss.length) % 8;
        //console.log(num_points);
        if (num_points == "0") {
            var pin = 0;
            if(ldr)
            {var led_ldr=false;
                
                for (var i = 0; i < dig_bool.length; i++) {
                    //console.log(dig_bool[i]); 
                    if (dig_bool[i] == "1") {
                        if(ledd)  
                    led_ldr=true;
                        else{
                            led_ldr=false;
                        }
                    }
                }
                if(ledd){
                    if(!led_ldr)
                    alert("connection wrongg");
                }
                for (var i = 0; i < analog_bool.length; i++) {
                    if (analog_bool[i] == "1") {
                        //console.log(i);
                        pin = i;
                        conn1 = true;
        
        
                    }
                }
                if (power[4] == "1") {
                    conn2 = true;
                }
                if (power[5] == "1") {
                    conn2 = true;
                }
                if (aref_gnd[1] == "1") {
                    conn2 = true;
                }
                console.log(conn2);
                if (conn1 == true) {
                    // console.log(conn1);
                    if (conn2 == true)
                        alert("connection setup correct");
                        else
                        conn2=false
                }
                else conn1=false;



            }



        }




}


function motion_backend(){
   // var num_points = (pointss.length) % 8;
    //console.log(num_points);
    // if (num_points == "0") {
    //     var pin = 0;

        // var conn1 = false;
        // var conn2 = false;
        // console.log(dig_bool[13]);
        // console.log(aref_gnd[1]);
        console.log(motion_sensor);
        if(motion_sensor )
        {

        for (var i = 0; i < analog_bool.length; i++) {
            //console.log(dig_bool[i]);   
            if (analog_bool[i] == "1") {
                alert("connection wrong");
            }
        }
        for (var i = 0; i < dig_bool.length; i++) {
            if (dig_bool[i] == "1") {
                //console.log(i);
                pin = i;
                conn1 = true;


            }
        }


        if (power[4] == "1") {
            conn2 = true;
        }
        if (power[5] == "1") {
            conn2 = true;
        }
        if (aref_gnd[1] == "1") {
            conn2 = true;
        }
        if (power[3] == "1") {
            conn3 = true;
        }



        console.log(conn2);
        if (conn1 ) {
            // console.log(conn1);
            if (conn2 )
            if(conn3)
                alert("connection setup correct");
        }
    }
    //}
}

