let a = [-1,2,9,5,-9,-2,-4,-5,0,1,-1,,17,2,3,4,-4,5,-6,6];
let largestsum = 0;
let largestsumarr = [];
let items = [...a];
let sum = 0;
  // making all sub arrays
  // i is the start index
for (let i = 0; i < items.length; i++)
{
    // j is the number of elements which should be printed
    for (let j = i; j < items.length; j++)
    {
      let subarr = [];
        // print the array from i to j
        for (let k = i; k <= j; k++)
        {
          subarr.push(items[k]);
            
        }
       flargestsum(subarr);
    }
}
 
  function flargestsum(a){
    sum = 0;
    for(let i =0; i < a.length; i++){
      sum = sum + a[i];
    }
    if(sum > largestsum)
    {
      largestsum = sum;
      largestsumarr = a;
    }
  }
console.log("Largest sum for contigious subarray - ")
console.log(largestsumarr)
console.log(" is : ")
console.log(largestsum)
