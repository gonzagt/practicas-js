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
    const inputLado2 = document.getElementById(inputTriangulo2);
    const inputLado3 = document.getElementById(inputTriangulo3);
    const resPTri = document.getElementById(resPTri);
    const lado1 = parseInt(inputLado1.value);
    const lado2 = parseInt(inputLado2.value);
    const lado3 = parseInt(inputLado3.value);

}
