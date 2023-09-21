// Deklaration variable DOM
const inpt = document.getElementById('inputVal');
const res = document.getElementById('result');
const select = document.getElementById("selct");
const kubusS = document.getElementById('kubusSide');
const Blk_P = document.getElementById('B-panjang');
const Blk_L = document.getElementById('B-lebar');
const Blk_T = document.getElementById("B-tinggi");
const A_LMS = document.getElementById("alas-limas");
const T_LMS = document.getElementById("tinggi-limas");
const J_Sndr = document.getElementById("jari-silinder");
const T_Sndr = document.getElementById("tinggi-silinder");
const J_KRCT = document.getElementById("jari-kerucut");
const T_KRCT = document.getElementById("tinggi-kerucut");
const J_BOL = document.getElementById("jari-jariBol");
const slct = document.getElementById("selct");



function fibocalcu() {
    const inputVal = parseInt(inpt.value);
    // console.log(inputVal);
    if (!isNaN(inputVal) && inputVal >= 0) {

        const result = fibonacci(inputVal);
        res.textContent = result;

    } else {
        alert("Please enter the positive value");
    }
}

function fibonacci(inputVal) {
    if (inputVal <= 1) {
        return inputVal;
    }
    let x = 0;
    let y = 1;
    for (let i = 2; i <= inputVal; i++) {
        const temp = y;
        y += x;
        x = temp;
    }
    return y;
}

function calculateVolume() {
    const selectedShape = slct  .value;
    // KUBUS
    const kubusSide = parseFloat(kubusS.value);
    // BALOK
    const panjangBalok = parseFloat(Blk_P.value);
    const lebarBalok = parseFloat(Blk_L.value);
    const tinggiBalok = parseFloat(Blk_T.value);
    // LIMAS
    const limasAlas = parseFloat(A_LMS.value);
    const limasTinggi = parseFloat(T_LMS.value);
    // SILINDER
    const tabungRadius = parseFloat(J_Sndr.value);
    const tinggiTabung = parseFloat(T_Sndr.value);
    // KERUCUT
    const kerucutRadius = parseFloat(J_KRCT.value);
    const kerucutTinggi = parseFloat(T_KRCT.value);
    // BOLA
    const bolaRadius = parseFloat(J_BOL.value);

    if (selectedShape === "kubus" && !isNaN(kubusSide) && kubusSide >= 0) {
        const volume = kubusSide ** 3;
    
        document.getElementById("resutlVol").textContent = `Cube Volume: ${volume.toFixed(2)}`;
    } 
    else if (selectedShape === "balok" && !isNaN(panjangBalok) && !isNaN(lebarBalok) && !isNaN(tinggiBalok) && panjangBalok >= 0 && lebarBalok >= 0 && tinggiBalok >= 0) {
        const volume = panjangBalok * lebarBalok * tinggiBalok;
        document.getElementById("resutlVol").textContent = `Ractangle Volume: ${volume.toFixed(2)}`;
    } 
    else if (selectedShape === "limas" && !isNaN(limasAlas) && !isNaN(limasTinggi) && limasAlas >= 0 && limasTinggi >= 0) {
        const volume = (1 / 3) * limasAlas * limasTinggi;
        document.getElementById("resutlVol").textContent = `Pyramid Volume: ${volume.toFixed(2)}`;
    }
    else if (selectedShape === "silinder" && !isNaN(tabungRadius) && !isNaN(tinggiTabung) && tabungRadius >= 0 && tinggiTabung >= 0) {
        const volume = Math.PI * (tabungRadius ** 2) * tinggiTabung;
        document.getElementById("resutlVol").textContent = `Cylinder Volume: ${volume.toFixed(2)}`;
    }
    else if (selectedShape === "kerucut" && !isNaN(kerucutRadius) && !isNaN(kerucutTinggi) && kerucutRadius >= 0 && kerucutTinggi >= 0) {
        const volume = (1 / 3) * Math.PI * (kerucutRadius ** 2) * kerucutTinggi;
        document.getElementById("resutlVol").textContent = `Cone Volume: ${volume.toFixed(2)}`;
    }
    else if (selectedShape === "bola" && !isNaN(bolaRadius) && bolaRadius >= 0) {
        const volume = (4 / 3) * Math.PI * (bolaRadius ** 3);
        document.getElementById("resutlVol").textContent = `Sphere Volume: ${volume.toFixed(2)}`;
    }
    else {
        alert("Please enter the number, and positive number.");
    }
}

// Selecet 
select.addEventListener("change", function () {
    const selectedShape = this.value;
    if (selectedShape === "kubus") {
        document.getElementById("kubus").style.display = "block";
        document.getElementById("balok").style.display = "none";
        document.getElementById("limas").style.display = "none";
        document.getElementById("silinder").style.display = "none";
        document.getElementById("kerucut").style.display = "none";
        document.getElementById("bola").style.display = "none";
    } 
    else if (selectedShape === "balok") {
        document.getElementById("kubus").style.display = "none";
        document.getElementById("balok").style.display = "block";
        document.getElementById("limas").style.display = "none";
        document.getElementById("silinder").style.display = "none";
        document.getElementById("kerucut").style.display = "none";
        document.getElementById("bola").style.display = "none";
    }
    else if (selectedShape === "limas") {
        document.getElementById("kubus").style.display = "none";
        document.getElementById("balok").style.display = "none";
        document.getElementById("limas").style.display = "block";
        document.getElementById("silinder").style.display = "none";
        document.getElementById("kerucut").style.display = "none";
        document.getElementById("bola").style.display = "none";
    }
    else if (selectedShape === "silinder") {
        document.getElementById("kubus").style.display = "none";
        document.getElementById("balok").style.display = "none";
        document.getElementById("limas").style.display = "none";
        document.getElementById("silinder").style.display = "block";
        document.getElementById("kerucut").style.display = "none";
        document.getElementById("bola").style.display = "none";
    }
    else if (selectedShape === "kerucut") {
        document.getElementById("kubus").style.display = "none";
        document.getElementById("balok").style.display = "none";
        document.getElementById("limas").style.display = "none";
        document.getElementById("silinder").style.display = "none";
        document.getElementById("kerucut").style.display = "block";
        document.getElementById("bola").style.display = "none";
    }
    else if (selectedShape === "bola") {
        document.getElementById("kubus").style.display = "none";
        document.getElementById("balok").style.display = "none";
        document.getElementById("limas").style.display = "none";
        document.getElementById("silinder").style.display = "none";
        document.getElementById("kerucut").style.display = "none";
        document.getElementById("bola").style.display = "block";
    }
});