$('.pop').click(function(){
    var judulregion = ["", "Surabaya", "Sidoarjo", "Malang", "Gresik", "Pasuruan", "Jombang", "Kediri", "Tulungagung", "Blitar", "Banyuwangi", "Bali", "Bandung", "Jakarta", "Balikpapan", "Madiun", "Madura", "Mataram", "Lamongan", "Jogja"];
    var kota = ["", "Surabaya", "Sidoarjo", "Malang", "Gresik", "Pasuruan", "Jombang", "Kediri", "Tulungagung", "Blitar", "Banyuwangi", "Bali", "Bandung", "Jakarta", "Balikpapan", "Madiun", "Madura", "Mataram", "Lamongan", "Yogyakarta"];
    var no_telpon = ["", "(081252793471)", "(082225221827)", "(08970357077)", "(087753050605) ", "(085852235675)", "(085815122656)", "(085794349249)", "(0857478967100)", "(085608249492)", "(082331101906)", "(089622738853)", "(08157115363)", "(087851147172)", "(082158575885)", "(082141870957)", "(087850166696)", "(083129093237)", "(085655140095)", "(083844171240)"];
    var nama = ["", "Radinal S", "Anindya K", "Endita M", "Dian Kartika", "Umi Bariroh", "Loloanes", "Ayub", "Dhiah", "Theda", "Riska", "Era", "Saras", "Maria emil", "Mahfira leily", "Dita Errin", "Nadzifah Marista", "Triana febriastuti", "Feby fitri", "Yogi Maulana"];
    var isi = [];
    var k = $(this).attr('data-id');
    $('#region').html(judulregion[k]);
    $('#nama_sekolah').html(nama[k]);
    $('#cp_region').html(no_telpon[k]);
    
    $('#myModal').modal(isi[k]);
});

function onclick_hadiah(){
    $("#hadiah").toggle();
    document.getElementById('hadiah').scrollIntoView()
}

function onclick_hadiahcpse(){
    $("#hadiahcpse").toggle();
    document.getElementById('hadiahcpse').scrollIntoView()
}

function onclick_silabus(){
    alert('sukses');
}