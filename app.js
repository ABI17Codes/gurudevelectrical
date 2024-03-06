// const btnwatts = document.getElementById("btn-watts");
// const color = document.getElementById("color");
// const prize = document.getElementById("prize");

// year 
const d = new Date();
let year = d.getFullYear();
document.getElementById("copy-year").innerHTML = year;




function handlelightprizechange7W() {
  prize.innerHTML = 67;
}
function handlelightprizechange9W() {
  prize.innerHTML = 65;
}
function handlelightprizechange12W() {
  prize.innerHTML = 150;
}
function handlelightprizechange14W() {
  prize.innerHTML = 170;
}
function handlelightprizechange18W() {
  prize.innerHTML = 230;
}
function handlelightprizechange20W() {
  prize.innerHTML = 250;
}
function handlelightprizechange23W() {
  prize.innerHTML = 340;
}
function handlelightprizechange26W() {
  prize.innerHTML = 370;
}
function handlelightprizechange30W() {
  prize.innerHTML = 425;
}
function handlelightprizechange40W() {
  prize.innerHTML = 540;
}
function handlelightprizechange50W() {
  prize.innerHTML = 630;
}
function handlepennalprizechange5W(){
  prize.innerHTML = 210;
}
function handlepennalprizechange10W(){
  prize.innerHTML = 270;
}
function handlepennalprizechange12W(){
  prize.innerHTML = 340;
} 
function handlepennalprizechange15W(){
  prize.innerHTML = 380;
}


function handlepennal2prizechange5W(){
  prize.innerHTML = 145;
}
function handlepennal2prizechange10W(){
  prize.innerHTML = 165;
}
function handlepennal2prizechange20W(){
  prize.innerHTML = 145;
}
function handlepennal2prizechange24W(){
  prize.innerHTML = 240;
}
function handlepennal2prizechange28W(){
  prize.innerHTML = 350;
}
function handlepennal2prizechange36W(){
  prize.innerHTML = 450;
}
function handlepennal2prizechange40W(){
  prize.innerHTML = 550;
}
function handlepennal2prizechange50W(){
  prize.innerHTML = 650;
}
function handlepennal3prizechange5W(){
  prize.innerHTML = 155;
}
function handlepennal3prizechange7W(){
  prize.innerHTML = 185;
}
function handlepennal3prizechange9W(){
  prize.innerHTML = 210;
}
function handlepennalled3in1prizechange5W(){
  prize.innerHTML = 290;
}
function handlepennalled3in1prizechange10W(){
  prize.innerHTML = 380;
}
function handlepennalled3in1prizechange15W(){
  prize.innerHTML = 500;
}

function handlepennalledsurfaceprizechange6W(){
  prize.innerHTML = 415;
}
function handlepennalledsurfaceprizechange12W(){
  prize.innerHTML = 510;
}
function handlepennalledsurfaceprizechange18W(){
  prize.innerHTML = 720;
}
function handlepennalledsurfaceprizechange24W(){
  prize.innerHTML = 960;
}

// image change

function handleimagechangeR(){
  document.getElementById('SQUARE-ROUND-image').src = "../asstes/images/cromptonledpennal.png"
}
function handleimagechangeS(){
  document.getElementById('SQUARE-ROUND-image').src = '../asstes/images/square-light.png'
}

function handleledsurfaceimagechangeR(){
  document.getElementById('SQUARE-ROUND-image').src = '../asstes/images/LED SURFACE PANEL MODEL.png';
  document.getElementById('SQUARE-ROUND-image').style.background = black;
}
function handleledsurfaceimagechangeS(){
  document.getElementById('SQUARE-ROUND-image').src = '../asstes/images/led surface SQUARE model.png'
}
// // Fetching product details
// fetch("productdetails.json")
// const product = document
//   .then((response) => response.json())
//   .then((productdetails) => {
//     // Displaying product cards
//     productdetails.forEach((item) => {
//       let productCard = document.createElement("div");
//       productCard.classList.add("col");
//       productCard.innerHTML = `
//         <div class="card m-2 border border-4 rounded-3" style="max-width: 17rem">
//           <img src=${item.images} class="card-img-top" alt="..." />
//           <div class="card-body">
//             <p class="card-title">${item.name}</p>
//             <button onclick="showProductDetails('${item.id}')" class="btn btn-primary">
//               View Details
//             </button>
//           </div>
//         </div>
//       `;
//       productsContainer.appendChild(productCard);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // Function to show product details
// function showProductDetails(productId) {
//   // Clear previous details
//   productDetailsContainer.innerHTML = "";

//   // Find the product with the specified id
//   const selectedProduct = productdetails.find((item) => item.id === productId);

//   if (selectedProduct) {
//     // Display details for the selected product
//     let productDetailCard = document.createElement("div");
//     productDetailCard.innerHTML = `
//       <div>
//         <h2 class="pb-3">${selectedProduct.name}</h2>
//         <p class="fs-5" id="description">${selectedProduct.description}</p>
//         <p>Price: &#x20B9 <span id="prize">${selectedProduct.price}</span></p>
//         <!-- Add more HTML content as needed -->
//         <button type="button" id="color" class="btn btn-secondary m-1">
//           ${selectedProduct.color}
//         </button>
//         <!-- Add more buttons and content based on your product details -->
//       </div>
//     `;
//     productDetailsContainer.appendChild(productDetailCard);
//   }
// }

// fetch("productdetails.json")
//   .then((response) => response.json())
//   .then((productdetail) => {
//     productdetail.forEach((item) => {
//       let products = document.getElementById("product");
//       let viewdetails = document.createElement('a');
//       viewdetails.href = "/productdetails.html?id=" + item.id;
//       viewdetails.classList.add('btn', 'btn-primary');
//       products.innerHTML += `
//         <div class="col">
//           <div class="card m-2 border border-4 rounded-3" style="max-width: 17rem">
//             <img src=${item.images} class="card-img-top" alt="..." />
//             <div class="card-body">
//               <p class="card-title">${item.name}</p>
//             </div>
//           </div>
//         </div>
//       `;
//     });
//   })
//   .then(() => {
//     const productdetails = document.getElementById("productdetails");
//     Object.values(productdetails).forEach(function (item) {
//       console.log(item);
//       const productHTML = `
//         <h2 class="pb-3">${item.name}</h2>
//         <p class="fs-5" id="description">
//           ${productdetails.name}
//         </p>
//         <p>Price:&#x20B9 <span id="prize"></span></p>
//         <p class="pt-3 fw-bold fs-4"></p>
//         <button type="button" id="color" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" id="color" class="btn btn-secondary m-1">${productdetails.name}</button>

//         <p class="pt-3 fw-bold fs-4">Capacity</p>
//         <button type="button" onclick="handlelightprizechange7W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange9W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange12W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange14W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange18W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange20W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange23W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>
//         <button type="button" onclick="handlelightprizechange26W()" id="btn-watts" class="btn btn-secondary m-1">${productdetails.name}</button>

//         <a href=""><button type="button" class="btn btn-primary btn-lg m-4">${productdetails.name}</button></a>
//         <a href="./contact.html"><button type="button"  class="btn btn-primary btn-lg">${productdetails.name}</button></a>
//       `;
//       productList.insertAdjacentHTML("beforeend", productHTML);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
