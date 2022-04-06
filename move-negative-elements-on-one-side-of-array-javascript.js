let a = [-1,2,0,1,1,0,2,-2,3,5,1,-1,2,-1,7];
let negarr = [];
for(let i =0; i< a.length; i++){
  if(a[i] < 0){
    // move in start
    negarr.push(a[i])
    a.splice(i,1);
    
  }
}
a = [...negarr,...a];
console.log(a);
