var colors=generatecolors (6);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#messagedisplay");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var noofsquares=6;
easy.addEventListener("click",function(){
        easy.classList.add("selected");
        hard.classList.remove("selected");
        noofsquares=3;
        colors=generatecolors(noofsquares);
        pickedcolor=pickcolor();
        colordisplay.textContent=pickedcolor;
        for(var i=0;i<squares.length;i++){
        	if(colors[i]){
        		squares[i].style.background=colors[i];
        	}
        	else{
        		squares[i].style.display="none";
        	}
        }
});	
hard.addEventListener("click",function(){
        easy.classList.remove("selected");
        hard.classList.add("selected");
        noofsquares=6;
         colors=generatecolors(noofsquares);
        pickedcolor=pickcolor();
        colordisplay.textContent=pickedcolor;
        for(var i=0;i<squares.length;i++){
        	if(colors[i]){
        		squares[i].style.background=colors[i];
        	
        		squares[i].style.display="block";}
       
        }
});	

resetbutton.addEventListener("click",function(){
	colors=generatecolors(noofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	messagedisplay.textContent="";
	this.textContent="New colors"
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue"
});
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var selected=this.style.background;
		if(selected===pickedcolor)
		{
			messagedisplay.textContent="CORRECT!";
			resetbutton.textContent="Play Again?";
			changecolors(selected);
			h1.style.background=selected;
			}
			else 
				{ this.style.background="#232323";
					messagedisplay.textContent="TRY AGAIN!";
			        
			      }
	});
}

function changecolors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
};
function pickcolor(){
        var random=Math.floor(Math.random() *colors.length);
        return colors[random];
};
function generatecolors(num){
	  var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	
}
return arr; 
};
function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
        return("rgb("+r+", "+g+", "+b+")");
};