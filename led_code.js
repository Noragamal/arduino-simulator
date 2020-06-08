var declaring;
var num_led;
var delay_always;
var num_digitalWrite;

function led_backendd(){

    pin_used="";
    declare=declaration.value;
    declaring= declaration.value.split(' ');
    setting_up=setup.value;
    loop_value=loop.value;
    if(setting_up.match(/digitalWrite/g))
    num_digitalWrite=(setting_up.match(/digitalWrite/g)).length;
    if(loop_value.match(/delay/g))
    delay_always=(loop_value.match(/delay/g)).length;
    console.log(num_digitalWrite);
    console.log(declare);
    if(yellow_led || red_led || buzzer){
        num_led=(setting_up.match(/pinMode/g)).length;
        console.log(num_led)
        if(num_led==1){
    
        if(!(declare.includes("int")))
        {
            alert("wrong data type written");
        }
        for(var i=0;i<declare.length;i++)
        {console.log(declare[i])

            if(declare[i+1]<=declare.length && declare[i]=="=" )
            {console.log(declare[i])
                for(var j=i+1;j<declare.length;j++){
                    console.log(declare[j])
                    if(declare[j]!=" " && declare[j]!=";" )
                    {
                    pin_used+=declare[j];
                }
                else{
                    if(declare[j]==" ")
                    continue;
                }
            }
            }
        }
       
        for (var i = 0; i < digital_pins.length; i++) {
            if (pin_used == digital_pins[i]) {
                digital = true;
                break;
            }
            else
            {
                digital=false;
            }
        }
            if (!digital) {
                alert("please use a digital pin for declarationm3");
            }else
if(!(setting_up.includes("pinMode")))
{
    alert("in setup: did you mean writing pinMode? :)");
}else
if(!(setting_up.includes(declaring[1])))
{
    alert("in setup: do you mean " + declaring[1]);
}else
if(!(setting_up.includes("OUTPUT")))
{
    alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
}else
if(num_digitalWrite==0){
if(!(loop_value.includes("digitalWrite")))
{
    alert("in loop: do you mean writing digitalWrite?");
}else
if(!(loop_value.includes(declaring[1])))
{
    alert("in loop:  do you mean " + declaring[1]);
}else
if(!(loop_value.includes("HIGH")))
{
    alert("in loop: for turning on the component would you set it HIGH or LOW?");
}}
else if(pin_used!=pin)
{
    console.log(pin_used);
    console.log(pin);
    alert("please change the pin in declaration to match the one on the circuit");
}
else {
    if(button)
    return;
    alert("perfect code!123");
    perfect_code=true;
}
//console.log((setting_up.match(/pinMode/g)).length);

}
 }
}
function led_button()
{
    if(button || (buzzer&&motion_sensor)){

       //entered button
        if(num_led==2){
    
        if(!(declare.includes("int")))
        {
            alert("wrong data type written");
        }
      
         matches = declare.match(/\d+/g); 
         pin_used=matches[0];
         pin2_used=matches[1];
         console.log(pin2_used)
         console.log(pin_used)
       
       
        for (var i = 0; i < digital_pins.length; i++) {
            if (pin_used == digital_pins[i]) {
                digital = true;
                break;
            }
            else
            {
                digital=false;
            }
            if (pin2_used == digital_pins[i]) {
                digital = true;
                break;
            }
            else
            {
                digital=false;
            }


        }
            if (!digital) {
                alert("please use a digital pin for declaration30");
            }else
if(!(setting_up.includes("pinMode")))
{
    alert("in setup: did you mean writing pinMode? :)");
}else
if(!(setting_up.includes(declaring[1])))
{
    alert("in setup: do you mean " + declaring[1]);
}else
if(!(setting_up.includes("OUTPUT")))
{
    alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
}else
if(num_digitalWrite==0){
if(!(loop_value.includes("digitalWrite")))
{
    alert("in loop: do you mean writing digitalWrite?");
}else
if(!(loop_value.includes(declaring[1])))
{
    alert("in loop:  do you mean " + declaring[1]);
}else
if(!(loop_value.includes("HIGH")))
{
    alert("in loop: for turning on the component would you set it HIGH or LOW?");
}}
// else if(pin_used!=pin ||pin2_used!=pin)
// {
//     console.log(pin_used);
//     console.log(pin);
//     alert("please change the pin in declaration to match the one on the circuit");
// }
else {
    alert("perfect code!10");
    perfect_code=true;
}
//console.log((setting_up.match(/pinMode/g)).length);

}
 }

}
function led_buzzer_change()
{
    console.log(button)
    console.log(red_led &&!button)

if(num_led==1)
{
    if(perfect_code && conn1&& conn2)
    {
    
if(red_led &&!button)
{
    canvasd.style.background = "url(images/red.jpg)"
}
else if(yellow_led &&!button) 
{
    canvasd.style.background = "url(images/yellow_background.jpg)"
}
// else if(red_led && yellow_led)
// {
//     alert("2 leds are on")
// }
else if(buzzer)
{
    var snd = new Audio("old-fashioned-door-bell-daniel_simon.mp3");
   console.log("testtt")
    snd.play();
}
}
}
// if(red_led&&yellow_led)
// {
//     console.log("2 leds")
//     alert("both leds are on")
// }


}
function led_blink()
{ 
    console.log(ledd)
    console.log(red_led)
    if (red_led){
    if(( !yellow_led))
    {
        
        console.log(num_digitalWrite)
        if(num_digitalWrite==2)
        {
            // delay1=1000;
            // delay2=3000;
            delay=true;
            blink=1; 

        }
        else
        if(num_digitalWrite==6)
        {
            // delay1=1000;
            // delay2=3000;
            delay=true;
            blink=3;    
        }
        else
        if(delay_always>=1)
        {
            // delay1=1000;
            // delay2=3000;
            delay=true;
            blink=4;  

        }

//count of digitalWrite is twice


    }
}
}
function getting_delay()
{

  if(delay)
  {
      if(blink==1 )
      {
          matches = setting_up.match(/\d+/g); 
          delay1=matches[0];
          delay2=matches[1];
          console.log(delay2);
          console.log(delay1);

      }
      else
      
          if(blink==4)
          {
            matches = loop_value.match(/\d+/g); 
            delay1=matches[0];
            delay2=matches[1];
            console.log(delay2);
            console.log(delay1);

          }

      
      else 
      if(blink==3)
      {
        matches = setting_up.match(/\d+/g); 
        delay1=matches[0];
        delay2=matches[1];
        delay3=matches[2];
        delay4=matches[3];
        delay5=matches[4];
        delay6=matches[5];
        console.log(delay1);
        console.log(delay2);
        console.log(delay3);
        console.log(delay4);
        console.log(delay5);
        console.log(delay6);

      }
  }
        //var str = "pinMode( x , OUTPUT ) digitalWrite( x , HIGH ) delay( 5000 )  digitalWrite( x , LOW )  delay( 4000 ) digitalWrite( x , HIGH )  "; 
       // var i=0 
    //   alert( matches[0] + matches[1] + matches[2]); 
          
        // document.getElementById("Geeks").innerHTML 
        //     = "Where 35 is the first, 5 is the second" 
        //     + " and 88 is the third number" 

}
// function toggle() {
//     var buttonn = document.getElementById("press")
//     console.log(button)
//     if(button)
//     {
          
  
//       buttonn.style.visibility = 'visible';
//     }
 
//   }