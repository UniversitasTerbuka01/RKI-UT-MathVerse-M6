function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6icigEY2M31":
        Script1();
        break;
      case "5dsTDT49B8p":
        Script2();
        break;
      case "5h7oEYUqtqu":
        Script3();
        break;
      case "6U6G8NJnkYr":
        Script4();
        break;
      case "5g6OdpF4z7N":
        Script5();
        break;
      case "5jmXHELiJxC":
        Script6();
        break;
      case "6AUX9bApfOg":
        Script7();
        break;
      case "60q9BrO5TVJ":
        Script8();
        break;
      case "66XIvAYLbAv":
        Script9();
        break;
      case "5uUwFJE2vBV":
        Script10();
        break;
      case "6Zp3iF4bAME":
        Script11();
        break;
      case "6a8RTzLg2uH":
        Script12();
        break;
      case "5VL5Vm5HhTs":
        Script13();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.5;

}

function Script2()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");


var kelas = player.GetVar("Kelas");

var j1 = player.GetVar("j1");

var j2 = player.GetVar("j2");

var j3 = player.GetVar("j3");

var j4 = player.GetVar("j4");

var j5 = player.GetVar("j5");

var j6 = player.GetVar("j6");

var j7 = player.GetVar("j7");

var j8 = player.GetVar("j8");

var j9 = player.GetVar("j9");

var j10 = player.GetVar("j10");

var j11 = player.GetVar("j11");

var j12 = player.GetVar("j12");

var j13 = player.GetVar("j13");

var j14 = player.GetVar("j14");

var j15 = player.GetVar("j15");

var j16 = player.GetVar("j16");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";
isiFile += "Kelas:" + kelas + "\n";
isiFile += "Materi 1, Kegiatan 2 " + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Aktivitas 1"+ "\n\n";

isiFile += "1. Bagaimana cara kalian membuat bangun ruang yang ada di Gambar tersebut?\n";

isiFile += "Jawab:"+ j5 + "\n\n";



isiFile += "2. Berapa volume tiap bangun ruang yang kalian susun dengan kubus satuan? Jelaskan bagaimana strategimu.!\n";

isiFile += "Jawab:"+j6 + "\n\n";




isiFile += "Aktivitas 2"+ "\n\n";

isiFile += "1. Diskusikan strategi yang kalian gunakan untuk menghitung volume dari ketiga bangun pada Gambar di atas!\n";

isiFile += "Jawab:"+ j7 + "\n\n";



isiFile += "2. Dengan menggunakan hasil pada nomor 1, dapatkah kalian menentukan cara mencari volume suatu balok yang memiliki panjang alas p, lebar alas l, dan tinggi t? Jelaskan alasanmu!\n";

isiFile += "Jawab:"+ j8 + "\n\n";






isiFile += "Aktivitas 3"+ "\n\n";


isiFile += "1. Carilah volume rubik yang berbentuk kubus di Gambar di atas dengan menggunakan kubus satuan yang kalian miliki!\n";

isiFile += "Jawab:"+ j9 + "\n\n";



isiFile += "2. Jelaskan strategi kalian dalam menghitung volume kubus tersebut!\n";

isiFile += "Jawab:"+j10 + "\n\n";



isiFile += "3. Jika kalian ingin menghitung volume suatu kubus dengan panjang sisi s, bagaimana caranya? Jelaskan alasanmu!\n";

isiFile += "Jawab:"+ j11 + "\n\n";



isiFile += "Aktivitas 4"+ "\n\n";


isiFile += "1. Dengan pengalaman menghitung volume balok dan kubus, jika kalian memiliki prisma segitiga seperti yang ada di Gambar di atas (dengan panjang alas sembilan satuan dan tinggi Sembilan satuan), bagaimana caranya untuk menghitung volumenya?\n";

isiFile += "Jawab:"+j12 + "\n\n";



isiFile += "2. Berdasarkan cara no 1, tentukan rumus untuk volume prisma jika diketahui luas alasnya!\n";

isiFile +="Jawab:"+ j13 + "\n\n";



isiFile += "Kesimpulan:"+ "\n\n";

isiFile += "Rumus volume Balok:\n";

