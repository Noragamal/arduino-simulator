
function light_on()
{
    
    lightning=!lightning
    if(!lightning)
    {
        canvasd.style.background = "url(images/black.png)";
    }
    else{
        canvasd.style.background = "url(images/mmm.jpg)";
        
    }
    if(lightning &&ldr)
    {
        alert("light on");
    }
}
function sensor()
{
    // console.log(ledd);
    // console.log(lightning);
    if(conn1 && conn2){
    if(ledd && !lightning && perfect_code)
    {
        alert("turning light on");
        canvasd.style.background = "url(images/mmm.jpg)";
    }
    if(!ledd  && !lightning && perfect_code)
    {
        //var print = dl[11]+dl[14];
        alert("Its DARK, Turn on the LED : ");
        canvasd.style.background = "url(images/mmm.jpg)";
       
    }
}
    
   

}