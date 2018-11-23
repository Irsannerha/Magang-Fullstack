function pasanganTerbesar(num) {
  // you can only write your code here!
  // function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
  var arr = num.toString().split('');  // untuk menampung pasangan angka yang dijadikan ke string
  var hasil = [];
  for (var i = 0; i < arr.length - 1; i++) { //var baru untuk menampung hasil yang undefined
    hasil[i] = Number(arr[i] + arr[i + 1]);
    console.log(hasil)
  }
  var terbesar_sementara= hasil[0];
  for (var j = 1; j < hasil.length; j++){ //pengulangan pasangan ketika undefined
    if(hasil[j] > terbesar_sementara){ //hasil akan dikembalikan ke pasanganAngka

      terbesar_sementara = hasil[j];
      console.log(hasil[j])
    }
  }
  return terbesar_sementara;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99