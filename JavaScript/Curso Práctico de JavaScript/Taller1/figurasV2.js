/* Square */

function squarePerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side * side;
}

function calculateSquareArea() {
    const area = squareArea(document.getElementById("sideSquare").value);
    document.getElementById("resultSquare").innerHTML = "Result: " + area + " cm^2";
}

function calculateSquarePerimeter() {
    const perimeter = squarePerimeter(document.getElementById("sideSquare").value);
    document.getElementById("resultSquare").innerHTML = "Result: " + perimeter + " cm";
}

/* Triangle */

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

function triangleHeight(side1, side2, base) {
    if (side1 === side2 && side1 !== base) {
        return Math.sqrt((side1 * side2) - ((base * base) / 4));
    } else {
        return 0;
    }
}

function calculateTrianglePerimeter() {
    const perimeter = trianglePerimeter(document.getElementById("sideTriangle1").value, document.getElementById("sideTriangle2").value, document.getElementById("baseTriangle").value);
    document.getElementById("resultTriangle").innerHTML = "Result: " + perimeter + " cm";
}

function calculateTriagleArea() {
    const area = triangleArea(document.getElementById("baseTriangle").value, document.getElementById("heightTriangle").value);
    document.getElementById("resultTriangle").innerHTML = "Result: " + area + " cm^2";
}

function calculateTriangleHeight() {
    const height = triangleHeight(document.getElementById("sideTriangle1").value, document.getElementById("sideTriangle2").value, document.getElementById("baseTriangle").value);
    if (height !== 0) {
        document.getElementById("resultTriangle").innerHTML = "Is an isosel triangle its altitude is: " + height + " cm";
    } else {
        document.getElementById("resultTriangle").innerHTML = "The triangle is not a isosel Triangle";
    }
}

/* Circle */

function circleDiameter(radio) {
    return radio * 2;
}

function circlePerimeter(radio) {
    return circleDiameter(radio) * Math.PI;
}

function circleArea(radio) {
    return (radio * radio) * Math.PI;
}

function calculateCircleDiameter() {
    const diameter = circleDiameter(document.getElementById("radioCircle").value);
    document.getElementById("resultCircle").innerHTML = "Result: " + diameter + " cm";
}

function calculateCirclePerimeter() {
    const perimeter = circlePerimeter(document.getElementById("radioCircle").value);
    document.getElementById("resultCircle").innerHTML = "Result: " + perimeter + " cm";
}

function calculateCircleArea() {
    const area = circleArea(document.getElementById("radioCircle").value);
    document.getElementById("resultCircle").innerHTML = "Result: " + area + " cm^2";
}
