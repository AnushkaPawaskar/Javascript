const vegetables = ["cucumber", "pumkin", "tomato"]
vegetables.unshift("Potato", "Onion", "Peppers");
vegetables.push("Corn", "Green Peas", "String Beans")
console.log(vegetables);
const a = vegetables.slice(3, 6);
console.log(a);
const b = vegetables.slice(7, 9);
console.log(b);
const d = vegetables.slice(3, 5)
console.log(d);

console.log("********************************************************")
const vegetables1 = ["Potato", "Onion", "Peppers", "Cucumber", "Pumpkin", "Tomato", "Corn", "Green Peas", "String Beans"];
console.log(vegetables1);
vegetables1.splice(1, 0, "Brinjal");
console.log(vegetables1);
vegetables1.splice(4, 1, "carrot");
console.log(vegetables1);

