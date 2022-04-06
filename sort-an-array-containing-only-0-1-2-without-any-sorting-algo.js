let a = [0,0,1,2,0,1,1,0,2,2,0,0,1,1,2,1,0];
let zarr = [];
let oarr = [];
let tarr = [];
for(let i = 1; i < a.length; i++){
  
    
  if(a[i] === 0 ){
    
   zarr.push(a[i]);
  }
  else if(a[i] === 1){
     oarr.push(a[i])
  }
  else{
    tarr.push(a[i])
  }
}
let finalarr = [...zarr,...oarr,...tarr];
console.log(finalarr);
