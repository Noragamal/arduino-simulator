function ldr_backendd()
{
    var analo;
    console.log(analo);
    if(ldr &&!ledd)
    {
        if(!(declare.includes("int")))
        {
            alert("wrong data type written");
        }
        for(var i=0;i<declare.length;i++)
        {
            
            if(declare[i+1]<declare.length && declare[i]=="=" )
            {
                for(var j=i+1;j<declare.length;j++){
                    if(declare[j]!=" " && declare[j]!=";" )
                    {
                        pin_used+=declare[j];
                    }
                    else{
                        if(declare[j]==" ")
                        continue;
                    }
                }
                console.log(pin_used)
        }
    }
    for (var i = 0; i < analog_bool.length; i++) {
        console.log(pin_used.includes(i))
        console.log(pin_used.includes("A"))
        if (analog_bool[i]==1 &&pin_used.includes("A") && pin_used.includes(i)) {
            analog = true;
            analo="A"+i;
            break;
        }
        else
        {
            analog=false;
        }
    }
        if (!analog) {
            alert("please use analog pin for declaration53");
        }else
        if(!(setting_up.includes("pinMode")))
        {
            alert("in setup: did you mean writing pinMode? :)");
        }else
        if(!(setting_up.includes(declaring[1])))
        {
            alert("in setup: do you mean " + declaring[1]);
        }else
        if(!(setting_up.includes("INPUT")))
        {
            alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
        }else
        if(!(loop_value.includes(declaring[1])))
        {
            alert("in loop:  do you mean " + declaring[1]);
        }else
        if(!(loop_value.includes("analogRead")))
        {
            alert("you should use analogRead to value the value of the sensor");
        }else if(pin_used!=analo)
        {
            console.log(pin_used);
            console.log(analo);
            alert("please change the pin in declaration to match the one on the circuit");
        }
        else {
            alert("perfect code!123");
            perfect_code=true;
        }


}


}

function ldr_led()
{
    if(ledd&&ldr){

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
             if ((pin_used == digital_pins[i])||(pin2_used == digital_pins[i])) {
                 digital = true;
                 break;
             }
             else
             {
                 digital=false;
             }


            }


            // for (var i = 0; i < analog_pins.length; i++) {
            //     if ((pin_used == analog_pins[i])|| (pin2_used == analog_pins[i])) {
            //         analog = true;
            //         break;
            //     }
            //     else
            //     {
            //         analog=false;
            //     }
            // }
            //     if (!analog) {
            //         alert("please use analog pin for declarationj");
            //     }
            



 
 
             if (!digital) {
                 alert("please use a digital pin for declarationp");
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
     alert("perfect code!144");
     perfect_code=true;
 }
 //console.log((setting_up.match(/pinMode/g)).length);
 
 }
  }
}