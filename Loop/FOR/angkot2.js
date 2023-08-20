
var jlhAngkot = 10
var beroprasi = 6
var lembur1 = prompt('Masukan nomor agkot pertama yang lembur: ');
var lembur2 = prompt('Masukan nomor agkot kedua yang lembur: ');
var lembur3 = prompt('Masukan nomor agkot ketiga yang lembur: ');


for (noAngkot = 1; noAngkot <= jlhAngkot; noAngkot++) {
    if (noAngkot <= beroprasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot, 'beroprasi dengan baik');
    }
    else if (noAngkot == lembur1 || noAngkot == lembur2 || noAngkot == lembur3) {
        console.log('Angkot No. ' + noAngkot, 'sedang lembur');
    }
    // else if (noAngkot == lembur2) {
    //     console.log('Angkot No. ' + noAngkot, 'sedang lembur');
    // }

    else {
        console.log('Angkot No. ' + noAngkot, 'tidak beroprasi dengan baik');
    }
}




// while (noAngkot <= beroprasi) {
//     console.log('Angkot No. ' + noAngkot, 'beroprasi dengan baik');
//     noAngkot++;
// }

// for (noAngkot = beroprasi + 1; noAngkot <= jlhAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot, 'tidak beroprasi dengan baik')
// }