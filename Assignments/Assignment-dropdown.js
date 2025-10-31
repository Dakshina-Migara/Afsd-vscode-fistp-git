async function loadCompanies() {
    const response = await fetch('https://student-api.acpt.lk/api/companies');
    const companies = await response.json();

    const container = document.getElementById('companyDropdowns');
    container.innerHTML = '';

    // Create single column wrapper
    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-md-8 col-lg-6 mx-auto';

    // Create single dropdown div
    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown company-dropdown';

    // Create button
    const button = document.createElement('button');
    button.className = 'btn btn-secondary dropdown-toggle w-100';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'dropdown');
    button.setAttribute('aria-expanded', 'false');
    button.id = 'companiesDropdown';
    button.textContent = 'Company';

    // Create dropdown menu
    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu w-100';
    ul.setAttribute('aria-labelledby', 'companiesDropdown');

    // Add each company and its departments
    companies.forEach((company) => {
        // Add company header
        const companyHeader = document.createElement('li');
        const companyHeaderSpan = document.createElement('h6');
        companyHeaderSpan.className = 'dropdown-header';
        companyHeaderSpan.textContent = company.company;
        companyHeader.appendChild(companyHeaderSpan);
        ul.appendChild(companyHeader);

        // Check if company has departments
        if (company.departments && company.departments.length > 0) {
            // Add each department as dropdown item
            company.departments.forEach(department => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'dropdown-item ps-4';
                a.textContent = department.name;

                // Handle click event
                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    button.textContent = `${company.company} - ${department.name}`;
                    showDepartmentInfo(company, department);
                });

                li.appendChild(a);
                ul.appendChild(li);
            });
        } else {
            // If no departments, show a message
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.className = 'dropdown-item-text text-muted ps-4';
            span.textContent = 'No departments';
            li.appendChild(span);
            ul.appendChild(li);
        }
    });

    // Append button and menu to dropdown div
    dropdownDiv.appendChild(button);
    dropdownDiv.appendChild(ul);

    // Append to column
    colDiv.appendChild(dropdownDiv);

    // Append column to container
    container.appendChild(colDiv);

}
// Load companies when page loads
document.addEventListener('DOMContentLoaded', loadCompanies);