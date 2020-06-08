//debugging led
var digital_pins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var analog_pins=["A0","A1","A2","A3","A4","A4"];
var digital = false;
var analog=false;
var dx;
var ds;
var dl;
var perfect_code=false;
function myFunction() {
    
    // debug_declare();
    // debug_setup();
    // debug_loop();

    led_backend();
    led_backendd();
    led_button();
    ldr_led()
    led_blink();
    getting_delay();

    //commenthis
    //check_breadboard();
    //till here
    
    //also here 
    ldr_backend();
    // motion_backend();
    motion_final();
    button_led();
    ldr_backendd();
    sensor();
    // motion_backendd();
    led_buzzer_change();
    change();
  
    

};

function debug_declare() {
    //console.log(dx.length);
    dx = declaration.value.split(' ');
    var dx_length = dx.length;
    if (dx_length > 1) {


        if ((dx[0] != "int")) {
            alert("wrong declaration type written " + dx[0]);
        }
        if( (buzzer&& motion_sensor)|| (ledd && button))
        {
            console.log(dx[7]);
            for (var i = 0; i < digital_pins.length; i++) {
                if (dx_length > 3 && dx[8] == digital_pins[i]) {
                    digital = true;
                    break;
                }
            }
                if (!digital) {
                    alert("please use a digital pin for declaration3");
                }
        
    }
   


        if( (buzzer || ledd || motion_sensor) && !ldr){
        for (var i = 0; i < digital_pins.length; i++) {
            if (dx_length > 3 && dx[3] == digital_pins[i]) {
                digital = true;
                break;
            }
        }


        if (!digital) {
            alert("please use a digital pin for declaration2");
        }
    }
    if(ldr )
    {
        if(ledd && ldr)
        {
            console.log(dx[7]);
            for (var i = 0; i < digital_pins.length; i++) {
                if (dx_length > 3 && dx[7] == digital_pins[i]) {
                    digital = true;
                    break;
                }
            }
                if (!digital) {
                    alert("please use a digital pin for declaration1");
                }
            
        }
        for (var i = 0; i < analog_pins.length; i++) {
            if (dx_length > 3 && dx[3] == analog_pins[i]) {
                analog = true;
                break;
            }
        }
        if (!analog) {
            alert("please use an analog pin for declaration");
        }

    }


  }
}


function debug_setup() {
    ds = setup.value.split(' ');
    var ds_length = ds.length;
    if (ds_length > 1) {
        if (ds[0] != "pinMode(") {
            alert("in setup: did you mean writing pinMode? :)");

        }
        if (ds[1] != dx[1]) {
            alert("in setup: do you mean " + dx[1]);
        }
        if(ledd && button)
        {
//same as buzzsr and motion_sensor
        }
        else
if (buzzer && motion_sensor)
{

}
else
if(ldr && ledd)
{

}
else if(ledd)
{
    console.log(ds_length);
    if((!ledd && !yellow_led)&&ds_length >7 && ds_length<22){
    console.log(ds[11]);
    console.log(ds[19]);
 delay1=ds[11] ;
 delay2=ds[19];
 delay=true;
 blink=1; 
    }
    else if ((!ledd && !yellow_led)&&ds_length> 22)
    {
        delay1=ds[11] ;
        delay2=ds[19];
        delay=true;
        blink=3;    
    } 
    
}
else{
        if( buzzer || ledd){
        if (ds[3] != "OUTPUT") {
            alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
        }
    }
    if(ldr || motion_sensor )
    {
        if (ds[3] != "INPUT") {
            alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
        }


    }
}


    }
}

function debug_loop() {
    dl = loop.value.split(' ');
    var dl_length = dl.length;
    console.log(dl_length);
    if (dl_length > 2) {
        if((ledd || buzzer) && !motion_sensor && !ldr && !button){
        if (dl[0] != "digitalWrite(") {
            alert("in loop: do you mean writing digitalWrite?");
        }
        if (dl[1] != ds[1]) {
            alert("in loop:  do you mean " + dx[1]);
        }
        if (dl[3] != "HIGH") {
            alert("in loop: for turning on the led would you set it HIGH or LOW?");
        } 
        if(dl_length>7 && !button)
        {
            if(ledd && !yellow_led)
            {
                delay=true;
                // for(var i=0;i<(dl[5].length);i++)
                // {
                //     if(dl[5].charAt(i)!="delay(" ||dl[5].charAt(i)!=")" )
                //     {
                //         delay1+=dl[5].charAt(i);
                //     }
                // }
                console.log(dl_length);
               
                    blink=4;
                
                delay1=dl[6];
                console.log(delay1);
                delay2=dl[14];
                console.log(delay2);
                perfect_code=true;

            }

        }
        
        
        else {
            alert("perfect code!1");
            perfect_code=true;
        }
    }
    // if(motion_sensor && buzzer)
    // {



    // }
    if(ldr || motion_sensor || button)
    {
        if (dl[0] != "int") {
            alert("in loop: please define a variable for reading the sensor");
        }
        var string= "analogRead(" + dx[1] +")";
        var stringg="digitalRead(" + dx[1] +")";
        console.log(stringg);
        console.log(dl[3]);
        if(ldr){
        if (dl[3] != string) {
            alert("in loop: make sure it is analogRead and the variable is same as you written");
        }
        else {
            alert("perfect code!1");
            perfect_code=true;
        }
    }
    if(!(ldr&& ledd) && motion_sensor){
        if (motion_sensor &&dl[3] != stringg ) {
            alert("in loop: make sure it is digitalRead( and the variable is same as you written");
        }
        else {
            alert("perfect code!3");
            perfect_code=true;
        }
    }
    if(button && ledd)
    {
        if(dl[3]!=stringg)
        {
            alert("in loop: make sure it is digitalRead( and the variable is same as you written");
        }
        else
        {
            alert("perfect code!4");
            perfect_code=true;
        }
    }
        
    

    }




    }
    else if( delay )
    {
        console.log("LL");
        perfect_code=true;
    }


}