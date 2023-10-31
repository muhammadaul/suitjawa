
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
