/* 
HELLO ARRAY
**/
//BAGIAN 1,2,3,4,5
// Cara memanggil array di javascript
// Cara 1
// const arraypertama =  [`ontol`, `ucuk`, `jumbo`];
// console.log(arraypertama)

// Cara Kedua
// const arraykedua = [];
// arraykedua[0] = `😊`;
// arraykedua[1] = `❤️`;
// arraykedua[2] = `😂`;
// arraykedua[5] = `papepape`;
// console.log(arraykedua[3, 4]);

// Kita beralih lansung ke buah"han

// const buahBuahanSaya = [`🍉`, `🍌`, `🌶️`, `🍓`];
// const buahCabe = buahBuahanSaya.includes(`🌶️`);

// if (buahCabe) {
//   const PosisionCabe = buahBuahanSaya.indexOf(`🌶️`);
// //   Menampilkan buah sebelum dan sesudah cabe
// const BeforeCabe = PosisionCabe - 1;
// const AfterCabe = PosisionCabe + 1;
// // Car menampilkan
// const before = buahBuahanSaya[BeforeCabe];
// const after = buahBuahanSaya[AfterCabe];
// console.log(`Buah sebelum cabe adalah buah ${before}`);
// console.log(`Buah setelah cabe adalah buah ${after}`);



//   console.log(`Jadi buah ini bernilai ${buahCabe}, dan ini berarti`);
//   console.log(`Jadi buah stoberi ada di dalam indek array buah dan berada pada indeks ke-${PosisionCabe}`);
// } else {
//   console.log(`Buah tidak ditemukan blok`);
// }


// Eric Caplok  BAGIAN KE-4
const buahBuahanSaya = [`🍉`, `🍌`, `🌶️`, `🍓`];
const buahCabe = buahBuahanSaya.includes(`🌶️`);

if (buahCabe) {
  const PosisionCabe = buahBuahanSaya.indexOf(`🌶️`);

//   Menampilkan buah sebelum dan sesudah cabe
const BeforeCabe = PosisionCabe - 1;
const AfterCabe = PosisionCabe + 1;

// Car menampilkan
const before = buahBuahanSaya[BeforeCabe];
const after = buahBuahanSaya[AfterCabe];
console.log(`Buah sebelum cabe adalah buah ${before}`);
console.log(`Buah setelah cabe adalah buah ${after}`);

// Mencari buah awal 
const BuahAwal = buahBuahanSaya[0]; //kita menggunakan "SHIFT" untuk mencari array awalnya
console.log(`Buah awal pada arraynya adalah ${BuahAwal}`);
// Mencari buah akhir
const BuahAkhir = buahBuahanSaya[buahBuahanSaya.length - 1]; //kita juga bisa menggukana "POP" untuk memanggil array terakhirnya
console.log(`Buah akhir pada array ini adalah ${BuahAkhir}`); 
// FYI: PERBEDAAN MENGGUNAKAN "shift", dan "pop", dengan kita menggunakan cara menual untuk memanggil arraynya sama
} else {
    console.log(`Buah tidak ditemukan blok`);
  }


//   BAGIAN KE-5
// ARACIA KEY
// String di array

const ArrayMe = [];
ArrayMe [`jungko`] = `🤣`;
ArrayMe [`gugugaga`] = `😍`;

console.log(ArrayMe[`gugugaga`]);


// BAGIAN KE-6
//COPY ARRAY HATI HATI DALAM COPY MENGKOPI ARRAY ANTARA SATU SAMA LAIN

const ArrSaya = [`🤣`, `🌶️`, `🍌`, `😍`];
const NewArrSaya = ArrSaya.slice(); //Kita pake "SLICE" agar array utamanya tidak berubah, tetapi masih ada cara atau tatacara yang lain lagi untuk mengubah copy array

NewArrSaya[0] = `👌`;

console.log(ArrSaya);
console.log(NewArrSaya);

//BAGIAN KE-7
//Berbagai jenis data dalam array dan cara memanggil array dalam array
const arrWatasi = [
  `😒`,
 1000, 
 {banana: function ()
{
  console.log(`ini dalam banana`);
}}, 
 [`manis`, `pahit`]];
 
// console.log(arrWatasi[2].banana); ini juga bisa ttetepi jika ingin menampilkan isi dari console log yang di dalam banana itu kita bisa menggunakna syntx di bawah ini
arrWatasi[2].banana();



// BAGIAN KE-8
// PENGGABUNGAN ARRAY
const arrOrewa = [`😒`, `👌`, `🌶️`, `😁`];
const arrOrewaKedua = [`😍`, `🍌`, `🍓`, `❤️`];

const gabungan = arrOrewa.concat(arrOrewaKedua);

// console.log(gabungan); Selain menggunakan console log kita juga dapat menggunaakna dcara lain agar bisa menampilkan array dan nilai idexnya dalam satu nilai.
gabungan.map((value, index) => console.log(index, value));

//Cara lain memanggil data (Persi Backend)
const datas = [
  {
    name: 'Romy',
    stack: 'html',
    age: 19,
  },
  {
    name: 'P',
    stack: 'html',
    age: 19,
  },
  {
    name: 'Q',
    stack: 'html',
    age: 19,
  }, 
  {
    name: 'MY',
    stack: 'html',
    age: 19,
  },
]

datas.map((value, index) => {
  console.log(value.name, value.stack, value.age);
})

console.log(60 * 60 * 24 * 30); 
