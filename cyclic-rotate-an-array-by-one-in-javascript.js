let a = [0,1,2,3,4,5,6];
let rotations = 1; // set number of rotations

for(let r = 0; r<rotations;r++){
  
  let firstelement = a[0];
  for(let i =0; i <a.length; i++){
    if(i == a.length -1)
    {
      a[i] = firstelement;
      
    }
    else{
         a[i] = a[i+1];
    }
  
  }
}
console.log("Array after "+rotations+" rotations is : ")
console.log(a)
