var worker = "0";
var colors = ["red", "black"];
var randomColor2 = ["red", "black"];
var randomColor;


function start(){

    randomColor = Math.floor(Math.random() * colors.length);
    randomColor2 = Math.floor(Math.random() * colors.length);

    if(worker == "0"){
        worker = setInterval(colorChange, 80);

    }



    // worker = setInterval(colorChange, 3000);


}





function colorChange(){


    if(randomColor == "0"){
        var clrBox = document.getElementById("clrBox2").classList.add("bg-danger");
        var clrBox = document.getElementById("clrBox2").classList.remove("bg-black");
	randomColor = Math.floor(Math.random() * colors.length);



    }else{
        var clrBox = document.getElementById("clrBox2").classList.add("bg-black"); 
        var clrBox = document.getElementById("clrBox2").classList.remove("bg-danger"); 
	randomColor = Math.floor(Math.random() * colors.length);

  

    }



    // var clrBox = document.getElementById("clrBox").classList.remove("bg-danger");
    // var clrBox = document.getElementById("clrBox").classList.add("bg-black");
    // var clrBox = document.getElementById("clrBox").classList.remove("bg-black");
    
    setTimeout(() => {
        clearInterval(worker);
        worker = "0";
    }, 3000); 

}


function colorChange(){

    
    if(randomColor == "0"){
        var clrBox = document.getElementById("clrBox2").classList.add("bg-danger");
        var clrBox = document.getElementById("clrBox2").classList.remove("bg-black");
	randomColor = Math.floor(Math.random() * colors.length);



    }else{
        var clrBox = document.getElementById("clrBox2").classList.add("bg-black"); 
        var clrBox = document.getElementById("clrBox2").classList.remove("bg-danger"); 
	randomColor = Math.floor(Math.random() * colors.length);

  

    }



    // var clrBox = document.getElementById("clrBox").classList.remove("bg-danger");
    // var clrBox = document.getElementById("clrBox").classList.add("bg-black");
    // var clrBox = document.getElementById("clrBox").classList.remove("bg-black");
    
    setTimeout(() => {
        clearInterval(worker);
        worker = "0";
    }, 3000); 




}