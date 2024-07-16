document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    var dataTable = document.getElementById('dataTable');
    var isTableDisplayed = false;

    // Initial content as an array of objects
    var initialContent = [
        { name: 'Divya', rollNo: '22A91A61I0', branch: 'AIML', college: 'AEC' },
        { name: 'Sravya', rollNo: '22A91A61E2', branch: 'CSE', college: 'AEC' },
        { name: 'Sowjanya', rollNo: '22A91A61G3', branch: 'DS', college: 'ACOE' }
    ];

    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    dataTable.appendChild(thead);
    dataTable.appendChild(tbody);

    var headers = ['Name', 'Roll No', 'Branch', 'College', 'Actions']; // Updated headers
    var headerRow = document.createElement('tr');
    headers.forEach(function(headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    addButton.addEventListener('click', function() {
        if (!isTableDisplayed) {
            dataTable.style.display = 'table';
            isTableDisplayed = true;
            displayInitialContent();
        } else {
            var name = window.prompt('Enter Name:');
            var rollNo = window.prompt('Enter Roll No:');
            var branch = window.prompt('Enter Branch:');
            var college = window.prompt('Enter College:');
            if (name && rollNo && branch && college) {
                addEntry(name, rollNo, branch, college);
            }
        }
    });

    function displayInitialContent() {
        if (tbody.children.length === 0) { // Check if table body is empty
            initialContent.forEach(function(entry) {
                var row = createDataRow(entry.name, entry.rollNo, entry.branch, entry.college);
                tbody.appendChild(row);
            });
        }
    }

    function addEntry(name, rollNo, branch, college) {
        var row = createDataRow(name, rollNo, branch, college);
        tbody.appendChild(row);
        var index = getNextIndex();
        localStorage.setItem('entry_' + index, name + ',' + rollNo + ',' + branch + ',' + college);
    }

    function createDataRow(name, rollNo, branch, college) {
        var row = document.createElement('tr');
        
        var nameCell = document.createElement('td');
        nameCell.textContent = name;
        
        var rollNoCell = document.createElement('td');
        rollNoCell.textContent = rollNo;
        
        var branchCell = document.createElement('td');
        branchCell.textContent = branch;
        
        var collegeCell = document.createElement('td');
        collegeCell.textContent = college;

        var actionsCell = document.createElement('td');
        var editButton = document.createElement('button');
        editButton.className = 'Update';
        editButton.textContent = 'Update';
        editButton.onclick = function() {
            editEntry(row);
        };
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteEntry(row);
        };
        
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        
        row.appendChild(nameCell);
        row.appendChild(rollNoCell);
        row.appendChild(branchCell);
        row.appendChild(collegeCell);
        row.appendChild(actionsCell);
        
        return row;
    }

    function getNextIndex() {
        var maxIndex = -1;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.startsWith('entry_')) {
                var index = parseInt(key.split('_')[1]);
                if (index > maxIndex) {
                    maxIndex = index;
                }
            }
        }
        return maxIndex + 1;
    }

    function editEntry(row) {
        var name = prompt('Edit Name:', row.cells[0].innerText);
        var rollNo = prompt('Edit Roll No:', row.cells[1].innerText);
        var branch = prompt('Edit Branch:', row.cells[2].innerText);
        var college = prompt('Edit College:', row.cells[3].innerText);
        
        if (name !== null && rollNo !== null && branch !== null && college !== null) {
            var index = getRowIndex(row);
            localStorage.setItem('entry_' + index, name + ',' + rollNo + ',' + branch + ',' + college);
            
            row.cells[0].innerText = name;
            row.cells[1].innerText = rollNo;
            row.cells[2].innerText = branch;
            row.cells[3].innerText = college;
        }
    }

    function deleteEntry(row) {
        var index = getRowIndex(row);
        
        if (index !== -1) {
            localStorage.removeItem('entry_' + index);
            row.parentNode.removeChild(row); // Remove row from DOM
        }
    }

    function getRowIndex(row) {
        var index = -1;
        
        for (var i = 0; i < tbody.rows.length; i++) {
            if (tbody.rows[i] === row) {
                index = i;
                break;
            }
        }
        
        return index;
    }

    displayInitialContent();
});
