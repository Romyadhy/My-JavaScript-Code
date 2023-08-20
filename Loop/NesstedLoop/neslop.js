//Nested Loop
var menu = prompt(
    'Silahlkan pilih salah satu dari menu di bawah ini!! \n\t 1. Segitiga siku-siku. \n\t 2. Segitiga siku-siku kebalik. \n\t 3. Segitiga sama kaki. \n\t 4. Segitiga siku siku gabungan. '
);

switch (menu) {
    case '1':
        //Segitiga siku" biasaa
        var s = '';
        console.log('Segitiga siku siku');
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < i; j++) {
                s += '*';
            }
            s += '\n';
        }
        alert(s);
        break;
    case '2':
        // Segotia siku" kebalik
        console.log('Segitiga siku-siku kebalik');
        var a = '';
        for (var i = 5; i >= 0; i--) {
            //loop kesaming
            for (var k = 0; k < i; k++) {
                a += '*';
            }
            a += '\n';
        }
        alert(a);
        break;
    case '3':
        //Segitiga sama kaki
        console.log('Segitiga Sama kaki');
        var b = '';
        var pcnk = 5
        for (var i = 1; i <= pcnk; i++) {
            for (var j = 1; j <= pcnk - i; j++) {
                b += ' ';
            }
            for (var k = 1; k <= 2 * i - 1; k++) {
                b += '*';
            }
            b += '\n';
        }
        alert(b);
        break;
    case '4':
        // Segitiga siku siku gabungan
        console.log('Segitiga siku siku gabungan');
        var c = '';
        var tinggi = 10;
        for (var i = 1; i <= tinggi; i++) {
            for (var j = 1; j <= i; j++) {
                c += '*';
            }
            c += '\n';
        }
        //kebalikannya
        for (var m = tinggi - 1; m >= 1; m--) {
            for (var n = 1; n <= m; n++) {
                c += '*';
            }
            c += '\n';
        }
        alert(c);
        break;
    default:
        alert('Menu tidak tersedia');
        break;
}










