let a = [0,1,2,10];
let b = [2,3,4,5,6,7,8,9,10]
let union = [...a]
let intersection = []
for(let i =0; i <a.length; i++){
  let common = "no";
  for(let j = 0; j<b.length; j++){
    if(a[i] === b[j]){
      common = "yes"
    }
  }
  if(common === "yes"){
    intersection.push(a[i])
  }
  
}
for(let j = 0 ; j < b.length; j++){
  let common = "no";
  for(let k = 0; k<union.length; k++){
    if(b[j] === union[k]){
      common = "yes"
    }
  }
  if(common === "no"){
    union.push(b[j])
  }
}
console.log("Union is : ")
console.log(union)
console.log("intersection is : ")
console.log(intersection)
