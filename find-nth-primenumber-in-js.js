let n = 410;
let i = 0;
let numis = 0;
function isprimenumber(n){
  
  if(n == 2){
    return true;
  }
  else if(n > 2){
    for(let i = 2; i < n; i++){
      if(n%i == 0){
        return false;
      }
    }
  }
  else{
    return false;
  }
  return true;
}
console.log(isprimenumber(0));

while(n > 0){
  
  if(isprimenumber(i)){
    numis = i;
    n--;
  }
  i++;
}
console.log(2+"nd prime number is : "+numis);
