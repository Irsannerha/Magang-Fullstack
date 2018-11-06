var nama ='Aslan';
var peran ='Ksatria';
var umur = 17;

if (umur < 10 ) {
  console.log("Maaf ya adek !! Game tidak diperkenankan di bawah umur");
}  
 if ( umur >= 35){
   console.log("Maaf Gan !! Khusus Anak Pemuda ini cuy");
 }
else {
  console.log("SELAMAT DATANG DI GAME" + nama );
}
if (nama) {
  console.log("Hallo" + nama);
} else {
  console.log("Tolong diisi Nickname");
}
 

if(peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama );
  console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if( peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama
  );
  console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if(peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama );
  console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}
