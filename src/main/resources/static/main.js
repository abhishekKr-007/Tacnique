let employees = [...employeeData];
let filteredEmployees = [...employees];
let currentPage = 1;
let itemsPerPage = 10;

// Render employees
function renderEmployees() {
    const list = document.getElementById('employeeList');
    list.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const current = filteredEmployees.slice(start, end);

    current.forEach(emp => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        card.innerHTML = `
            <h3>${emp.firstName} ${emp.lastName}</h3>
            <p><strong>Email:</strong> ${emp.email}</p>
            <p><strong>Department:</strong> ${emp.department}</p>
            <p><strong>Role:</strong> ${emp.role}</p>
            <div class="card-buttons">
                <button class="edit-btn" onclick="editEmployee(${emp.id})">Edit</button>
                <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
            </div>
        `;
        list.appendChild(card);
    });

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = (i === currentPage) ? 'active' : '';
        btn.addEventListener('click', () => {
            currentPage = i;
            renderEmployees();
        });
        pagination.appendChild(btn);
    }
}

function searchEmployees(keyword) {
    keyword = keyword.toLowerCase();
    filteredEmployees = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(keyword) ||
        emp.lastName.toLowerCase().includes(keyword) ||
        emp.email.toLowerCase().includes(keyword)
    );
    currentPage = 1;
    renderEmployees();
}

function applyFilters() {
    const fname = document.getElementById('filterFirstName').value.toLowerCase();
    const dept = document.getElementById('filterDepartment').value.toLowerCase();
    const role = document.getElementById('filterRole').value.toLowerCase();

    filteredEmployees = employees.filter(emp => {
        return (!fname || emp.firstName.toLowerCase().includes(fname)) &&
               (!dept || emp.department.toLowerCase().includes(dept)) &&
               (!role || emp.role.toLowerCase().includes(role));
    });

    currentPage = 1;
    renderEmployees();
}

function sortEmployees(by) {
    filteredEmployees.sort((a, b) => a[by].localeCompare(b[by]));
    renderEmployees();
}

function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employees = employees.filter(emp => emp.id !== id);
        filteredEmployees = [...employees];
        renderEmployees();
    }
}

function editEmployee(id) {
    window.location.href = `form.html?id=${id}`;
}

// Events
document.getElementById('searchInput').addEventListener('input', e => {
    searchEmployees(e.target.value);
});

document.getElementById('sortSelect').addEventListener('change', e => {
    const val = e.target.value;
    if (val) sortEmployees(val);
});

document.getElementById('itemsPerPage').addEventListener('change', e => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderEmployees();
});

document.getElementById('applyFilter').addEventListener('click', applyFilters);

document.getElementById('resetFilter').addEventListener('click', () => {
    document.getElementById('filterFirstName').value = '';
    document.getElementById('filterDepartment').value = '';
    document.getElementById('filterRole').value = '';
    filteredEmployees = [...employees];
    renderEmployees();
});

document.getElementById('filterToggle').addEventListener('click', () => {
    document.getElementById('filterPanel').classList.toggle('hidden');
});

document.getElementById('addEmployeeBtn').addEventListener('click', () => {
    window.location.href = 'form.html';
});

// Initial render
renderEmployees();
