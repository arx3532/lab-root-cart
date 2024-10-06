// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.getElementsByTagName('input')[0];
  const sub= parseFloat(price.textContent) * parseInt(quantity.value);
  const subtotal= product.querySelector('.subtotal span');
  subtotal.innerHTML = sub;
  return sub
}

function calculateAll() {

  const products = document.getElementsByClassName("product")
  let total = 0; 
  for (let i=0  ; i < products.length ; i++){
    total += updateSubtotal(products[i]);
    
  }

  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name && price > 0) {
    const newRow = document.createElement('tr');
    newRow.classList.add('product');
    newRow.innerHTML = `
      <td class="name"><span>${name}</span></td>
      <td class="price">$<span>${price.toFixed(2)}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;

    document.querySelector('#cart tbody').appendChild(newRow);


    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);


    nameInput.value = '';
    priceInput.value = 0;
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove")
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)});

  const createBtn = document.getElementById('create');
  if (createBtn){
    createBtn.addEventListener('click' , createProduct);
  }


});