isiFile += "Jawab:"+j14 + "\n\n";


isiFile += "Rumus volume kubus:\n";

isiFile += "Jawab:"+j15 + "\n\n";


isiFile += "Rumus volume prisma:\n";

isiFile += "Jawab:"+j16 + "\n\n";


var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 1 Kegiatan 2_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script3()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("k1");

var j2 = player.GetVar("k2");

var j3 = player.GetVar("k3");

var j4 = player.GetVar("k4");

var j5 = player.GetVar("k5");

var j6 = player.GetVar("k6");



var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Materi 1, Kegiatan 3"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Sebutkan rumus untuk menghitung volume balok, kubus, dan prisma segitiga!\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "Bandingkan volume ketiga bangun ruang tersebut. Manakah yang lebih besar dan berapa selisih volumenya?\n";

isiFile += "Jawab:" + j2 + "\n\n";



isiFile += "Apakah data yang diberikan sudah cukup untuk menghitung volume semua bangun ruang? Jelaskan!\n";

isiFile += "Jawab:"+ j3 + "\n\n";



isiFile += "Jika kamu memperbesar volume balok menjadi dua kali lipat dari volume awal, hitung ulang volumenya! Bagaimana perbandingan dari ketiga volume bangun tersebut? Kemudian buat kesimpulan logis tentang hubungan antara ukuran sisi dan volume tersebut!\n";

isiFile += "Jawab:"+ j4 + "\n\n";





isiFile += "Jelaskan mengapa rumus volume prisma segitiga menggunakan setengah dari luas alas dikalikan tinggi prisma!\n";

isiFile += "Jawab:"+ j5 + "\n\n";


isiFile += "Jika kamu salah menghitung volume salah satu bangun, langkah apa yang akan kamu lakukan untuk memperbaikinya?\n";

isiFile += "Jawab:"+ j6 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 1 Kegiatan 3_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script4()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");


var kelas = player.GetVar("Kelas");

var j1 = player.GetVar("j1");

var j2 = player.GetVar("j2");

var j3 = player.GetVar("j3");

var j4 = player.GetVar("j4");

var j5 = player.GetVar("j5");

var j6 = player.GetVar("j6");

var j7 = player.GetVar("j7");

var j8 = player.GetVar("j8");

var j9 = player.GetVar("j9");

var j10 = player.GetVar("j10");

var j11 = player.GetVar("j11");

var j12 = player.GetVar("j12");

var j13 = player.GetVar("j13");

var j14 = player.GetVar("j14");

var j15 = player.GetVar("j15");

var j16 = player.GetVar("j16");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";
isiFile += "Kelas:" + kelas + "\n";
isiFile += "Materi 1, Kegiatan 2 " + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Aktivitas 1"+ "\n\n";

isiFile += "1. Bagaimana cara kalian membuat bangun ruang yang ada di Gambar tersebut?\n";

isiFile += "Jawab:"+ j5 + "\n\n";



isiFile += "2. Berapa volume tiap bangun ruang yang kalian susun dengan kubus satuan? Jelaskan bagaimana strategimu.!\n";

isiFile += "Jawab:"+j6 + "\n\n";




isiFile += "Aktivitas 2"+ "\n\n";

isiFile += "1. Diskusikan strategi yang kalian gunakan untuk menghitung volume dari ketiga bangun pada Gambar di atas!\n";

isiFile += "Jawab:"+ j7 + "\n\n";



isiFile += "2. Dengan menggunakan hasil pada nomor 1, dapatkah kalian menentukan cara mencari volume suatu balok yang memiliki panjang alas p, lebar alas l, dan tinggi t? Jelaskan alasanmu!\n";

isiFile += "Jawab:"+ j8 + "\n\n";






isiFile += "Aktivitas 3"+ "\n\n";


isiFile += "1. Carilah volume rubik yang berbentuk kubus di Gambar di atas dengan menggunakan kubus satuan yang kalian miliki!\n";

isiFile += "Jawab:"+ j9 + "\n\n";



isiFile += "2. Jelaskan strategi kalian dalam menghitung volume kubus tersebut!\n";

isiFile += "Jawab:"+j10 + "\n\n";



