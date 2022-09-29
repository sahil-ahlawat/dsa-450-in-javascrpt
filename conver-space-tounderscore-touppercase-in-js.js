let simplestr = "this is a var";
let javavar = "this_is_a_var";
let cppvar = "thisIsAVar";
let newvar = "";
for(let i = 0; i<simplestr.length; i++){
  if(simplestr[i] == " "){
    newvar = newvar+"_";
  }
  else{
    newvar = newvar+simplestr[i];
  }
}
console.log("Java var is "+newvar);
let prevchar = "";
let newcppstr = "";
for(let i = 0; i<simplestr.length;i++){
  if(simplestr[i] == " " || simplestr[i] == "_"){
    newcppstr = newcppstr+"";
  }
  else{
  if(prevchar == " " || prevchar == "_"){
    newcppstr = newcppstr+simplestr[i].toUpperCase();
  }
  else{
    newcppstr = newcppstr+simplestr[i];
  }
  }
  prevchar = simplestr[i];
}
console.log("CPP str is "+newcppstr);
