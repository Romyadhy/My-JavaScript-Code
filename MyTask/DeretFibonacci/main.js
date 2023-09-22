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
const restvol = document.getElementById("resutlVol");
const cube = document.getElementById("kubus");
const rectangular = document.getElementById("balok");
const pyramid = document.getElementById("limas");
const cylinderr = document.getElementById("silinder");
const cone = document.getElementById("kerucut");
const shperee = document.getElementById("bola");




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
    const cubeSide = parseFloat(kubusS.value);
    // BALOK
    const lengtR = parseFloat(Blk_P.value);
    const widthR = parseFloat(Blk_L.value);
    const heightR = parseFloat(Blk_T.value);
    // LIMAS
    const pyramidA = parseFloat(A_LMS.value);
    const pyramidH = parseFloat(T_LMS.value);
    // SILINDER
    const silinderR = parseFloat(J_Sndr.value);
    const silinderH = parseFloat(T_Sndr.value);
    // KERUCUT
    const coneR = parseFloat(J_KRCT.value);
    const coneH = parseFloat(T_KRCT.value);
    // BOLA
    const shpereR = parseFloat(J_BOL.value);

    // CUBE
    if (selectedShape === "kubus" && !isNaN(cubeSide) && cubeSide >= 0) {
        const volume = cubeSide ** 3;
        restvol.textContent = `Cube Volume: ${volume.toFixed(2)}`;
    } 
    // RECTANGGLE
    else if (selectedShape === "balok" && !isNaN(lengtR) && !isNaN(widthR) && !isNaN(heightR) && lengtR >= 0 && widthR >= 0 && heightR >= 0) {
        const volume = lengtR * widthR * heightR;
        restvol.textContent = `Rectangular Prism Volume: ${volume.toFixed(2)}`;
    } 
    // Pyramid
    else if (selectedShape === "limas" && !isNaN(pyramidA) && !isNaN(pyramidH) && pyramidA >= 0 && pyramidH >= 0) {
        const volume = (1 / 3) * pyramidA * pyramidH;
        restvol.textContent = `Pyramid Volume: ${volume.toFixed(2)}`;
    }
    // Cylinder
    else if (selectedShape === "silinder" && !isNaN(silinderR) && !isNaN(silinderH) && silinderR >= 0 && silinderR >= 0) {
        const volume = Math.PI * (silinderR ** 2) * silinderH;
        restvol.textContent = `Cylinder Volume: ${volume.toFixed(2)}`;
    }
    // Cone
    else if (selectedShape === "kerucut" && !isNaN(coneR) && !isNaN(coneH) && coneR >= 0 && coneH >= 0) {
        const volume = (1 / 3) * Math.PI * (coneR ** 2) * coneH;
        restvol.textContent = `Cone Volume: ${volume.toFixed(2)}`;
    }
    // Shpere
    else if (selectedShape === "bola" && !isNaN(shpereR) && shpereR >= 0) {
        const volume = (4 / 3) * Math.PI * (shpereR ** 3);
        restvol.textContent = `Sphere Volume: ${volume.toFixed(2)}`;
    }
    else {
        alert("Please enter the number, and positive number.");
    }
}

// Selecet 
select.addEventListener("change", function () {
    const selectedShape = this.value;
    if (selectedShape === "kubus") {
        cube.style.display = "block";
        rectangular.style.display = "none";
        pyramid.style.display = "none";
        cylinderr.style.display = "none";
        cone.style.display = "none";
        shperee.style.display = "none";
    } 
    else if (selectedShape === "balok") {
        cube.style.display = "none";
        rectangular.style.display = "block";
        pyramid.style.display = "none";
        cylinderr.style.display = "none";
        cone.style.display = "none";
        shperee.style.display = "none";
    }
    else if (selectedShape === "limas") {
        cube.style.display = "none";
        rectangular.style.display = "none";
        pyramid.style.display = "block";
        cylinderr.style.display = "none";
        cone.style.display = "none";
        shperee.style.display = "none";
    }
    else if (selectedShape === "silinder") {
        cube.style.display = "none";
        rectangular.style.display = "none";
        pyramid.style.display = "none";
        cylinderr.style.display = "block";
        cone.style.display = "none";
        shperee.style.display = "none";
    }
    else if (selectedShape === "kerucut") {
        cube.style.display = "none";
        rectangular.style.display = "none";
        pyramid.style.display = "none";
        cylinderr.style.display = "none";
        cone.style.display = "block";
        shperee.style.display = "none";
    }
    else if (selectedShape === "bola") {
        cube.style.display = "none";
        rectangular.style.display = "none";
        pyramid.style.display = "none";
        cylinderr.style.display = "none";
        cone.style.display = "none";
        shperee.style.display = "block";
    }
});