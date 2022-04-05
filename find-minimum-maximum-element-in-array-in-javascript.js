let arr= [1,2,3,6,4,7,0,9,-6,-2,5,0,-9,8,1,7,-2];
let max = 0;
let min = 0;
for(let i = arr.length -1; i >= 0; i--){
  //console.log(arr[i]);
  if(max < arr[i]){
    max = arr[i];
  }
  if(min > arr[i]){
    min = arr[i];
  }
}
console.log("Max element is : "+max)
console.log("Min element is : "+min)
