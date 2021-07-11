//Soal Nomor 1
document.write("Soal Nomor 1")
let a = 1;

for(a=1; a<=100; a++){
    document.write("User ke-" + a + "<br>");
}

//Soal Nomor 2 
document.write("Soal Nomor 2")
let b = 0; 

for(b=0;b<=18;b+=2){
document.write(b);
} 

//Soal Nomor 3
document.write("Soal Nomor 3")
let c = 0;

for(c=0;c<=20;c++){
    if(c%2==0){
        document.write(c + " bilangan genap");
    }else if(c%2==1){
        document.write(c + " bilangan ganjil");
    }
}

//Soal Nomor 4
document.write("Soal Nomor 4")
let klik = confirm("Apakah anda mau mengulang?");
let jumlahKlik = 0;

while(klik){
    jumlahKlik++;
    klik = confirm("Apakah anda mau mengulang?");
}

if(klik==false){
alert("Anda telah melakukan pengulangan sebanyak " + jumlahKlik + " kali");
}

//Soal Nomor 5
document.write("Soal Nomor 5")
let jawaban = prompt("Sebutkan kepanjangan dari nama IB ?");

while(jawaban!=undefined){
    prompt("Jawaban Kosong. Silahkan Ulangi!")
if(jawaban!="Impact Byte"){
jawaban = prompt("Sebutkan kepanjangan dari nama IB");
}
else{
    alert("Selamat jawaban kamu benar. Kamu berhak dapat hadiah piring cantik.");
    break;
}
}