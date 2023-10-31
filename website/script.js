// // var jmlAngkot = 10
// // var angkotBeroperasi = 5
// // var noAngkot = 1

// // while(noAngkot <= angkotBeroperasi){
// //     console.log('angkot No. ' + noAngkot + ' beroperasi dengan baik')
// //     noAngkot++
// // }
// // for (noAngkot = 6; noAngkot <= jmlAngkot; noAngkot++){
// //     console.log('angkot No. ' +noAngkot + ' tidak beroperasi')
// // }

// // var angka = prompt('masukkan angka:')

// // if(angka % 2 == 0){
// //     alert(angka + ' bilangan genap');
// // }else{
// //     alert(angka +' bilangan ganjil');
// // }

// // var jmlAngkot = 10;
// // var angkotBeroperasi = 6;

// // for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

// //     if(noAngkot < angkotBeroperasi){
// //         console.log('angkot No ' +noAngkot+ 'sedang beroperasi')
// //     }else{
// //         console.log('angkot No. ' + noAngkot + 'tidak beroperasi')
// //     }

// // }

// // var jmlAngkot = 10;
// // var angkotBeroperasi =6;

// // for(var noAngkot=1; noAngkot <= jmlAngkot; noAngkot++){
// //     if(noAngkot< angkotBeroperasi){
// //         alert('angkot No. '+ noAngkot+' beroperasi dengan baik')
// //     }else{
// //         alert('angkot No. '+ noAngkot+ ' tidak beroperasi dengan baik')
// //     }
// // }

// var angka = prompt('masukkan angka');

// if(angka % 2 == 0){
//     alert( angka+ 'bilangan genap')
// } else if (angka % 2 == 1) {
//     alert( angka +'bilangan ganjil')
// } else {
//     alert('anda memasukkan angka')
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for(var noAngkot = 1; noAngkot<=jmlAngkot; noAngkot++){

//     if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
//         console.log('angkot No. '+ noAngkot + ' sedang beroperasi')
//     }else if(noAngkot === 5 || noAngkot ===8 || noAngkot ===10){
//         console.log('angkot no. '+ noAngkot + ' sedang lembur')
//     }else{
//         console.log('angkot no. '+ noAngkot+ ' sedang tidak beroperasi')
//     }

// };

// var tanya = true

// while (tanya) {

//     //menentukan pertanyaan
//     var p = prompt('pilih : gajah, semut, orang')
//     var comp = Math.random();

//     //membuat pernyataan
//     if( comp < 0.34){
//         comp = 'gajah'
//     }   else if(comp >= 0.34 && comp <= 0.67){
//         comp = 'orang'
//     }else{
//         comp = 'semut'
//     }

//     //proses 
// var hasil = '';

//     if( p == comp){
//         hasil = 'SERI!'
//     }else if( p == 'gajah'){
//         hasil = ( comp == 'orang')?'MENANG!':'KALAH!'
//     }else if( p == 'orang'){
//         hasil = (comp == 'gajah')?'KALAH!':'MENANG!'
//     }else if ( p == 'semut'){
//         hasil = (comp = 'orang')?'KALAH!':'MENANG!'
//     }else{          
//         hasil = 'memasukan pilihan yang salah!!'
//     } 
// //penyelesaian
// alert('kamu memilih '+ p+' dan komputer memilih '+ comp +'\nmaka hasilnya adalah kamu :'+ hasil)

// tanya = confirm('apakah anda ingin bermain lagi?')
// }

// alert('terima kasih sudah bermain')


alert('SUIT JAWA\nCREATE BY : ABIT \nSELAMAT BERMAIN')
alert('Gunakan huruf kecil di setiap memilih')


var tanya = true;

while(tanya){
    p = prompt('pilih : gajah, orang, semut ')
    comp = Math.random()

    if(comp < 0.34){
        comp = 'gajah'
    }else if(comp >= 0.34 && comp < 0.67){
        comp = 'semut'
    }else{
        comp = 'orang'
    }

    var hasil = '';

    if(p == comp){
        hasil = 'SERI'
    }else if(p == 'orang'){
        hasil = (comp == 'gajah')?'KALAH!':'MENANG'
    }else if( p == 'gajah'){
        hasil = (comp == 'orang')?'MENANG!':'KALAH!'
    }else if(p == 'semut'){
        hasil = (comp == 'gajah')?'MENANG!':'KALAH!'
    }else{
        hasil = 'anda memasukkan pilihan yang salah'
    }

    alert('Anda memasukkan '+ p + ' dan komputer memasukkan ' + comp + '\nmaka hasilnya '+ hasil)

    tanya = confirm('apakah anda ingin bermain lagi?')
}

alert('THANKS FOR PLAY THIS GAME')
