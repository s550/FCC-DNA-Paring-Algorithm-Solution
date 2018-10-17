/*This one was easy once I figured it out had to make pairs using a structure of 
T = TA G = GC A = AT C = CG then I had to make them into mini arrays using splice. 
I had to set the number of cuts to 5 manually since arr gets smaller every time I use splice*/


function pairElement(str) {
var pairs = str.split("");    
var arr = [];
var arr1 = [];
  
for(var i = 0; i < pairs.length; i++){

if(pairs[i] === "A"){
     arr.push(pairs[i],"T");
    
   }
   if(pairs[i] === "T"){
     arr.push(pairs[i],"A");
   }
  if(pairs[i] === "C"){
    arr.push(pairs[i],"G");
  }
  if(pairs[i] === "G"){
    arr.push(pairs[i],"C");
  }
}
for(var v = 0; v < 5; v++)  {
arr1.push(arr.splice(0,2));
  
}
  return arr1;
}


pairElement("ATCGA");
