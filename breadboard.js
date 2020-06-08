//var counter=0;
var counter1=0;
var counter2=0;
var counter3=0;
// var short_circuit=[0,0,0,0];
function check_breadboard(){
//console.log("jj");
    for(var i=0;i<col0.length;i++)
    {
        if(col0[i]=="1")
        counter++;
        // console.log(counter);
        // console.log(col0);

    }
    for(var i=0;i<col1.length;i++)
    {
        if(col1[i]=="1")
        counter1++;
        // console.log(counter);
        // console.log(col0);

    }
    for(var i=0;i<col3.length;i++)
    {
        if(col3[i]=="1")
        counter3++;
        // console.log(counter);
        // console.log(col0);

    }
    for(var i=0;i<col2.length;i++)
    {
        if(col2[i]=="1")
        counter2++;
        // console.log(counter);
        // console.log(col0);

    }
if(!(ledd && button)){
    if(counter>1)
    {
        alert("alerrt! short circuit. please check breadboard connection")
    }
    if(counter1>1)
    {
        alert("alerrt! short circuit. please check breadboard connection")
    }
    if(counter2>1)
    {
        alert("alerrt! short circuit. please check breadboard connection")
    }
    if(counter3>1)
    {
        alert("alerrt! short circuit. please check breadboard connection")
    }
}



}

// function breadboard_check()
// {
//     console.log("lll")
//     if(positive_terminal)
//     {
//         for(var i=0;i<lines.length;i++)
//         {
//             see(lines[i].x1,lines[i.y1])
//             see(lines[i].x2,lines[i].y2)
//             if(counter==2)
//             {
//                 console.log("short circuit")
//             }
//             counter=0;




//         }
//     }


// }
// function see(x,y)
// {
//     if(x>173 && x<787)
//     {
//         if(y>=625 && y<=634)
//         {
//             counter++;
//         }   
//        else
//             if(y>=651 && y<=662)
//             {
//                counter++; 
//             }   
        
//     }
// }