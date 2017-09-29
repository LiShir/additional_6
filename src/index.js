module.exports = function zeros(expression) {
 
  return countzeros(calculateexpression(expression))



  function calculateexpression(expression){
   
    var separElements = expression.split('*');
    
    var result = 1;
    for (var i=0; i < separElements.length; i++){
    var serarEl =   separElements[i];
    
    var patt = new RegExp('!!');
    var isdoublefactorial = patt.test(serarEl);
    var value = parseInt (serarEl, 10);
    
    if (isdoublefactorial == true){
      
      result = multiply(result, doublefactorial(value));
      

    }
    else{
      
      result = multiply(result, factorial(value));
      
    }
  }
  
  return result;
  
  
  }
}
function factorial(n) {
  
  if(n >= 2) {
      return multiply(factorial(n-1), n);
  }
  else {
      return 1;
  }
  
}


function doublefactorial(k) {
  return (k >= 1) ? multiply(k , doublefactorial(k - 2)) : 1;
   
}

function countzeros(u){
  str = String(u);
  var zer =0;

  for (var j = str.length - 1; str[j] == '0'; j--){
    zer++;
  }
    
  return zer;
}



function multiply(first, second) {

  first = ''+first;
  second = ''+second;
  var numbers = [];
  
  for(var i = first.length - 1; i >= 0; i--){
    var mult = parseInt(first[i], 10)
    var next = 0;
    var res = "";
    for(var j = second.length - 1; j >= 0; j--){
      var num = parseInt(second[j], 10)
      var prod = num * mult;
      var rest = prod % 10;
      rest = rest + next;

      next = Math.floor(prod / 10);
      next = next + Math.floor(rest / 10)
      res = (rest % 10) + res;
    }
    if (next != 0) res = next + res;

    numbers.push(res);
  }

  var firstNum = null;
  var sum = numbers[0];

  for(var i = 1; i < numbers.length; i++){
    firstNum = sum;
    var secondNum = numbers[i];
    sum = "";
    for(var j=1; j<=i; j++){
      sum = firstNum[firstNum.length - j] + sum;
    }

    next = 0;
    for (var j=1; j <= secondNum.length; j++){
      var fInd = firstNum.length - j - i;
      var num = 0;
      if (fInd >= 0) { num = parseInt(firstNum[fInd], 10); }
      var plus = parseInt(secondNum[secondNum.length - j], 10);
      var prod = num + plus + next;

      var rest = prod % 10;

      next = Math.floor(prod / 10);
      sum = rest + sum;
    }

    if (next != 0) { sum = next + sum; }
  }

  return sum;
}


