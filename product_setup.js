/* Initial setup script for Digital Depot product data*/

const productName = "CodeMaster Pro Keyboard";//what is the product
let productCategory = "Electronics";
const productId = 1001;
let price = 79.99; //how much it is
let isOnSale = false;
let stockQuantity = 55;//how many there are
let mainFeature ;
let discountCode = null;

console.log(`Now Setting Up: ${productName} (ID: ${productId})`);

console.log(`Price data type : ${typeof price}`);
console.log(`Is On Sale data type: ${typeof isOnSale}`);
console.log(`Main Feature data type: ${typeof mainFeature}`);
console.log(`Discount Code data type: ${typeof discountCode} (Remember the quirk!)`);

