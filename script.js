function calculateDiscountedPrice(price, salePercentage) {
  return price - price * (salePercentage / 100);
}

let originalPrice = 100;
let salePercentage = 20;
let discountedPrice = calculateDiscountedPrice(originalPrice, salePercentage);
console.log(discountedPrice);

function removeduplicates(array) {
  return Array.from(new Set(array));
}

let array = [1, 1, 4, 6, 8, 3, 2, 4, 8];
let notduplicated = removeduplicates(array);
console.log(notduplicated);

function convertArrayToObjects(data) {
  const objects = [];
  for (const element of data) {
    const obj = {};
    obj[element.name] = element.salary;
    objects.push(obj);
  }
  return objects;
}

const data = [
  { name: "gio", salary: 500 },
  { name: "ana", salary: 600 },
  { name: "nika", salary: 1000 },
  { name: "lasha", salary: 400 },
];

const result = convertArrayToObjects(data);
console.log(result);

function generateList(data) {
  const ul = document.createElement("ul");
  for (const element of data) {
    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    nameSpan.textContent = element.name;
    li.appendChild(nameSpan);
    const salarySpan = document.createElement("span");
    salarySpan.textContent = element.salary;
    li.appendChild(salarySpan);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}

const info = [
  { name: "gio", salary: 500 },
  { name: "ana", salary: 600 },
  { name: "nika", salary: 1000 },
  { name: "lasha", salary: 400 },
];

function sortAndAddAvailability(info) {
  return info
    .sort((a, b) => a.salary - b.salary)
    .map((item) => ({ ...item, isAvailable: true }));
}
[
  { name: "lasha", salary: 400, isAvailable: true },
  { name: "gio", salary: 500, isAvailable: true },
  { name: "ana", salary: 600, isAvailable: true },
  { name: "nika", salary: 1000, isAvailable: true },
];

const sortedAndAvailableData = sortAndAddAvailability(data);
console.log(sortedAndAvailableData);
