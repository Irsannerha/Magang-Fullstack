var rows1 = '';
console.log("Bintang pertama");
for ( var i = 0; i < 5; + i++ ) {
  rows1 += '*';
  rows1 += '\n';

}
console.log(rows1);

var rows2 = '';
console.log("intang kedua");
for ( var i = 0; i < 5; + i++ ) {
  rows2 += '*****';
  rows2 += '\n';

}
console.log(rows2)

var rows3 = '';
console.log("Bintang ketiga");
for ( var i = 0; i < 5; + i++ ) {
   for ( var j = 0; j <= i; j++ ){
     rows3 += '*';
   }
  rows3 += "\n";

}
console.log(rows3);
