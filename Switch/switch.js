
// var angka = prompt('masukan anggka: ');

// switch (angka) {
//     case '1':
//         alert('Anda memilih angka 1');
//         break;
//     case '2':
//         alert('Anda memilih angka 2');
//         break;
//     case '3':
//         alert('Anda memilih angka 3');
//         break;
//     case '4':
//         console.log('anda memilih angka 4');
//         break;
//     default:
//         alert('angka yang anda masukan slah');
//         break;
// }

var menu = prompt(
    'Pilih menu di bawah ini!! \n \t1.Mie Goreng. \n\t 2. Nasi. \n\t 3. SeaFood. \n\t 4. KFC'
);

switch (menu) {
    case '1':
        alert('Anda memiih "mie goreng", merupakan makanan tidak sehat untuk jangka panjang');
        break;
    case '2':
        alert('Anda memilih \'Nasi\' merupakan makanan sehat');
        break;
    case '3':
        alert('Anda memilih makanan setenah sehat dan juga tidak');
        break;
    case '4':
        alert('Anda memiih makanan cepat saji worth it ga WI sii');
        break;
    default:
        alert('Maaf item tidak ada di dalam menu kita...');
        break;
}

