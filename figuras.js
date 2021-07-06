
//////// Interactuando con HTML ////////

//////// Triángulo ////////

function calcPTriangulo() {
    const input3 = document.getElementById("inputTriangulo3");
    const i3 = parseInt(input3.value);
    const input1 = document.getElementById("inputTriangulo1");
    const i1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const i2 = parseInt(input2.value);
    const resPTri = document.getElementById("resPTri");
        
    function writeResult() {
        const resultado = i3+i2+i1;
        resPTri.innerHTML = "El resultado es " + resultado + " cm.";
    };
    
    writeResult(); 
};

function calcATriangulo() {
    d = document.getElementById("resATri");
    d.innerHTML = "Pendiente xd";
};

//////// Cuadrado ////////

function calcPCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const i = parseInt(input.value);
    const resPCuad = document.getElementById("resPCuad");

    function writeResult() {
        const resultado = (i*4);
        resPCuad.innerHTML = "El resultado es " + resultado + " cm.";
    };

    writeResult();
};

function calcACuadrado() {
    const input = document.getElementById("inputCuadrado");
    const i = parseInt(input.value);
    const resACuad = document.getElementById("resACuad");

    function writeResult() {
        const resultado = (i*i);
        resACuad.innerHTML = "El resultado es " + resultado + " cm^2.";
    };

    writeResult();
};

//////// Círculo ////////

const PI = Math.PI;  // Se declara pi en el scope global para usarlo en las 2 funciones.

function calcPCirculo() {
    const input = document.getElementById("inputCirculo");
    const i = parseInt(input.value);
    const resPCirc = document.getElementById("resPCirc");

    function writeResult() {
        const resultado = (i*2) * PI;
        resPCirc.innerHTML = "El resultado es " + parseInt(resultado) + " cm." + "<br />" + "Resultado exacto: " + resultado +" cm.";
    };

    writeResult();
};

function calcACirculo() {
    const input = document.getElementById("inputCirculo");
    const i = parseInt(input.value);
    const resACirc = document.getElementById("resACirc");

    function writeResult() {
        const resultado = (i*i)*PI;
        resACirc.innerHTML = "El resultado es " + parseInt(resultado) + " cm^2." + "<br />" + "Resultado exacto: " + resultado + " cm^2.";
    };

    writeResult();
};