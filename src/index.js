// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const extractedQuantity = parseInt(quantity.value);
  const extractedPrice = parseFloat(price.innerText);
  const subTotal = extractedPrice * extractedQuantity;
  const resultSubTotal = product.querySelector(".subtotal");
  resultSubTotal.innerText = subTotal;
}

function calculateAll() {
  // I want to loop in the 2 tr and for each tr apply updtateSubtotal
  // I want to isolate the output (check html)
  // Nodelist maybe as an array then reduce the output
  const products = document.querySelectorAll(".product");
  const totalFinal = document.getElementById("final");

  products.forEach((element) => {
    updateSubtotal(element);
  });
}
calculateAll();

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
