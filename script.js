let colors = ['red','blue','green','orange','yellow','violet','aliceblue','antiquewhite','aqua','aquamarine','aquamarine','azure','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','slategray','slategrey','snow','springgreen','steelblue','white','darkblue','darkcyan','darkgoldenrod','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','dodgerblue','deepskyblue','deeppink','darkviolet'];

function change(){
    let catch_color = colors[Math.floor(Math.random() * colors.length)];
    
    document.getElementById('background').style.backgroundColor = catch_color;
    document.getElementById('color').innerHTML = catch_color;
}



///generate random colors 
let allvalue = ['0','1','2,','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function generate(){
    let hex = '#';

    //generate value
    let val1 = allvalue[Math.floor(Math.random() * allvalue.length)];
    let val2 = allvalue[Math.floor(Math.random() * allvalue.length)];
    let val3 = allvalue[Math.floor(Math.random() * allvalue.length)];
    let val4 = allvalue[Math.floor(Math.random() * allvalue.length)];
    let val5 = allvalue[Math.floor(Math.random() * allvalue.length)];
    let val6 = allvalue[Math.floor(Math.random() * allvalue.length)];


    //add # and value 
    let final_color_val = hex + val1 + val2 + val3 + val4 + val5 + val6;
    
    //set background color 
    document.getElementById('background').style.backgroundColor = final_color_val;

    //set text value 
    document.getElementById('color2').innerHTML = final_color_val;


}