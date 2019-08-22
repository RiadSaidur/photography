var i=1;
function slidePre(){
    if(i==6){
        i=1;
        var itemName="assets/background"+i+".jpg";
        var item=document.querySelector(".slide");
        item.src=itemName;
    }
    else{
        i++;
        var itemName="assets/background"+i+".jpg";
        var item=document.querySelector(".slide");
        item.src=itemName;
    }
}

function slideNext(){
    if(i==1){
        i=6;
        var itemName="assets/background"+i+".jpg";
        var item=document.querySelector(".slide");
        item.src=itemName;
    }
    else{
        i--;
        var itemName="assets/background"+i+".jpg";
        var item=document.querySelector(".slide");
        item.src=itemName;
    }
}

function preview(x){
    var itemName="assets/background"+x+".jpg";
    var item=document.querySelector(".slide");
    item.src=itemName;
    i=x;
}