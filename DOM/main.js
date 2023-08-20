//console.log(document.title);

//1. Ubah Title
document.title = 'Document Objek Model';

// //2. Memasukan kata ke html dengan javascript
const body = document.body;
// body.append('Hello There')

// //3. Membuat element dengan create element
// const h1 = document.createElement('h1')
// h1.textContent = 'Kerja Bagus'

// const kata = document.createElement('p')
// kata.innerHTML = '<marquee>MUSUH TERLAHIR</marquee>'

// const kamu = document.createElement('i')
// kamu.innerText = 'CI-FEE'

// body.append(h1)
// body.append(kata)
// body.append(kamu)

//4. Data Selector
const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2');

const defaultText = 'Submit1';
btn1.textContent = defaultText;

console.log(btn2);

//btn1
btn1.style.background = 'aqua';
btn1.style.padding = '50px';
btn1.style.fontSize = '50px';
btn1.style.marginRight = '50px';

//btn2
btn2.style.background = 'red';
btn2.style.padding = '50px';
btn2.style.fontSize = '50px';

//5. Events, menambahkan alert di html
function gantiBut() {
  btn1.style.background = 'tomato';
  const newText = document.createElement('p');
  newText.textContent = 'bang kapan mainnya bng\n';
  body.append(newText);
}

function changeText() {
  btn1.textContent = 'kerjaabgus\n';
  btn1.style.background = 'tomato';
}

function retrnText() {
  btn1.textContent = defaultText;
  btn1.style.background = 'aqua';
}

const TEXT2 = document.getElementsByTagName(onmouseover(text));
// TEXT2.textContent = 'BANGG HELP'
// body.append(TEXT2)

console.log(TEXT2);

// button 2
function text() {
  const pasreng = document.createElement('b');
  pasreng.textContent = 'BRASREENGGG\n';
  body.append(pasreng);
}

function chgColor() {
  const pasreng = document.createElement('b');
  pasreng.textContent = 'BRASREENGGG\n';
  body.append(pasreng);
  pasreng.style.background = 'green';
}
