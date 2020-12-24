let selectedCar = null;

function submitCar() {
    if(validate()) {
        let carData = readCars();
        if(selectedCar == null)
            insertNewCar(carData)
        else
            updateCar(carData);
        resetForm();
    }
}

function readCars() {
    let carData = {};
    carData['branch'] = document.getElementById('branch').value;
    carData['model'] = document.getElementById('model').value;
    carData['year'] = document.getElementById('year').value;
    carData['color'] = document.getElementById('color').value;
    carData['price'] = document.getElementById('price').value;
    carData['imgCar'] = document.getElementById('imgCar').value;
    return carData
}

function insertNewCar(data) {
    let table = document.getElementById('car-list').getElementsByTagName('tbody')[0];
    var newCar = table.insertRow(table.lenght);
    cell1 = newCar.insertCell(0);
    cell1.innerHTML = data.branch;
    cell2 = newCar.insertCell(1);
    cell2.innerHTML = data.model;
    cell3 = newCar.insertCell(2);
    cell3.innerHTML = data.year;
    cell4 = newCar.insertCell(3);
    cell4.innerHTML = data.color;
    cell5 = newCar.insertCell(4);
    cell5.innerHTML = data.price;
    cell6 = newCar.insertCell(5);
    cell6.innerHTML = `<img src="${data.imgCar}" alt="${data.branch + ' ' + data.model}" width="auto" height="60px">`;
    cell6 = newCar.insertCell(6);
    cell6.innerHTML = `<button class="btn btn-outline-warning" onClick="editCar(this)">Edit</button>
                       <button class="btn btn-outline-danger" onClick="deleteCar(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById('branch').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '2020';
    document.getElementById('color').value = '';
    document.getElementById('price').value = '';
    document.getElementById('imgCar').value = '';
    selectedCar = null;
}

function editCar(td) {
    selectedCar = td.parentElement.parentElement;
    document.getElementById('branch').value = selectedCar.cells[0].innerHTML;
    document.getElementById('model').value = selectedCar.cells[1].innerHTML;
    document.getElementById('year').value = selectedCar.cells[2].innerHTML;
    document.getElementById('color').value = selectedCar.cells[3].innerHTML;
    document.getElementById('price').value = selectedCar.cells[4].innerHTML;
}
function updateCar(carData) {
    selectedCar.cells[0].innerHTML = carData.branch;
    selectedCar.cells[1].innerHTML = carData.model;
    selectedCar.cells[2].innerHTML = carData.year;
    selectedCar.cells[3].innerHTML = carData.color;
    selectedCar.cells[4].innerHTML = carData.price;
    selectedCar.cells[5].innerHTML = carData.imgCar;
}

function deleteCar(td) {
    car = td.parentElement.parentElement;
    document.getElementById('car-list').deleteRow(car.rowIndex);
    resetForm()
}
function validate() {
    isValid = true;
    if (document.getElementById("branch").value == "") {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}