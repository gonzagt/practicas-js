//////// Triángulo ////////

// Perímetro

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;  
};

// Área

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//////// Cuadrado ////////

// Perímetro

function perimetroCuadrado(lado) {
    return lado * 4;
};

// Área

function areaCuadrado(lado) {
    return lado * lado;
}

//////// Círculo ////////

// Perímetro o Circunferencia

const PI = Math.PI;

function perimetroCirculo(radio) {
    return (radio * 2) * PI;
};

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

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
        const perimetro = i3+i2+i1;
        resPTri.innerHTML = perimetro + " cm.";
    };
    
    writeResult(); 
};

function calcATriangulo() {
    d = document.getElementById("resATri");
    d.innerHTML = "Pendiente xd";
};