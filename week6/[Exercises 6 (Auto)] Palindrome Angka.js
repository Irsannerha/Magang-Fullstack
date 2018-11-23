function angkaPalindrome(num) {
  // you can only write your code here!
  // Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
    var angka = num + 1;   
    var reverse = '';   
    while(true) { 
      var i = String(angka); // jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.
    reverse = i.split('').reverse().join('');
    if(angka === Number(reverse)) // jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
    {return angka;}
    angka++;   
    } 
  }


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001