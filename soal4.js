let klik = confirm("Apakah anda mau mengulang?");
let jumlahKlik = 0;

while(klik){
    jumlahKlik++;
    klik = confirm("Apakah anda mau mengulang?");
}

if(klik==false){
alert("Anda telah melakukan pengulangan sebanyak " + jumlahKlik + " kali");
}



