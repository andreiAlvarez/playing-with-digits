//solution 1 
function digPow(n, p){
  var sum = 0;  
  var temp = n;
  
  while (temp > 0) {
    sum += Math.pow(temp % 10, temp.toString().length + p - 1); 
    temp = Math.floor(temp / 10);
  }
  
  return (sum % n === 0) ? sum / n : -1;  
}

//clever solution 
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
