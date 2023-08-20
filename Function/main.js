// //Functions
// //bisa di sebut "Passing data/value"
// // function addName(name, nim) {
// //    console.log('nama anda:',  name)
// //    console.log('nim anda:',  nim)
// // }

// // addName('konmsroooo', '12233141k')

// //Gunain Argument
// // function addChar(){
// //     console.log('kondro: ', arguments[0])
// //     console.log('konsri: ', arguments[1])
// // }

// // addChar('fakhiehi', 'fahkfha')

// const nama = function addName(name, nim) {
//   console.log('nama lu: ', name, '|', 'nim lu: ', nim);
// };
// nama('konmsroooo', '12233141k');

// //Cara pertama "new"
// const sum = new Function('x', 'y', 'return x+y');
// console.log(sum(1, 4));

// //Cara kedua "Standar"
// function sum2(x, y) {
//   console.log(x + y);
// }
// sum2(3, 5);

// //Cara ketiga "arrow function"
// const sum3 = (x, y) => {
//   console.log(x + y);
// };
// sum3(5, 4);

// //Hoisting, istilah untuk menampilkan data pada saat perintah berada diatas variabel. Bida digunakan di function juga, khususnya saat menggunakan standar function yaitu di cara kedua..

/*Tugas
1. Perhitungan Matematika
    -Luas Lingkaran
    -Luas Segitiga
    -Luas peregi panjang
    -Luas jajargenjang 
2. Hitung total gaji yang didapat dalam 1 bulang dengan input
    -nama karyawan
    -gaji perhari
    -jumlah hari masuk kerja
*/




//TUGAS 1 STARTED
//Luas Lingkaran
function luasLingkaran(jari) {
  const luas = console.log(Math.PI * jari * jari);
  return luas;
}

//Luas Segitiga
function luasSegitiga(alas, tinggi) {
  const luasSe = console.log(0.5 * alas * tinggi);
  return luasSe;
}

//Luas Persegi Panjang
function luasPeresegiPanjang(panjang, lebar) {
  const luas = console.log(panjang * lebar);
  return luas;
}
//Luas jajargenjang
function luasJajarGenjang(alas, tinggi) {
  const luas = console.log(alas * tinggi);
  return luas;
}
luasLingkaran(7);
luasSegitiga(4, 6);
luasPeresegiPanjang(6, 5);
luasJajarGenjang(5, 7);
//TUGAS 1 DONE

//TUGAS 2 STARTED
function totalGaji(nama, gaji, hari) {
  console.log('nama karyawan: ', nama);
  console.log('gaji per hari: ', gaji);
  console.log('jumlah hari bekerja dalam sebulan: ', hari);
  console.log('jadi gaji total perbulannya adalah: ', gaji * hari);
}

totalGaji('doggy', 200, 30);
//TUGAS 2 DONE

