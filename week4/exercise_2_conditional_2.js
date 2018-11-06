var nama = prompt('Nickname ente gan');
var peran = prompt('Pilih Peran(Ksatria, Tabib, Penyihir): ');
var umur = prompt('Umur dan Nickname(10 - 35): ');

if (umur < 10 ) {
  console.log("Maaf adik TIDAK mencukupi");
} else if (umur >= 34)  {
  console.log("Maaf Game ini khusus untuk anak muda cuy!");
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
