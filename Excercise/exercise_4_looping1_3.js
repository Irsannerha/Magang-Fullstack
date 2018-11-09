var nilai = 1;
var akhir = 100;
while( nilai <= akhir ){
if(nilai%2==0)
{
console.log(nilai+" adalah bilangan genap" );
} else
{
console.log(nilai+" adalah bilangan ganjil" );
}
nilai++;
}

for(var tambah2 = 1; tambah2 <= 100; tambah2+=2){
  if((tambah2%3)===0){
    console.log(tambah2 + ' KELIPATAN 3');
  }
  else {
    }
}


for(var tambah5 = 1; tambah5 <= 100; tambah5+=5){
  if((tambah5%6)===0){
    console.log(tambah5 + ' KELIPATAN 6' );
  }
  else {
  }
}


for(var tambah9 = 1; tambah9 <= 100; tambah9+=9){
  if((tambah9%10)===0){
    console.log(tambah9 + ' KELIPATAN 10');
  }
  else {

  }
}