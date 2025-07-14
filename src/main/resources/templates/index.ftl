<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>

<div class="container">
    <header class="header">
        <h1>Employee Directory</h1>
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Search by name or email" />
            <button id="filterToggle">Filter</button>
        </div>
    </header>

    <div class="controls">
        <label for="sortSelect">Sort: 
            <select id="sortSelect">
                <option value="">--Select--</option>
                <option value="firstName">First Name</option>
                <option value="department">Department</option>
            </select>
        </label>

        <label for="itemsPerPage">Show: 
            <select id="itemsPerPage">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </label>

        <button id="addEmployeeBtn" class="add-btn">Add Employee</button>
    </div>

    <div id="filterPanel" class="filter-panel hidden">
        <h3>Filter Employees</h3>
        <input type="text" id="filterFirstName" placeholder="First Name" />
        <input type="text" id="filterDepartment" placeholder="Department" />
        <input type="text" id="filterRole" placeholder="Role" />
        <div class="filter-buttons">
            <button id="applyFilter">Apply</button>
            <button id="resetFilter">Reset</button>
        </div>
    </div>

    <div id="employeeList" class="employee-list">
        <#if employees?? && employees?size gt 0>
            <#list employees as emp>
                <div class="employee-card" data-id="${emp.id}">
                    <h3>${emp.firstName} ${emp.lastName}</h3>
                    <p><strong>Email:</strong> ${emp.email}</p>
                    <p><strong>Department:</strong> ${emp.department}</p>
                    <p><strong>Role:</strong> ${emp.role}</p>
                    <div class="card-buttons">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            </#list>
        <#else>
            <p>No employees found.</p>
        </#if>
    </div>

    <div id="pagination" class="pagination"></div>

    <footer class="footer">
        <p>© 2025 Employee Directory App. All rights reserved.</p>
    </footer>
</div>

<script>
    const employees= <#if employees?? && employees?size gt 0>${employees?json_string?no_esc}<#else>[]</#if>;
</script>

<script src="/main.js"></script>
</body>
</html>
