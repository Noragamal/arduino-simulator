
// function motion_backendd()
// {
// if(motion_sensor)
// {

//   if(!(declare.includes("int")))
//   {
//       alert("wrong data type written");
//   }
//   for(var i=0;i<declare.length;i++)
//   {

//       if(declare[i+1]<declare.length && declare[i]=="=" )
//       {
//           for(var j=i+1;j<declare.length;j++){
//           if(declare[j]!=" " && declare[j]!=";" )
//           {
//               pin_used+=declare[j];
//           }
//           else{
//               if(declare[j]==" ")
//               continue;
//           }
//       }
//       }
//   }
 
//   for (var i = 0; i < digital_pins.length; i++) {
//       if (pin_used == digital_pins[i]) {
//           digital = true;
//           break;
//       }
//       else
//       {
//           digital=false;
//       }
//   }
//       if (!digital) {
//           alert("please use a digital pin for declaration3");
//       }else
//       if(!(setting_up.includes("pinMode")))
//       {
//           alert("in setup: did you mean writing pinMode? :)");
//       }else
//       if(!(setting_up.includes(declaring[1])))
//       {
//           alert("in setup: do you mean " + declaring[1]);
//       }else
//       if(!(setting_up.includes("INPUT")))
//       {
//           alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
//       }else
//       if(!(loop_value.includes(declaring[1])))
//       {
//           alert("in loop:  do you mean " + declaring[1]);
//       }else
//       if(!(loop_value.includes("digitalRead")))
//       {
//           alert("you should use digitalRead to value the value of the  motion sensor");
//       }
//       else if(pin_used!=pin)
//         {
//             console.log(pin_used);
//             console.log(pin);
//             alert("please change the pin in declaration to match the one on the circuit");
//         }
//         else {
//             alert("perfect code!13");
//             perfect_code=true;
//         }



// }



// }


function motion_true(){
    
    think=true;
    console.log(think);
}
function motion_final()
{
    requestAnimationFrame(motion_final);
   // console.log(perfect_code);
    // console.log(dl[8]);
    // console.log(inrange_motionsensor);
    if(inrange_motionsensor && buzzer && perfect_code)
    {
      //  console.log("inrange");
        snd.play();

    }
    else
    {
        snd.pause();
    }
    if(!buzzer && inrange_motionsensor  && perfect_code)
    {
        console.log("inrange");
        //var print = dl[11]+dl[14];
      //  alert("inrange ");
    }

}

