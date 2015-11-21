$('.pop').click(function(){
    var judulregion = ["", "Surabaya", "Sidoarjo", "Malang", "Gresik", "Pasuruan", "Jombang", "Kediri", "Tulungagung", "Blitar", "Banyuwangi", "Bali", "Bandung", "Jakarta", "Balikpapan", "Madiun", "Madura", "Mataram", "Lamongan", "Jogja"];
    var kota = ["", "Surabaya", "Sidoarjo", "Malang", "Gresik", "Pasuruan", "Jombang", "Kediri", "Tulungagung", "Blitar", "Banyuwangi", "Bali", "Bandung", "Jakarta", "Balikpapan", "Madiun", "Madura", "Mataram", "Lamongan", "Yogyakarta"];
    var no_telpon = ["", "(081252793471)", "(082225221827)", "(08970357077)", "(087753050605) ", "(085852235675)", "(085815122656)", "(085794349249)", "(0857478967100)", "(085608249492)", "(082331101906)", "(089622738853)", "(08157115363)", "(087851147172)", "(082158575885)", "(082141870957)", "(087850166696)", "(083129093237)", "(085655140095)", "(083844171240)"];
    var nama = ["", "Radinal S", "Anindya K", "Endita M", "Dian Kartika", "Umi Bariroh", "Loloanes", "Ayub", "Dhiah", "Theda", "Riska", "Era", "Saras", "Maria emil", "Mahfira leily", "Dita Errin", "Nadzifah Marista", "Triana febriastuti", "Feby fitri", "Yogi Maulana"];
    var isi = [];
    var tempat_seleksi = [ "", "SMAN 9 Surabaya", "SMPN 2 Sidoarjo", "SMAN 3 Malang", "SMAN 1 Gresik", "SMAN 1 Bangil", "SMAN 1 SOOKO Mojokerto", "SMA Negeri 2 Kediri", "SMAN 1 Tulungagung", "SMAN 1 Blitar", "SMAN 1 Genteng", "SMAN 1 Denpasar", "x", "SMFK BPK PENABUR", "SMAN 1 Balikpapan", "SMAN 2 Madiun", "SMKN 3 Pamekasan", "SMAN 1 Mataram", "SMAN 2 Lamongan", "x"];
    var k = $(this).attr('data-id');
    $('#region').html(judulregion[k]);
    $('#nama_sekolah').html(tempat_seleksi[k]);
    $('#cp_region').html(nama[k]+" - "+no_telpon[k]);
    
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