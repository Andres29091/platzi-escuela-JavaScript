
let list = [];

function aggregateNumberList() {
    let arrayNumbers = [];
    let number = document.getElementById("inputList").value
    if (number == "") {
        document.getElementById("validationInputList").style.color = "#FFFFFF"
        document.getElementById("validationInputList").innerText = "The number insert is not valid";
    } else if (number.includes(".")) {
        document.getElementById("validationInputList").style.color = "#FFFFFF"
        document.getElementById("validationInputList").innerText = "Please separete the numbers with coma only.";
    } else {

        if (number.includes(",")) {
            arrayNumbers = number.split(",");
            arrayNumbers.forEach(element => {
                list.push(parseInt(element));
            });
        } else {
            list.push(parseInt(number));
        }
        list.sort(function (a, b) {
            return a - b;
        });
        document.getElementById("resultList").innerText = list;
        document.getElementById("validationInputList").innerText = "";
        document.getElementById("formList").reset();
    }
}

function removeNumberList() {
    list.pop()
    document.getElementById("resultList").innerText = list;
}

function calculateAverage(list) {
    const sumList = list.reduce(
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;
        }
    );
    const averagelist = avereage = sumList / list.length;
    return averagelist;
}

function calculateMediaArithmetic() {
    const averagelist = calculateAverage(list);
    document.getElementById("resultAverage").innerText = "The average is: " + averagelist.toFixed(2)
}

function isPar(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculateMediana() {
    if (list.length != 0) {
        const halfList = parseInt(list.length / 2);
        let mediana = 0;
        if (isPar(list.length)) {
            const number1 = list[halfList - 1];
            const number2 = list[halfList];
            mediana = calculateAverage([number1, number2]);
            document.getElementById("resultMediana").innerText = "The Mediana is: " + mediana.toFixed(2);
        } else {
            mediana = list[halfList];
            document.getElementById("resultMediana").innerText = "The Mediana is: " + mediana.toFixed(2);
        }
    }
}

function calculateModa() {
    const listCount = {};
    list.map(
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1
            } else {
                listCount[element] = 1
            }
        }
    );

    const listArray = Object.entries(listCount).sort(
        function (acumulateValue, newValue) {
            return acumulateValue[1] - newValue[1];
        }
    );

    const moda = listArray[listArray.length - 1];

    document.getElementById("resulModa").innerText = "The moda is: " + moda[0];
}