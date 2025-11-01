async function loadCompanies() {
    const response = await fetch('https://student-api.acpt.lk/api/companies');
    const companies = await response.json();

    const container = document.getElementById('companyDropdowns');
    container.innerHTML = '';

    const colDiv = document.createElement('div');
    colDiv.className = 'col-12 col-md-8 col-lg-6 mx-auto';

    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown company-dropdown';


    const button = document.createElement('button');
    button.className = 'btn btn-secondary dropdown-toggle w-100';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'dropdown');
    button.setAttribute('aria-expanded', 'false');
    button.id = 'companiesDropdown';
    button.textContent = 'Company';


    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu w-100';
    ul.setAttribute('aria-labelledby', 'companiesDropdown');


    companies.forEach((company) => {
        const companyHeader = document.createElement('li');
        const companyHeaderSpan = document.createElement('h6');
        companyHeaderSpan.className = 'dropdown-header';
        companyHeaderSpan.textContent = company.company;
        companyHeader.appendChild(companyHeaderSpan);
        ul.appendChild(companyHeader);


        if (company.departments && company.departments.length > 0) {
            company.departments.forEach(department => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'dropdown-item ps-4';
                a.textContent = department.name;

                a.addEventListener('click', function (e) {
                    e.preventDefault();
                    button.textContent = `${company.company} - ${department.name}`;
                    showDepartmentInfo(company, department);
                });

                li.appendChild(a);
                ul.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.className = 'dropdown-item-text text-muted ps-4';
            span.textContent = 'No departments';
            li.appendChild(span);
            ul.appendChild(li);
        }
    });

    dropdownDiv.appendChild(button);
    dropdownDiv.appendChild(ul);

    colDiv.appendChild(dropdownDiv);

    container.appendChild(colDiv);

}
document.addEventListener('DOMContentLoaded', loadCompanies);