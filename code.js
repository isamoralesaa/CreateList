/***
 * Create a Product List
 */

const btnSave  = document.getElementById('svProd');
const nameProd = document.querySelector('.nameProd');
const list     = document.querySelector('.list');

btnSave.addEventListener("click", e => {
    if (nameProd.value == '') {
        alert("Enter product name");
    } else {
        addProduct();
    }
});

const addProduct = () => {
    const li = document.createElement('LI');

    li.innerHTML = nameProd.value;
    list.appendChild(li);

    cleanInputName();
}

const cleanInputName = () => {
    nameProd.value = '';
}