let arr= [-3,-2,-1,0,1,2,3,4,5,6,7,8,9];
let kmin = 2; //ex: find second min element
let kmax = 3; //ex: find third max element
let max = Number.NEGATIVE_INFINITY;
let min = Number.POSITIVE_INFINITY;
let minarr = arr;
let maxarr = arr;
for(let j = 0; j < kmin; j++){
  // remove min element from array;
  minarr = minarr.filter((v)=>{
  
  if(v != min){
    return v
  }
})
  min = findmin(minarr);
} 
for(let k = 0; k < kmax; k++){
  // remove max element from array;
  maxarr = maxarr.filter((v)=>{
  
  if(v != max){
    return v
  }
})
  max = findmax(maxarr);
}
function findmin(arr){
  
  let min = Number.POSITIVE_INFINITY;
  for(let i = arr.length -1; i >= 0; i--){
  //console.log(arr[i]);
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
}
function findmax(arr){
  let max = Number.NEGATIVE_INFINITY;
  for(let i = arr.length -1; i >= 0; i--){
  //console.log(arr[i]);
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}

console.log(`Max element number `+ kmax +` is : ` +max)
console.log(`Min element number `+ kmin +` is : `+min)
