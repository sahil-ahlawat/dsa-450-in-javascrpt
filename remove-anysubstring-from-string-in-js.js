let string = "geeksofgeeks";
let newstring = "";
let stringtoremove = "geek";
for(let i =0; i<string.length - stringtoremove.length;i++){
  let stringtocompare = "";
  for(let j = i; j<i+stringtoremove.length;j++){
    stringtocompare = stringtocompare+string[j];
  }
  
  if(stringtocompare != stringtoremove){
    
    newstring = newstring+string[i];
  }
  else{
    i = i + stringtoremove.length - 1;
  }
}
console.log(newstring);
// js inbuil function with regex /anystring/gi
console.log(string.replace(/geek/gi,""));
