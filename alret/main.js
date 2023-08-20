// alert('HAY HO???');

// console.log('MATI LAGI BAJINGAN');

// // prompt('Masukan kata sandi anda paada pormt berikut ini');

// var usia = 50;
// usia = 40;
// console.log('usianya saat ini adalah ' + usia);

// Logic dikIT aja

// var nim = prompt('Berapa NIM kamu?');
// alert('Nomor Induk Mahasiswa kamu adalah ' + nim);
// let tinggi = prompt('Masukan Tinggi Badan kamu?');
// alert('Tinggin badan kamu adalah ' + tinggi);

let nama = 'Romy';
let tinggiBadan = '175';
let nim = '2215101052';
let uang = 2;

// CONDISI IF ELSE
// if(uang == null)
// {
//     uang = 'GA PUNYA UANG';
// }
// else
// {
//     uang = 'Punya" keknya banggh';
// }

// CONDISI MENGGUNAKAN SWICHT
switch(uang)
{
    case 1:
        uang = 'Tinggaal 15kan sih';
    break
    case 2:
        uang = 'Aman masih 500k, nyampe lah (semoga) minimal setahun';
    break
    default:
        uang = 'Udah habis banggg help';
    break
}
alert(`Hallo namaku ${nama}, aku dari Universitas Pendidikan Ganesha dengan nim ${nim}, dan tinggi badan ${tinggiBadan}, terus uangku ddah mulai menipis ni tinggal ${uang}`);

