
// fun #1
function summation(n){
  var result= 0;
  for (var i = 1; i<=n; i++){
    result += i;
  }
  return result;
}

// fun #2
function avg(numbers){
var sum = 0;
  for (var i = 0 ; i<numbers.length; i++){
      sum += numbers[i];
  }
  return sum/i;
}

// fun #3
function summationEven(num){
  var sum = 0;
    for(var i = 0; i<num; i++){
        if(i % 2 === 0 ){
          sum += i; }
    }
    return sum;
}

// fun #4
function reverse(word){
  var reversed = "";
  for (var i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
  }
  return reversed;
}

// fun #5
function addDashes(words){
  if (Array.isArray(words)) // to check is the argument is array ot Not!
  {return words.join('-');}
  return "sorry, try to pass a array of values ";
}

// fun #6
function countUpAndDown(n){
  var result = "";
  for( var i = 1; i<n; i++){
    result += i+" ";
  }
  for( var i = n; i>0; i--){
    result += i+" ";
  }
  return result;
}

// fun #7
function wordsWithA(words){
  if (Array.isArray(words)) // to check is the argument is array ot Not!
  {   var result = [];
      for(var i = 0; i < words.length; i++){
          if(words[i].includes("A") || words[i].includes("a")){
            result.push(words[i]);
          }
      }
    return result;
  }
  else{
    return "sorry, try to pass a array of values ";
  }
}

// fun #8
function longestWord(word) {
    var arr = word.split(" ");
    var longestLength = 0;
    var longest = "";
    for (var i = 0; i < arr.length; i++) {
        if (longestLength < arr[i].length) {
            longestLength = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
