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

function calcPTriangulo(input) {
    const inputLado1 = document.getElementById(inputTriangulo1);
    const lado1 = parseInt(inputLado1.value);
    console.log(lado1);
}

resPTri