isiFile += "3. Jika kalian ingin menghitung volume suatu kubus dengan panjang sisi s, bagaimana caranya? Jelaskan alasanmu!\n";

isiFile += "Jawab:"+ j11 + "\n\n";



isiFile += "Aktivitas 4"+ "\n\n";


isiFile += "1. Dengan pengalaman menghitung volume balok dan kubus, jika kalian memiliki prisma segitiga seperti yang ada di Gambar di atas (dengan panjang alas sembilan satuan dan tinggi Sembilan satuan), bagaimana caranya untuk menghitung volumenya?\n";

isiFile += "Jawab:"+j12 + "\n\n";



isiFile += "2. Berdasarkan cara no 1, tentukan rumus untuk volume prisma jika diketahui luas alasnya!\n";

isiFile +="Jawab:"+ j13 + "\n\n";



isiFile += "Kesimpulan:"+ "\n\n";

isiFile += "Rumus volume Balok:\n";

isiFile += "Jawab:"+j14 + "\n\n";


isiFile += "Rumus volume kubus:\n";

isiFile += "Jawab:"+j15 + "\n\n";


isiFile += "Rumus volume prisma:\n";

isiFile += "Jawab:"+j16 + "\n\n";


var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 1 Kegiatan 2_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script5()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("k1");

var j2 = player.GetVar("k2");

var j3 = player.GetVar("k3");

var j4 = player.GetVar("k4");

var j5 = player.GetVar("k5");

var j6 = player.GetVar("k6");



var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Materi 1, Kegiatan 3"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Sebutkan rumus untuk menghitung volume balok, kubus, dan prisma segitiga!\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "Bandingkan volume ketiga bangun ruang tersebut. Manakah yang lebih besar dan berapa selisih volumenya?\n";

isiFile += "Jawab:" + j2 + "\n\n";



isiFile += "Apakah data yang diberikan sudah cukup untuk menghitung volume semua bangun ruang? Jelaskan!\n";

isiFile += "Jawab:"+ j3 + "\n\n";



isiFile += "Jika kamu memperbesar volume balok menjadi dua kali lipat dari volume awal, hitung ulang volumenya! Bagaimana perbandingan dari ketiga volume bangun tersebut? Kemudian buat kesimpulan logis tentang hubungan antara ukuran sisi dan volume tersebut!\n";

isiFile += "Jawab:"+ j4 + "\n\n";





isiFile += "Jelaskan mengapa rumus volume prisma segitiga menggunakan setengah dari luas alas dikalikan tinggi prisma!\n";

isiFile += "Jawab:"+ j5 + "\n\n";


isiFile += "Jika kamu salah menghitung volume salah satu bangun, langkah apa yang akan kamu lakukan untuk memperbaikinya?\n";

isiFile += "Jawab:"+ j6 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 1 Kegiatan 3_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script6()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("l1");

var j2 = player.GetVar("l2");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Materi 1, Kegiatan 5 dan Kegiatan 6"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Dari hasil jawaban kelompok yang presentasi dan tanggapan siswa lainnya, evaluasilah jawaban mana yang menurut kalian salah dan jawaban mana menurut kalian benar. Kemudian, berilah alasan yang tepat dari jawaban yang kalian evaluasi tersebut.\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "Buatlah kesimpulan dengan bahasa sendiri beserta alasan yang tepat dari hasil presentasi yang telah dilakukan.\n";

isiFile += "Jawab:" + j2 + "\n\n";






var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 1 Kegiatan 5 dan 6_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script7()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("uk1");

var j2 = player.GetVar("uk2");

var j3 = player.GetVar("uk3");

var j4 = player.GetVar("uk4");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Uji Kompetensi 1"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Hitunglah volume masing-masing bangun ruang tersebut!\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "Bandingkan volume ketiga wadah tersebut dan jelaskan mana yang memiliki kapasitas terbesar dan terkecil!\n";

isiFile += "Jawab:" + j2 + "\n\n";




isiFile += "Jika air dari bak prisma akan dipindahkan ke dalam kolam, berapa banyak air (dalam meter kubik) yang akan mengisi kolam tersebut? Jelaskan langkah-langkah perhitungannya!\n";

