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

let totalStockValue = stockQuantity * price;

console.log(`Total stock value: $ ${totalStockValue}`);

stockQuantity -= 5;
console.log(`Updated stock quantity: ${stockQuantity}`);

let isPriceOver50 = price > 50;

console.log(`Is the price over 50? ${isPriceOver50}`);

let eligibleForStandardListing = (stockQuantity > 0) && (!isOnSale);
console.log(`Eligible for standard listing? ${eligibleForStandardListing}`);

let isStockExactly50 = stockQuantity === "50";
console.log (`Is stock exactly 50? ${isStockExactly50}`);

let isStockLoosely50 = stockQuantity == "50";
console.log (`Is stock loosely 50? ${isStockLoosely50}`);

let productSummary = `
--- Product Summary ---
Product Name: ${productName}
Category: ${productCategory}
Price: ${price}
Stock: ${stockQuantity} units available
------------------------
`;
console.log(productSummary);