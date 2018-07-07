function calendar(){
    var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var d = new Date()
    setText('hari', day[d.getDay()]);
    setText('tanggal', d.getDate());
    setText('bulanTahun', month[d.getMonth()] + ' ' + (1900+d.getYear()));
}
function setText(id, val){
    if(val<10){
        val = '0' + val
    }
    document.getElementById(id).innerHTML = val
}

window.onload = calendar