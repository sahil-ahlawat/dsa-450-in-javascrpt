let string = "geeksofgeeks";
let newstring = "";
function includes(str,substr){
  for(let i = 0;i<str.length;i++){
    if(str[i] == substr){
      return true;
    }
  }
  return false;
}
// sort array first
string = string.split("");
for(var i = 0; i < string.length; i++){
    
   // Last i elements are already in place 
   for(var j = 0; j < string.length; j++){
      
     // Checking if the item at present iteration
     // is greater than the next iteration
     if(string[j] > string[j+1]){
        
       // If the condition is true then swap them
       var temp = string[j]
       string[j] = string[j + 1]
       string[j+1] = temp
     }
   }
 }
 // Print the sorted array
 //console.log(string);

string = string.join('');
for(let i =0; i<string.length;i++){
  // console.log("frequency of "+string[i]+" is ");
  let frequency = "";
  for(let j = 0; j<string.length;j++){
    if(string[i] == string[j]){
      frequency++;
    }
    
  }
  if(!includes(newstring, string[i])){
    newstring = newstring+string[i]+frequency;
  }
// console.log(frequency);
}
console.log(newstring);
