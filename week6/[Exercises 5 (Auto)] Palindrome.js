function palindrome(kata) {
  // you can only write your code here!
  var hasil='';
  // Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
  for(var i=kata.length-1;i>=0;i--){ 
    hasil+=kata[i]
  }
  if(kata===hasil){
  }
  else{
    return false
  }
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false