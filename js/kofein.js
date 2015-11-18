$('.pop').click(function(){
    var judulregion = ["", "Surabaya", "Sidoarjo", "Malang", "Gresik", "Pasuruan", "Jombang", "Kediri", "Tulungagung", "Blitar", "Banyuwangi", "Bali", "Bandung", "Jakarta", "Balikpapan", "Madiun", "Madura", "Mataram", "Lamongan", "Jogja"];
    var isi = [];
    var k = $(this).attr('data-id');
    // alert(k);
    $('#region').html(judulregion[k]);
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