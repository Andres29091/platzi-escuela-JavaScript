
const salaryCol = Colombia.map(
    function (element) {
        return element.salary;
    }
);

const sortedSalarys = salaryCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function isPar(number) {
    return number % 2 === 0;
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

function medianaSalarys(list) {
    const half = parseInt(list.lenght / 2);

    if (isPar(list.lenght)) {
        const halfPerson1 = list[half - 1];
        const halfPerson2 = list[half];

        const mediana = calculateAverage([halfPerson1, halfPerson2]);
        return mediana
    } else {
        const halfPerson = list[half];
        return halfPerson;
    }
}



const generalMediana = medianaSalarys(sortedSalarys);



const spliceStart = 0;
const spliceCount = 0;

const salaryTop10 = sortedSalarys.splice()