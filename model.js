var digital_pins= [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
var digital=false;
var dx;
var ds;
var dl;
function myFunction(){
   
    debug_declare();
    debug_setup();
    debug_loop();
    
};  
  function debug_declare(){
      //console.log(dx.length);
      dx=declaration.value.split(' ');
      var dx_length=dx.length;
      if(dx_length>0){

   
    if ((dx[0]!="int"))
    {
        alert ( "wrong declaration type written " + dx[0]);
    }
    for(var i=0;i<digital_pins.length;i++){
    if(dx_length>3 &&dx[3]==digital_pins[i]){
        digital=true;
        break;
    }
  }
    if(!digital){
        alert("please use a digital pin for declaration");
    }
 }
}
function debug_setup(){
    ds= setup.value.split(' ');
    var ds_length=ds.length;
    if(ds_length>0){
        if(ds[0]!="pinMode(")
        {
            alert("in setup: did you mean writing pinMode? :)");

        }
        if(ds[1]!=dx[1])
        {
            alert("in setup: do you mean "+ dx[1]);
        }
        if(ds[3]!="OUTPUT")
        {
            alert("in setup: you have 2 options either setting it as OUTPUT or INPUT");
        }
    }
}
function debug_loop(){
    dl= loop.value.split(' ');
    var dl_length=dl.length;
    if(dl_length>0){
        if(dl[0]!="digitalWrite(")
        {
            alert("in loop: do you mean writing digitalWrite?");
        }
        if(dl[1]!=ds[1])
        {
            alert("in loop:  do you mean " + dx[1]);
        }
        if(dl[3]!="HIGH")
        {
            alert("in loop: for turning on the led would you set it HIGH or LOW?");
        }
        else
        {
            alert("perfect code!");
        }





}

  
}