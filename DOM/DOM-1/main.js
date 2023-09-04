function bgChange(bg){
    document.body.style.background = bg;
}
// console.log();

const td1 = document.querySelector('.td1');
const td2 = document.querySelector('.td2');
const td3 = document.querySelector('.td3');
const kolom1 = document.getElementById('satu');
kolom1.style.backgroundColor = "red";

td1.style.background = 'blue';
td2.style.background = 'red';
td3.style.background = 'green';

// return background

function returnBg(){
    const bgAwal = document.querySelector('body'); //gimana cara kita buat manggil style background dari bodynya.
    console.log(bgAwal);
}

const random = document.getElementById('randomButton');
function getRandomPosition(){
    const heightRandom = window.innerHeight - random.clientHeight;
    const widthRandom = window.innerWidth - random.clientWidth;
    
    const randomX = Math.random() * heightRandom;
    const randomY = Math.random() * widthRandom;
    console.log(randomX);
    console.log(randomY);
    
    return{x: randomX, y: randomY};
}

random.addEventListener('click', function(){
    const randomPosition = getRandomPosition();

    // Melimitkan Y agar tidak lebih dari 100vh
    // const maxY = window.innerWidth - random.clientWidth;
    // const limitY = Math.min(randomPosition.y, maxY);
    // TAPI SAYANGNYA TIDAK PERLU WKWKWKWKWK, karena sudah bisa dengan utak atik top left saja.

    random.style.top = `${randomPosition.x}px`
    random.style.left = `${randomPosition.y}px`
    // random.style.bottom = `${randomPosition.x}px`
    // random.style.left = `${randomPosition.y}px`

});

// tes doang
const tes = document.querySelectorAll('.judul').innerHTML = "helo";
// console.log(tes);

const button = document.querySelector('.butt');
function gantiText(){
    button.textContent = "apa coba?";
}

function returnText(){ 
    button.textContent = "ayo klik aku!"; //krknya ada deh cara yang lebih baik lagi 
}
// console.log(returnText);