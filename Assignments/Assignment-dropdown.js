
const dropdownHeader = document.getElementById('dropdownHeader');
const dropdownMenu = document.getElementById('dropdownMenu');
const selectedText = document.getElementById('selectedText');
const arrow = dropdownHeader.querySelector('.arrow');
const selectedInfo = document.getElementById('selectedInfo');
const displayCompany = document.getElementById('displayCompany');
const displayDepartment = document.getElementById('displayDepartment');

let companiesData = [];
let selectedCompany = '';
let selectedDepartment = '';

async function loadCompanies() {
    try {
        const response = await fetch('https://student-api.acpt.lk/api/companies');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        companiesData = await response.json();

        // Generate dropdown after data loads
        generateDropdown();
    } catch (error) {
        console.error('Failed to load companies:', error);
        dropdownMenu.innerHTML = `<div class="error-msg">Failed to load company data.</div>`;
    }
}


function generateDropdown() {
    dropdownMenu.innerHTML = '';

    companiesData.forEach((companyData) => {
        const companyDiv = document.createElement('div');
        companyDiv.className = 'dropdown-item';

        const companyHeader = document.createElement('div');
        companyHeader.className = 'company-item';
        companyHeader.innerHTML = `
    <div>${companyData.company}</div>
    <span class="company-arrow">▼</span>
    `;

        const departmentList = document.createElement('div');
        departmentList.className = 'department-list';

        if (!companyData.departments || companyData.departments.length === 0) {
            const noDept = document.createElement('div');
            noDept.className = 'no-departments';
            noDept.textContent = 'No departments available';
            departmentList.appendChild(noDept);
        } else {
            companyData.departments.forEach(department => {
                const deptDiv = document.createElement('div');
                deptDiv.className = 'department-item';
                deptDiv.textContent = department.name;
                deptDiv.onclick = (e) => {
                    e.stopPropagation();
                    selectDepartment(companyData.company, department.name);
                };
                departmentList.appendChild(deptDiv);
            });
        }
        companyHeader.onclick = (e) => {
            e.stopPropagation();
            toggleDepartments(departmentList, companyHeader);
        };

        companyDiv.appendChild(companyHeader);
        companyDiv.appendChild(departmentList);
        dropdownMenu.appendChild(companyDiv);
    });
}

function toggleDepartments(departmentList, companyHeader) {
    const isOpen = departmentList.classList.contains('show');

    document.querySelectorAll('.department-list').forEach(list => list.classList.remove('show'));
    document.querySelectorAll('.company-arrow').forEach(arr => arr.classList.remove('rotate'));

    if (!isOpen) {
        departmentList.classList.add('show');
        companyHeader.querySelector('.company-arrow').classList.add('rotate');
    }
}

function selectDepartment(company, department) {
    selectedCompany = company;
    selectedDepartment = department;
    selectedText.textContent = `${company} - ${department}`;
    selectedText.classList.remove('placeholder');

    displayCompany.textContent = company;
    displayDepartment.textContent = department;
    selectedInfo.style.display = 'block';

    closeDropdown();
}

function toggleDropdown() {
    const isOpen = dropdownMenu.classList.contains('show');
    if (isOpen) closeDropdown();
    else openDropdown();
}

function openDropdown() {
    dropdownMenu.classList.add('show');
    dropdownHeader.classList.add('active');
    arrow.classList.add('rotate');
}

function closeDropdown() {
    dropdownMenu.classList.remove('show');
    dropdownHeader.classList.remove('active');
    arrow.classList.remove('rotate');

    document.querySelectorAll('.department-list').forEach(list => list.classList.remove('show'));
    document.querySelectorAll('.company-arrow').forEach(arr => arr.classList.remove('rotate'));
}

dropdownHeader.addEventListener('click', toggleDropdown);

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-wrapper')) {
        closeDropdown();
    }
});
loadCompanies();

