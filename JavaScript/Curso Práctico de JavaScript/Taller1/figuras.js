/* Cuadrado */

console.group("Cuadrados");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

/* Triangulo */

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo1 = 4;
console.log("Los lados del Triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo1 + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo1
console.log("El área del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo1 * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

/* Cicrulo */

console.group("Circulos");

const radioCirculo = 4
console.log("El radio del circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const pi = Math.PI;
console.log("PI es: " + pi);

const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo =  (radioCirculo * radioCirculo) * pi;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();