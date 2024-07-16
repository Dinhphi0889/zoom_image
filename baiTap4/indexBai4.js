const companyNameInput = document.getElementById('companyName');
const addCompanyButton = document.getElementById('addCompanyButton');
const companyList = document.getElementById('companyList');


addCompanyButton.addEventListener('click', () => {
  const companyName = companyNameInput.value.trim();

  if (companyName) {
    const newCompanyItem = document.createElement('li');
    newCompanyItem.textContent = companyName;
    companyList.appendChild(newCompanyItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.classList.add('btn', 'btn-sm', 'btn-danger', 'pl-4');
    deleteButton.addEventListener('click', () => {
      companyList.removeChild(newCompanyItem);
    });
    newCompanyItem.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Chưa Hoàn Thành';
    editButton.classList.add('btn', 'btn-sm', 'btn-primary');
    editButton.addEventListener('click', () => {
        editButton.textContent = 'Hoàn Thành'
        editButton.classList.add('btn-success')
        editButton.classList.remove('btn-primary')
    });
    newCompanyItem.appendChild(editButton);

    companyNameInput.value = ''; // Xóa trường nhập sau khi thêm
  }
});