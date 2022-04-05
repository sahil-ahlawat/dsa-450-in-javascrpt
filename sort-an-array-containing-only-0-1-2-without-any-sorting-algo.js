let arr= [0,2,1];//201,021
// have to sort this without any sorting also
// my idea is to pick 0 and put it before or after 021
// if first encounter if 1, put 0 before 1 else put 0 after 1
if(arr[0] === 0){
  if(arr[1] !== 1 )
  {
    let buffer = arr[1];
    arr[1] = arr[2];
    arr[2] = buffer;
  }
}
else if(arr[0] === 1){
  if(arr[1] === 2 )
  {
    let buffer = arr[0];
    arr[0] = arr[2];
    arr[2] = buffer;
  }
  else{
    let buffer = arr[0];
    arr[0] = arr[1];
    arr[1] = buffer;
  }
}
else{
  if(arr[1] !== 1 )
  {
    let buffer = arr[1];
    arr[1] = arr[2];
    arr[2] = buffer;
  }
}
console.log(arr)
