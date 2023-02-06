var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["roll"] = document.getElementById("roll").value;
    formData["mark1"] = document.getElementById("mark1").value;
    formData["mark2"] = document.getElementById("mark2").value;
    formData["cgpa"] = document.getElementById("cgpa").value;
    formData["city"] = document.getElementById("city").value;
    formData["conumber"] = document.getElementById("conumber").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.roll;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mark1;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mark2;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cgpa;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.city;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.conumber;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("mark1").value = "";    
    document.getElementById("mark2").value = "";
    document.getElementById("cgpa").value = "";
    document.getElementById("city").value = "";
    document.getElementById("conumber").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("roll").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mark1").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mark2").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cgpa").value = selectedRow.cells[5].innerHTML;
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;
    document.getElementById("conumber").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.roll;
    selectedRow.cells[3].innerHTML = formData.mark1;
    selectedRow.cells[4].innerHTML = formData.mark2;
    selectedRow.cells[5].innerHTML = formData.cgpa;
    selectedRow.cells[6].innerHTML = formData.city;
    selectedRow.cells[7].innerHTML = formData.conumber;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}