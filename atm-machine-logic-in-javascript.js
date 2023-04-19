let currency = [1000,500,100,50,10,5,1]; //
let num = 3205;// any amount
let i = 0;
let output = []; // this will return all the required currency
while(num > 0){
    if(num >= currency[i]){
      num = num - currency[i];
      output.push(currency[i]);
    }
    else{
      i++;
    }
}
console.log(output);
