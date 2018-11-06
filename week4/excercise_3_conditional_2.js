var nama = 'Irsan';
var peran = 'Ksatria';
var umur = 25;

if (umur < 10) {
  console.log("Maaf ya adik, kamu tidak mencukupi umur");
}else {
  if (umur <= 35) {
    if (nama !== '') {
      console.log("Selamat datang di Dunia Proxytia " + nama);
      if (peran === 'Ksatria') {
        console.log('Hallo Ksatria ' + nama + ' Kamu dapat menyerang dengan senjatamu!');
      }else if(peran === 'Tabib') {
      console.log('Hallo  Tabib' + nama + 'kamu akan membantu temanmu yang terluka.');
    }else if(peran === 'Penyihir') {
      console.log('Hallo  Penyihir' + nama + 'ciptakan keajaiban yang membantu kemenanganmu!');
    }else {
      console.log('Pilih peranmu untuk memulai game!');
    }
    }else {
      console.log("Maaf Gan nama jangan kosong");
    }
  }else {
   console.log("Maaf Gan Ini Game untuk yang muda"); 
  }
}