isiFile += "Jawab:" + j3 + "\n\n";




isiFile += "Berdasarkan hasil perhitungan, jika ingin memperbesar volume bak kubus dua kali lipat tanpa mengubah bentuknya, berapa panjang sisi baru yang harus dibuat? Jelaskan alasannya!\n";

isiFile += "Jawab:" + j4 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban UjiKom 1_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script8()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");


var kelas = player.GetVar("Kelas");

var j1 = player.GetVar("n1");

var j2 = player.GetVar("n2");

var j3 = player.GetVar("n3");

var j4 = player.GetVar("n4");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";
isiFile += "Kelas:" + kelas + "\n";
isiFile += "Materi 2, Kegiatan 2 " + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";


isiFile += "a.	Berapa kali proses yang dibutuhkan untuk memenuhi prisma dengan menggunakan limas yang diisi penuh dengan pasir atau butiran stirofoam?\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "b.	Buatlah kalimat dugaan keterkaitan antara volume limas dan prisma berdasarkan butir a.\n";

isiFile += "Jawab:"+ j2 + "\n\n";



isiFile += "3.	Bandingkan hasil yang telah kalian peroleh dari langkah 1 dan 2 dengan video di tautan berikut. Apakah hasilnya sama atau berbeda? \n";

isiFile += "Jawab:"+ j3 + "\n\n";



isiFile += "Volume Limas:\n";

isiFile += "Jawab:"+ j4 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 2 Kegiatan 2_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script9()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("o1");

var j2 = player.GetVar("o2");

var j3 = player.GetVar("o3");

var j4 = player.GetVar("o4");

var j5 = player.GetVar("o5");

var j6 = player.GetVar("o6");



var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Materi 2, Kegiatan 3"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "a.	Hitunglah volume menara limas tersebut!\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "b.	Bandingkan volume menara limas dengan volume kolam di sekitarnya. Manakah yang lebih besar dan berapa selisih volumenya?\n";

isiFile += "Jawab:" + j2 + "\n\n";



isiFile += "c.	Jika kolam tersebut akan diisi air, dan setiap meter kubik air dapat mengisi 1000 liter, berapa liter air yang dibutuhkan untuk mengisi kolam penuh?\n";

isiFile += "Jawab:"+ j3 + "\n\n";



isiFile += "d.	Apakah ukuran kolam yang dirancang sudah proporsional dengan ukuran menara? Jelaskan alasanmu berdasarkan hasil perhitungan volume.\n";

isiFile += "Jawab:"+ j4 + "\n\n";





isiFile += "e.	Jelaskan langkah-langkah yang kamu lakukan untuk menghitung volume limas dan volume kubus pada soal ini.\n";

isiFile += "Jawab:"+ j5 + "\n\n";


isiFile += "f.	Jika kamu menemukan hasil yang berbeda saat mengulang perhitungan, apa yang akan kamu lakukan untuk memastikan jawabanmu benar?\n";

isiFile += "Jawab:"+ j6 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 2 Kegiatan 3_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script10()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");


var kelas = player.GetVar("Kelas");

var j1 = player.GetVar("n1");

var j2 = player.GetVar("n2");

var j3 = player.GetVar("n3");

var j4 = player.GetVar("n4");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";
isiFile += "Kelas:" + kelas + "\n";
isiFile += "Materi 2, Kegiatan 2 " + "\n";

isiFile += "Tanggal: " + tanggal + "\n\n";


isiFile += "a.	Berapa kali proses yang dibutuhkan untuk memenuhi prisma dengan menggunakan limas yang diisi penuh dengan pasir atau butiran stirofoam?\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "b.	Buatlah kalimat dugaan keterkaitan antara volume limas dan prisma berdasarkan butir a.\n";

isiFile += "Jawab:"+ j2 + "\n\n";



isiFile += "3.	Bandingkan hasil yang telah kalian peroleh dari langkah 1 dan 2 dengan video di tautan berikut. Apakah hasilnya sama atau berbeda? \n";

isiFile += "Jawab:"+ j3 + "\n\n";



isiFile += "Volume Limas:\n";

