//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};
console.groupEnd();

//Codigo triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return (base * altura)/2;
};
console.groupEnd();

//Codigo del circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
};

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
};

function areaCirculo(radio){
    return (radio*radio)*Math.PI;
};
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTrianguloBase");

    const lado1 = Number(input1.value);
    const lado2 = Number(input2.value);
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloAltura");
    const input2 = document.getElementById("inputTrianguloBase");

    const altura = Number(input1.value);
    const base = Number(input2.value);

    const perimetro = areaTriangulo(base, altura);
    alert(perimetro)
}