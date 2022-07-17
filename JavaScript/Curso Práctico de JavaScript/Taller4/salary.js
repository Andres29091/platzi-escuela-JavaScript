const Colombia = [];

function aggregatePerson() {
    debugger;
    let name = document.getElementById("inputName").value;
    let salary = document.getElementById("inputSalary").value;

    Colombia.push({
        name: name,
        salary: salary
    });

    let arrayName = [];
    let arraySalary = [];
    Colombia.forEach(element => {
        arrayName.push(element.name);
        arraySalary.push(element.salary);    
    });
    document.getElementById("resultName").innerText = arrayName;
    document.getElementById("resultSalary").innerText = arraySalary;
}