isiFile += "Jawab:"+ j4 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 2 Kegiatan 2_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script11()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("o1");

var j2 = player.GetVar("o2");

var j3 = player.GetVar("o3");

var j4 = player.GetVar("o4");

var j5 = player.GetVar("o5");

var j6 = player.GetVar("o6");



var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Materi 2, Kegiatan 3"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "a.	Hitunglah volume menara limas tersebut!\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "b.	Bandingkan volume menara limas dengan volume kolam di sekitarnya. Manakah yang lebih besar dan berapa selisih volumenya?\n";

isiFile += "Jawab:" + j2 + "\n\n";



isiFile += "c.	Jika kolam tersebut akan diisi air, dan setiap meter kubik air dapat mengisi 1000 liter, berapa liter air yang dibutuhkan untuk mengisi kolam penuh?\n";

isiFile += "Jawab:"+ j3 + "\n\n";



isiFile += "d.	Apakah ukuran kolam yang dirancang sudah proporsional dengan ukuran menara? Jelaskan alasanmu berdasarkan hasil perhitungan volume.\n";

isiFile += "Jawab:"+ j4 + "\n\n";





isiFile += "e.	Jelaskan langkah-langkah yang kamu lakukan untuk menghitung volume limas dan volume kubus pada soal ini.\n";

isiFile += "Jawab:"+ j5 + "\n\n";


isiFile += "f.	Jika kamu menemukan hasil yang berbeda saat mengulang perhitungan, apa yang akan kamu lakukan untuk memastikan jawabanmu benar?\n";

isiFile += "Jawab:"+ j6 + "\n\n";



var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 2 Kegiatan 3_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script12()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("p1");

var j2 = player.GetVar("p2");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Materi 2, Kegiatan 5 dan Kegiatan 6"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "Dari hasil jawaban kelompok yang presentasi dan tanggapan siswa lainnya, evaluasilah jawaban mana yang menurut kalian salah dan jawaban mana menurut kalian benar. Kemudian, berilah alasan yang tepat dari jawaban yang kalian evaluasi tersebut.\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "Buatlah kesimpulan dengan bahasa sendiri beserta alasan yang tepat dari hasil presentasi yang telah dilakukan.\n";

isiFile += "Jawab:" + j2 + "\n\n";






var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban Materi 2 Kegiatan 5 dan 6_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

function Script13()
{
  var player = GetPlayer();


var nama = player.GetVar("Nama");

var kelas = player.GetVar("Kelas");


var j1 = player.GetVar("q1");

var j2 = player.GetVar("q2");

var j3 = player.GetVar("q3");

var j4 = player.GetVar("q4");

var j5 = player.GetVar("q5");

var j6 = player.GetVar("q6");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";
isiFile += "Uji Kompetensi 2"+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";



isiFile += "a.	Jelaskan apa yang dimaksud dengan limas segiempat dan bagaimana bentuk tugu tersebut berdasarkan deskripsi soal!\n";

isiFile += "Jawab:"+ j1 + "\n\n";



isiFile += "b.	Hitung volume tugu peringatan tersebut dan jelaskan bagaimana rumus volume limas segiempat diterapkan pada soal ini.\n";

isiFile += "Jawab:" + j2 + "\n\n";




isiFile += "c.	Apakah informasi dalam soal sudah cukup untuk menghitung volume tugu secara akurat? Jelaskan jika ada data yang kurang atau perlu diperjelas.\n";

isiFile += "Jawab:" + j3 + "\n\n";




isiFile += "d.	Jika tinggi tugu diperbesar menjadi 12 meter, bagaimana pengaruhnya terhadap volume tugu? Hitung dan jelaskan!\n";

isiFile += "Jawab:" + j4 + "\n\n";




isiFile += "e.	Jelaskan langkah-langkah yang kamu lakukan untuk menghitung volume tugu limas ini secara sistematis.\n";

isiFile += "Jawab:" + j5+ "\n\n";



isiFile += "f.	Jika hasil perhitunganmu berbeda dengan temanmu, bagaimana kamu memastikan mana jawaban yang benar?\n";

isiFile += "Jawab:" + j6 + "\n\n";


var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban UjiKom 2_" + nama+kelas + ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

